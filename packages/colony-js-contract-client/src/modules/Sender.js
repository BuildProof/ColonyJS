/* @flow */

import type BigNumber from 'bn.js';
import type {
  EstimateFn,
  EventHandlers,
  SendFn,
  Transaction,
  TransactionOptions,
  TransactionReceipt,
} from '@colony/colony-js-adapter';

import { raceAgainstTimeout } from '@colony/colony-js-utils';

import ContractClient from './ContractClient';
import { DEFAULT_TIMEOUT, MINING_TIMEOUT } from '../constants';
import Validator from './Validator';

import type { SenderDef } from '../types';

type SendOptions = {
  events?: EventHandlers,
  estimate?: boolean,
  miningTimeoutMs?: number,
  timeoutMs: number,
  waitForMining?: boolean,
} & TransactionOptions;

type ContractResponseMeta = {
  transaction: Transaction,
  receipt?: TransactionReceipt,
  receiptPromise?: Promise<TransactionReceipt>,
};

type ContractResponse<EventData> = {
  eventData?: EventData,
  eventDataPromise?: Promise<EventData>,
  meta: ContractResponseMeta,
};

export default class Sender<
  Params: {},
  EventData: {},
  // eslint-disable-next-line
  IContractClient: ContractClient<*>
> extends Validator<Params> {
  static eventHandlers: EventHandlers;
  sendFn: SendFn<*>;
  estimateFn: EstimateFn<*>;
  client: IContractClient;
  static create(
    client: IContractClient,
    { params, eventHandlers = {}, sendFn, estimateFn, getArgs }: SenderDef,
  ): Sender<Params, EventData, IContractClient> {
    class _Sender extends Sender<Params, EventData, IContractClient> {
      static params = params;
      static eventHandlers = eventHandlers;
      getArgs(_params: Params): Array<*> {
        return getArgs
          ? getArgs.call(this, _params)
          : this.constructor.getArgs(_params);
      }
    }
    return new _Sender(client, sendFn, estimateFn);
  }
  // For overloading
  getArgs(params: Params): Array<*> {
    return this.constructor.getArgs(params);
  }
  constructor(
    client: IContractClient,
    sendFn?: SendFn<*>,
    estimateFn?: EstimateFn<*>,
  ) {
    super();
    this.client = client;
    if (typeof estimateFn === 'function') this.estimateFn = estimateFn;
    if (typeof sendFn === 'function') this.sendFn = sendFn;
  }
  async estimate(
    params: Params,
    { timeoutMs }: SendOptions,
  ): Promise<BigNumber> {
    if (typeof this.estimateFn !== 'function')
      throw new TypeError('Expected an estimate function for Sender');

    return raceAgainstTimeout(
      this.estimateFn(...this.getArgs(params)),
      timeoutMs,
    );
  }
  async send(
    params: Params,
    options: SendOptions,
  ): Promise<ContractResponse<EventData>> {
    let receipt;
    if (typeof this.sendFn !== 'function')
      throw new TypeError('Expected a send function for Sender');

    const {
      timeoutMs = DEFAULT_TIMEOUT,
      miningTimeoutMs = MINING_TIMEOUT,
      waitForMining = true,
      ...transactionOptions
    } =
      options || {};
    const transaction = await this.sendTransaction(
      params,
      transactionOptions,
      timeoutMs,
    );
    const receiptPromise = await this.client.adapter.getTransactionReceipt(
      transaction.hash,
    );

    if (waitForMining) {
      // Await the receipt first if we're waiting for mining; if it wasn't
      // successful, return immediately rather than waiting for events/mined tx
      receipt = await receiptPromise;
      if (receipt.status === 0) {
        return {
          meta: {
            receipt,
            transaction,
          },
        };
      }
    }

    const eventDataPromise = this.client.adapter.getEventData({
      contract: this.client.contract,
      events: this.constructor.eventHandlers,
      timeoutMs: miningTimeoutMs,
      transactionHash: transaction.hash,
    });

    return waitForMining
      ? {
          eventData: await eventDataPromise,
          meta: {
            receipt,
            transaction,
          },
        }
      : {
          eventDataPromise,
          meta: {
            receiptPromise,
            transaction,
          },
        };
  }
  async sendTransaction(
    params: Params,
    transactionOptions: {},
    timeoutMs: number,
  ) {
    return raceAgainstTimeout(
      this.sendFn(...this.getArgs(params), transactionOptions),
      timeoutMs,
    );
  }
}
