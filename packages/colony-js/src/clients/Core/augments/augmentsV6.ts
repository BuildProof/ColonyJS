import {
  type ContractTransaction,
  type BigNumber,
  type BigNumberish,
} from 'ethers';
import {
  type TxOverrides,
  ColonyRole,
  getPermissionProofs,
} from '@colony/core';

import { type ColonyNetworkClient } from '../../ColonyNetworkClient.js';
import {
  type IColonyV13,
  type IColonyV14,
  type IColonyV15,
  type IColonyV16,
  type IColonyV17,
} from '../contracts.js';
import { type AugmentedIColony } from './commonAugments.js';
import { type ColonyAugmentsV3 } from './augmentsV3.js';
import { type ColonyAugmentsV4 } from './augmentsV4.js';
import {
  addAugments as addAugmentsV5,
  type ColonyAugmentsV5,
  type AugmentedEstimateV5,
} from './augmentsV5.js';

type ValidColony =
  | IColonyV13
  | IColonyV14
  | IColonyV15
  | IColonyV16
  | IColonyV17;

/*
 * Estimates
 */
export interface AugmentedEstimateV6 extends AugmentedEstimateV5 {
  /**
   * Same as {@link deprecateDomain}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - Id of the domain being deprecated
   * @param _deprecated - Whether the domain should be deprecated (true) or undeprecated (false)
   */
  deprecateDomainWithProofs(
    _domainId: BigNumberish,
    _deprecated: boolean,
    overrides?: TxOverrides,
  ): Promise<BigNumber>;
}

/*
 * Extension Methods
 */
export type ColonyAugmentsV6<T extends ValidColony> = {
  /**
   * Same as {@link deprecateDomain}, but let colonyJS figure out the permission proofs for you.
   * Always prefer this method, except when you have good reason not to.
   * @param _domainId - Id of the domain being deprecated
   * @param _deprecated - Whether the domain should be deprecated (true) or undeprecated (false)
   */
  deprecateDomainWithProofs(
    _domainId: BigNumberish,
    _deprecated: boolean,
    overrides?: TxOverrides,
  ): Promise<ContractTransaction>;

  estimateGas: T['estimateGas'] & AugmentedEstimateV6;
};

type AllAugments = AugmentedIColony<ValidColony> &
  ColonyAugmentsV6<ValidColony>;

/*
 * Extension Methods
 */

async function deprecateDomainWithProofs(
  this: AllAugments,
  _domainId: BigNumberish,
  _deprecated: boolean,
  overrides: TxOverrides = {},
): Promise<ContractTransaction> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.deprecateDomain(
    permissionDomainId,
    childSkillIndex,
    _domainId,
    _deprecated,
    overrides,
  );
}

/*
 * Estimates
 */
async function estimateDeprecateDomainWithProofs(
  this: AllAugments,
  _domainId: BigNumberish,
  _deprecated: boolean,
  overrides: TxOverrides = {},
): Promise<BigNumber> {
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.networkClient,
    this,
    _domainId,
    ColonyRole.Architecture,
  );
  return this.estimateGas.deprecateDomain(
    permissionDomainId,
    childSkillIndex,
    _domainId,
    _deprecated,
    overrides,
  );
}

/*
 * Bindings
 */
export const addAugments = (
  instance: AugmentedIColony<ValidColony>,
  networkClient: ColonyNetworkClient,
): ColonyAugmentsV6<ValidColony> => {
  // Add all augments from v5, because these are also still valid
  const augmentedInstance = addAugmentsV5(
    instance,
    networkClient,
  ) as AugmentedIColony<ValidColony> &
    ColonyAugmentsV3<ValidColony> &
    ColonyAugmentsV4<ValidColony> &
    ColonyAugmentsV5<ValidColony> &
    ColonyAugmentsV6<ValidColony>;

  augmentedInstance.deprecateDomainWithProofs =
    deprecateDomainWithProofs.bind(augmentedInstance);

  augmentedInstance.estimateGas.deprecateDomainWithProofs =
    estimateDeprecateDomainWithProofs.bind(augmentedInstance);

  return augmentedInstance;
};
