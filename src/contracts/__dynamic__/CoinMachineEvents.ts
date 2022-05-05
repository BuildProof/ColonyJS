/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface CoinMachineEventsInterface extends utils.Interface {
  functions: {};

  events: {
    "ExtensionInitialised()": EventFragment;
    "LogSetAuthority(address)": EventFragment;
    "LogSetOwner(address)": EventFragment;
    "PeriodUpdated(uint256,uint256)": EventFragment;
    "TokensBought(address,uint256,uint256)": EventFragment;
    "TokensBought(address,address,uint256,uint256)": EventFragment;
    "PriceEvolutionSet(bool)": EventFragment;
    "WhitelistSet(address)": EventFragment;
    "MetaTransactionExecuted(address,address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExtensionInitialised"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetAuthority"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PeriodUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TokensBought(address,uint256,uint256)"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TokensBought(address,address,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceEvolutionSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetaTransactionExecuted"): EventFragment;
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

export interface PeriodUpdatedEventObject {
  activePeriod: BigNumber;
  currentPeriod: BigNumber;
}
export type PeriodUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  PeriodUpdatedEventObject
>;

export type PeriodUpdatedEventFilter = TypedEventFilter<PeriodUpdatedEvent>;

export interface TokensBought_address_uint256_uint256_EventObject {
  buyer: string;
  numTokens: BigNumber;
  totalCost: BigNumber;
}
export type TokensBought_address_uint256_uint256_Event = TypedEvent<
  [string, BigNumber, BigNumber],
  TokensBought_address_uint256_uint256_EventObject
>;

export type TokensBought_address_uint256_uint256_EventFilter =
  TypedEventFilter<TokensBought_address_uint256_uint256_Event>;

export interface TokensBought_address_address_uint256_uint256_EventObject {
  buyer: string;
  token: string;
  numTokens: BigNumber;
  totalCost: BigNumber;
}
export type TokensBought_address_address_uint256_uint256_Event = TypedEvent<
  [string, string, BigNumber, BigNumber],
  TokensBought_address_address_uint256_uint256_EventObject
>;

export type TokensBought_address_address_uint256_uint256_EventFilter =
  TypedEventFilter<TokensBought_address_address_uint256_uint256_Event>;

export interface PriceEvolutionSetEventObject {
  evolvePrice: boolean;
}
export type PriceEvolutionSetEvent = TypedEvent<
  [boolean],
  PriceEvolutionSetEventObject
>;

export type PriceEvolutionSetEventFilter =
  TypedEventFilter<PriceEvolutionSetEvent>;

export interface WhitelistSetEventObject {
  whitelist: string;
}
export type WhitelistSetEvent = TypedEvent<[string], WhitelistSetEventObject>;

export type WhitelistSetEventFilter = TypedEventFilter<WhitelistSetEvent>;

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

export interface CoinMachineEvents extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CoinMachineEventsInterface;

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

    "PeriodUpdated(uint256,uint256)"(
      activePeriod?: null,
      currentPeriod?: null
    ): PeriodUpdatedEventFilter;
    PeriodUpdated(
      activePeriod?: null,
      currentPeriod?: null
    ): PeriodUpdatedEventFilter;

    "TokensBought(address,uint256,uint256)"(
      buyer?: null,
      numTokens?: null,
      totalCost?: null
    ): TokensBought_address_uint256_uint256_EventFilter;
    "TokensBought(address,address,uint256,uint256)"(
      buyer?: string | null,
      token?: null,
      numTokens?: null,
      totalCost?: null
    ): TokensBought_address_address_uint256_uint256_EventFilter;

    "PriceEvolutionSet(bool)"(evolvePrice?: null): PriceEvolutionSetEventFilter;
    PriceEvolutionSet(evolvePrice?: null): PriceEvolutionSetEventFilter;

    "WhitelistSet(address)"(whitelist?: null): WhitelistSetEventFilter;
    WhitelistSet(whitelist?: null): WhitelistSetEventFilter;

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
  };

  estimateGas: {};

  populateTransaction: {};
}
