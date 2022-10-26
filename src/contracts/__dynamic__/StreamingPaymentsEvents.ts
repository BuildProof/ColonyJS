/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  Signer,
  utils,
} from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface StreamingPaymentsEventsInterface extends utils.Interface {
  functions: {};

  events: {
    "ExtensionInitialised()": EventFragment;
    "LogSetAuthority(address)": EventFragment;
    "LogSetOwner(address)": EventFragment;
    "MetaTransactionExecuted(address,address,bytes)": EventFragment;
    "PaymentTokenUpdated(address,uint256,address,uint256)": EventFragment;
    "StreamingPaymentClaimed(address,uint256,address,uint256)": EventFragment;
    "StreamingPaymentCreated(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExtensionInitialised"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetAuthority"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetaTransactionExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentTokenUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StreamingPaymentClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StreamingPaymentCreated"): EventFragment;
}

export interface ExtensionInitialisedEventObject {}
export type ExtensionInitialisedEvent = TypedEvent<
  [],
  ExtensionInitialisedEventObject
>;

export type ExtensionInitialisedEventFilter =
  TypedEventFilter<ExtensionInitialisedEvent>;

export interface LogSetAuthorityEventObject {
  authority: string;
}
export type LogSetAuthorityEvent = TypedEvent<
  [string],
  LogSetAuthorityEventObject
>;

export type LogSetAuthorityEventFilter = TypedEventFilter<LogSetAuthorityEvent>;

export interface LogSetOwnerEventObject {
  owner: string;
}
export type LogSetOwnerEvent = TypedEvent<[string], LogSetOwnerEventObject>;

export type LogSetOwnerEventFilter = TypedEventFilter<LogSetOwnerEvent>;

export interface MetaTransactionExecutedEventObject {
  user: string;
  relayerAddress: string;
  functionSignature: string;
}
export type MetaTransactionExecutedEvent = TypedEvent<
  [string, string, string],
  MetaTransactionExecutedEventObject
>;

export type MetaTransactionExecutedEventFilter =
  TypedEventFilter<MetaTransactionExecutedEvent>;

export interface PaymentTokenUpdatedEventObject {
  agent: string;
  streamingPaymentId: BigNumber;
  token: string;
  amount: BigNumber;
}
export type PaymentTokenUpdatedEvent = TypedEvent<
  [string, BigNumber, string, BigNumber],
  PaymentTokenUpdatedEventObject
>;

export type PaymentTokenUpdatedEventFilter =
  TypedEventFilter<PaymentTokenUpdatedEvent>;

export interface StreamingPaymentClaimedEventObject {
  agent: string;
  streamingPaymentId: BigNumber;
  token: string;
  amount: BigNumber;
}
export type StreamingPaymentClaimedEvent = TypedEvent<
  [string, BigNumber, string, BigNumber],
  StreamingPaymentClaimedEventObject
>;

export type StreamingPaymentClaimedEventFilter =
  TypedEventFilter<StreamingPaymentClaimedEvent>;

export interface StreamingPaymentCreatedEventObject {
  agent: string;
  streamingPaymentId: BigNumber;
}
export type StreamingPaymentCreatedEvent = TypedEvent<
  [string, BigNumber],
  StreamingPaymentCreatedEventObject
>;

export type StreamingPaymentCreatedEventFilter =
  TypedEventFilter<StreamingPaymentCreatedEvent>;

export interface StreamingPaymentsEvents extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StreamingPaymentsEventsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "ExtensionInitialised()"(): ExtensionInitialisedEventFilter;
    ExtensionInitialised(): ExtensionInitialisedEventFilter;

    "LogSetAuthority(address)"(
      authority?: string | null
    ): LogSetAuthorityEventFilter;
    LogSetAuthority(authority?: string | null): LogSetAuthorityEventFilter;

    "LogSetOwner(address)"(owner?: string | null): LogSetOwnerEventFilter;
    LogSetOwner(owner?: string | null): LogSetOwnerEventFilter;

    "MetaTransactionExecuted(address,address,bytes)"(
      user?: null,
      relayerAddress?: null,
      functionSignature?: null
    ): MetaTransactionExecutedEventFilter;
    MetaTransactionExecuted(
      user?: null,
      relayerAddress?: null,
      functionSignature?: null
    ): MetaTransactionExecutedEventFilter;

    "PaymentTokenUpdated(address,uint256,address,uint256)"(
      agent?: null,
      streamingPaymentId?: BigNumberish | null,
      token?: null,
      amount?: null
    ): PaymentTokenUpdatedEventFilter;
    PaymentTokenUpdated(
      agent?: null,
      streamingPaymentId?: BigNumberish | null,
      token?: null,
      amount?: null
    ): PaymentTokenUpdatedEventFilter;

    "StreamingPaymentClaimed(address,uint256,address,uint256)"(
      agent?: null,
      streamingPaymentId?: BigNumberish | null,
      token?: null,
      amount?: null
    ): StreamingPaymentClaimedEventFilter;
    StreamingPaymentClaimed(
      agent?: null,
      streamingPaymentId?: BigNumberish | null,
      token?: null,
      amount?: null
    ): StreamingPaymentClaimedEventFilter;

    "StreamingPaymentCreated(address,uint256)"(
      agent?: null,
      streamingPaymentId?: null
    ): StreamingPaymentCreatedEventFilter;
    StreamingPaymentCreated(
      agent?: null,
      streamingPaymentId?: null
    ): StreamingPaymentCreatedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
