/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface TokenLockingInterface extends Interface {
  functions: {
    setOwner: TypedFunctionDescription<{ encode([owner_]: [string]): string }>;

    setAuthority: TypedFunctionDescription<{
      encode([authority_]: [string]): string;
    }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    authority: TypedFunctionDescription<{ encode([]: []): string }>;

    setColonyNetwork: TypedFunctionDescription<{
      encode([_colonyNetwork]: [string]): string;
    }>;

    getColonyNetwork: TypedFunctionDescription<{ encode([]: []): string }>;

    lockToken: TypedFunctionDescription<{ encode([_token]: [string]): string }>;

    unlockTokenForUser: TypedFunctionDescription<{
      encode([_token, _user, _lockId]: [string, string, BigNumberish]): string;
    }>;

    incrementLockCounterTo: TypedFunctionDescription<{
      encode([_token, _lockId]: [string, BigNumberish]): string;
    }>;

    deposit: TypedFunctionDescription<{
      encode([_token, _amount]: [string, BigNumberish]): string;
    }>;

    withdraw: TypedFunctionDescription<{
      encode([_token, _amount]: [string, BigNumberish]): string;
    }>;

    punishStakers: TypedFunctionDescription<{
      encode([_stakers, _beneficiary, _amount]: [
        string[],
        string,
        BigNumberish
      ]): string;
    }>;

    getTotalLockCount: TypedFunctionDescription<{
      encode([_token]: [string]): string;
    }>;

    getUserLock: TypedFunctionDescription<{
      encode([_token, _user]: [string, string]): string;
    }>;
  };

  events: {
    LogSetAuthority: TypedEventDescription<{
      encodeTopics([authority]: [string | null]): string[];
    }>;

    LogSetOwner: TypedEventDescription<{
      encodeTopics([owner]: [string | null]): string[];
    }>;

    ColonyNetworkSet: TypedEventDescription<{
      encodeTopics([colonyNetwork]: [null]): string[];
    }>;

    TokenLocked: TypedEventDescription<{
      encodeTopics([token, lockCount]: [null, null]): string[];
    }>;

    UserTokenUnlocked: TypedEventDescription<{
      encodeTopics([token, user, lockId]: [null, null, null]): string[];
    }>;

    UserTokenDeposited: TypedEventDescription<{
      encodeTopics([token, user, amount, timestamp]: [
        null,
        null,
        null,
        null
      ]): string[];
    }>;

    UserTokenWithdrawn: TypedEventDescription<{
      encodeTopics([token, user, amount]: [null, null, null]): string[];
    }>;

    ReputationMinerPenalised: TypedEventDescription<{
      encodeTopics([miner, beneficiary, tokensLost]: [
        null,
        null,
        null
      ]): string[];
    }>;
  };
}

export class TokenLocking extends Contract {
  connect(signerOrProvider: Signer | Provider | string): TokenLocking;
  attach(addressOrName: string): TokenLocking;
  deployed(): Promise<TokenLocking>;

  on(event: EventFilter | string, listener: Listener): TokenLocking;
  once(event: EventFilter | string, listener: Listener): TokenLocking;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): TokenLocking;
  removeAllListeners(eventName: EventFilter | string): TokenLocking;
  removeListener(eventName: any, listener: Listener): TokenLocking;

  interface: TokenLockingInterface;

  functions: {
    setOwner(
      owner_: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setAuthority(
      authority_: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    owner(): Promise<string>;

    authority(): Promise<string>;

    setColonyNetwork(
      _colonyNetwork: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getColonyNetwork(): Promise<string>;

    lockToken(
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    unlockTokenForUser(
      _token: string,
      _user: string,
      _lockId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    incrementLockCounterTo(
      _token: string,
      _lockId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deposit(
      _token: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    withdraw(
      _token: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    punishStakers(
      _stakers: string[],
      _beneficiary: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getTotalLockCount(_token: string): Promise<BigNumber>;

    getUserLock(
      _token: string,
      _user: string
    ): Promise<{
      lockCount: BigNumber;
      balance: BigNumber;
      timestamp: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;
  };

  setOwner(
    owner_: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setAuthority(
    authority_: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  owner(): Promise<string>;

  authority(): Promise<string>;

  setColonyNetwork(
    _colonyNetwork: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getColonyNetwork(): Promise<string>;

  lockToken(
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  unlockTokenForUser(
    _token: string,
    _user: string,
    _lockId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  incrementLockCounterTo(
    _token: string,
    _lockId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  deposit(
    _token: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  withdraw(
    _token: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  punishStakers(
    _stakers: string[],
    _beneficiary: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getTotalLockCount(_token: string): Promise<BigNumber>;

  getUserLock(
    _token: string,
    _user: string
  ): Promise<{
    lockCount: BigNumber;
    balance: BigNumber;
    timestamp: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  filters: {
    LogSetAuthority(authority: string | null): EventFilter;

    LogSetOwner(owner: string | null): EventFilter;

    ColonyNetworkSet(colonyNetwork: null): EventFilter;

    TokenLocked(token: null, lockCount: null): EventFilter;

    UserTokenUnlocked(token: null, user: null, lockId: null): EventFilter;

    UserTokenDeposited(
      token: null,
      user: null,
      amount: null,
      timestamp: null
    ): EventFilter;

    UserTokenWithdrawn(token: null, user: null, amount: null): EventFilter;

    ReputationMinerPenalised(
      miner: null,
      beneficiary: null,
      tokensLost: null
    ): EventFilter;
  };

  estimate: {
    setOwner(owner_: string): Promise<BigNumber>;

    setAuthority(authority_: string): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    authority(): Promise<BigNumber>;

    setColonyNetwork(_colonyNetwork: string): Promise<BigNumber>;

    getColonyNetwork(): Promise<BigNumber>;

    lockToken(_token: string): Promise<BigNumber>;

    unlockTokenForUser(
      _token: string,
      _user: string,
      _lockId: BigNumberish
    ): Promise<BigNumber>;

    incrementLockCounterTo(
      _token: string,
      _lockId: BigNumberish
    ): Promise<BigNumber>;

    deposit(_token: string, _amount: BigNumberish): Promise<BigNumber>;

    withdraw(_token: string, _amount: BigNumberish): Promise<BigNumber>;

    punishStakers(
      _stakers: string[],
      _beneficiary: string,
      _amount: BigNumberish
    ): Promise<BigNumber>;

    getTotalLockCount(_token: string): Promise<BigNumber>;

    getUserLock(_token: string, _user: string): Promise<BigNumber>;
  };
}
