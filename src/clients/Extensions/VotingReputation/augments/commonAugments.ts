import {
  constants,
  ContractTransaction,
  BigNumberish,
  BigNumber,
  BytesLike,
  Overrides,
} from 'ethers';

import {
  AugmentedIColony,
  getPermissionProofs,
  getChildIndex,
} from '../../../Core/augments/commonAugments';
import { ColonyRole } from '../../../../types';

import { VotingReputationVersion } from '../exports';
import { AnyVotingReputation } from '../../../../contracts/VotingReputation/exports';
import { ClientType } from '../../../..';

const { MaxUint256 } = constants;

export type AugmentedEstimate<
  T extends AnyVotingReputation = AnyVotingReputation,
> = T['estimateGas'] & {
  createDomainMotionWithProofs(
    /// Domain in which the voting will take place in
    _domainId: BigNumberish,
    _action: BytesLike,
    _key: BytesLike,
    _value: BytesLike,
    _branchMask: BigNumberish,
    _siblings: BytesLike[],
    overrides?: Overrides,
  ): Promise<BigNumber>;

  stakeMotionWithProofs(
    _motionId: BigNumberish,
    _vote: BigNumberish,
    _amount: BigNumberish,
    _key: BytesLike,
    _value: BytesLike,
    _branchMask: BigNumberish,
    _siblings: BytesLike[],
    overrides?: Overrides,
  ): Promise<BigNumber>;

  escalateMotionWithProofs(
    _motionId: BigNumberish,
    _newDomainId: BigNumberish, // parent, or ancestor, domain id
    _key: BytesLike,
    _value: BytesLike,
    _branchMask: BigNumberish,
    _siblings: BytesLike[],
    overrides?: Overrides,
  ): Promise<BigNumber>;

  claimRewardWithProofs(
    _motionId: BigNumberish,
    _staker: string,
    _vote: BigNumberish,
    overrides?: Overrides,
  ): Promise<BigNumber>;
};

export type AugmentedVotingReputation<
  T extends AnyVotingReputation = AnyVotingReputation,
> = T & {
  clientType: ClientType.VotingReputationClient;
  clientVersion: VotingReputationVersion;
  colonyClient: AugmentedIColony;
  estimateGas: T['estimateGas'] & AugmentedEstimate;

  createDomainMotionWithProofs(
    /// Domain in which the voting will take place in
    _domainId: BigNumberish,
    _action: BytesLike,
    _key: BytesLike,
    _value: BytesLike,
    _branchMask: BigNumberish,
    _siblings: BytesLike[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  stakeMotionWithProofs(
    _motionId: BigNumberish,
    _vote: BigNumberish,
    _amount: BigNumberish,
    _key: BytesLike,
    _value: BytesLike,
    _branchMask: BigNumberish,
    _siblings: BytesLike[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  escalateMotionWithProofs(
    _motionId: BigNumberish,
    /// Parent, or ancestor, domain id
    _newDomainId: BigNumberish,
    _key: BytesLike,
    _value: BytesLike,
    _branchMask: BigNumberish,
    _siblings: BytesLike[],
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  claimRewardWithProofs(
    _motionId: BigNumberish,
    _staker: string,
    _vote: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;
};

async function createDomainMotionWithProofs(
  this: AugmentedVotingReputation,
  _domainId: BigNumberish, // Domain in which the voting will take place in
  _action: BytesLike,
  _key: BytesLike,
  _value: BytesLike,
  _branchMask: BigNumberish,
  _siblings: BytesLike[],
  overrides?: Overrides,
): Promise<ContractTransaction> {
  let childSkillIdex = MaxUint256;
  const votingDomain = BigNumber.from(_domainId);
  const decodedDomain = BigNumber.from(`0x${_action.toString().slice(10, 74)}`); // Domain in which we have permissions
  if (!decodedDomain.eq(votingDomain)) {
    const domainSkillIdIndex = await getChildIndex(
      this.colonyClient,
      decodedDomain,
      votingDomain,
    );
    if (!domainSkillIdIndex.eq(BigNumber.from(-1))) {
      childSkillIdex = BigNumber.from(domainSkillIdIndex);
    } else {
      throw new Error('Child skill index could not be found');
    }
  }
  return this.createDomainMotion(
    votingDomain,
    childSkillIdex,
    _action,
    _key,
    _value,
    _branchMask,
    _siblings,
    overrides,
  );
}

async function stakeMotionWithProofs(
  this: AugmentedVotingReputation,
  _motionId: BigNumberish,
  _vote: BigNumberish,
  _amount: BigNumberish,
  _key: BytesLike,
  _value: BytesLike,
  _branchMask: BigNumberish,
  _siblings: BytesLike[],
  overrides?: Overrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.getMotion(_motionId);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    domainId,
    ColonyRole.Arbitration,
    this.address,
  );
  return this.stakeMotion(
    _motionId,
    permissionDomainId,
    childSkillIndex,
    _vote,
    _amount,
    _key,
    _value,
    _branchMask,
    _siblings,
    overrides,
  );
}

async function escalateMotionWithProofs(
  this: AugmentedVotingReputation,
  _motionId: BigNumberish,
  _newDomainId: BigNumberish, // parent, or ancestor, domain id
  _key: BytesLike,
  _value: BytesLike,
  _branchMask: BigNumberish,
  _siblings: BytesLike[],
  overrides?: Overrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.getMotion(_motionId);
  const motionDomainChildSkillIdIndex = await getChildIndex(
    this.colonyClient,
    BigNumber.from(_newDomainId),
    domainId,
  );
  if (motionDomainChildSkillIdIndex.toNumber() === -1) {
    throw new Error('Child skill index could not be found');
  }
  return this.escalateMotion(
    _motionId,
    _newDomainId,
    motionDomainChildSkillIdIndex,
    _key,
    _value,
    _branchMask,
    _siblings,
    overrides,
  );
}

async function claimRewardWithProofs(
  this: AugmentedVotingReputation,
  _motionId: BigNumberish,
  _staker: string,
  _vote: BigNumberish,
  overrides?: Overrides,
): Promise<ContractTransaction> {
  const { domainId } = await this.getMotion(_motionId);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    domainId,
    ColonyRole.Arbitration,
    this.address,
  );
  return this.claimReward(
    _motionId,
    permissionDomainId,
    childSkillIndex,
    _staker,
    _vote,
    overrides,
  );
}

async function estimateCreateDomainMotionWithProofs(
  this: AugmentedVotingReputation,
  _domainId: BigNumberish, // Domain in which the voting will take place in
  _action: BytesLike,
  _key: BytesLike,
  _value: BytesLike,
  _branchMask: BigNumberish,
  _siblings: BytesLike[],
): Promise<BigNumber> {
  let childSkillIdex = MaxUint256;
  const votingDomain = BigNumber.from(_domainId);
  const decodedDomain = BigNumber.from(`0x${_action.toString().slice(10, 74)}`); // Domain in which we have permissions
  if (!decodedDomain.eq(votingDomain)) {
    const domainSkillIdIndex = await getChildIndex(
      this.colonyClient,
      decodedDomain,
      votingDomain,
    );
    if (!domainSkillIdIndex.eq(BigNumber.from(-1))) {
      childSkillIdex = BigNumber.from(domainSkillIdIndex);
    } else {
      throw new Error('Child skill index could not be found');
    }
  }
  return this.estimateGas.createDomainMotion(
    votingDomain,
    childSkillIdex,
    _action,
    _key,
    _value,
    _branchMask,
    _siblings,
  );
}

async function estimateStakeMotionWithProofs(
  this: AugmentedVotingReputation,
  _motionId: BigNumberish,
  _vote: BigNumberish,
  _amount: BigNumberish,
  _key: BytesLike,
  _value: BytesLike,
  _branchMask: BigNumberish,
  _siblings: BytesLike[],
): Promise<BigNumber> {
  const { domainId } = await this.getMotion(_motionId);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    domainId,
    ColonyRole.Arbitration,
    this.address,
  );
  return this.estimateGas.stakeMotion(
    _motionId,
    permissionDomainId,
    childSkillIndex,
    _vote,
    _amount,
    _key,
    _value,
    _branchMask,
    _siblings,
  );
}

async function estimateEscalateMotionWithProofs(
  this: AugmentedVotingReputation,
  _motionId: BigNumberish,
  _newDomainId: BigNumberish, // parent, or ancestor, domain id
  _key: BytesLike,
  _value: BytesLike,
  _branchMask: BigNumberish,
  _siblings: BytesLike[],
): Promise<BigNumber> {
  const { domainId } = await this.getMotion(_motionId);
  const motionDomainChildSkillIdIndex = await getChildIndex(
    this.colonyClient,
    BigNumber.from(_newDomainId),
    domainId,
  );
  if (motionDomainChildSkillIdIndex.toNumber() === -1) {
    throw new Error('Child skill index could not be found');
  }
  return this.estimateGas.escalateMotion(
    _motionId,
    _newDomainId,
    motionDomainChildSkillIdIndex,
    _key,
    _value,
    _branchMask,
    _siblings,
  );
}

async function estimateClaimRewardWithProofs(
  this: AugmentedVotingReputation,
  _motionId: BigNumberish,
  _staker: string,
  _vote: BigNumberish,
): Promise<BigNumber> {
  const { domainId } = await this.getMotion(_motionId);
  const [permissionDomainId, childSkillIndex] = await getPermissionProofs(
    this.colonyClient,
    domainId,
    ColonyRole.Arbitration,
    this.address,
  );
  return this.estimateGas.claimReward(
    _motionId,
    permissionDomainId,
    childSkillIndex,
    _staker,
    _vote,
  );
}

export const addAugments = <T extends AugmentedVotingReputation>(
  instance: T,
  colonyClient: AugmentedIColony,
): T => {
  /* eslint-disable no-param-reassign */
  instance.clientType = ClientType.VotingReputationClient;
  instance.colonyClient = colonyClient;

  // NOTE: this is deprecated and might be needed to be moved out of here soon
  instance.createDomainMotionWithProofs =
    createDomainMotionWithProofs.bind(instance);
  instance.stakeMotionWithProofs = stakeMotionWithProofs.bind(instance);
  instance.escalateMotionWithProofs = escalateMotionWithProofs.bind(instance);
  instance.claimRewardWithProofs = claimRewardWithProofs.bind(instance);

  instance.estimateGas.createDomainMotionWithProofs =
    estimateCreateDomainMotionWithProofs.bind(instance);
  instance.estimateGas.stakeMotionWithProofs =
    estimateStakeMotionWithProofs.bind(instance);
  instance.estimateGas.escalateMotionWithProofs =
    estimateEscalateMotionWithProofs.bind(instance);
  instance.estimateGas.claimRewardWithProofs =
    estimateClaimRewardWithProofs.bind(instance);

  return instance;
  /* eslint-enable no-param-reassign */
};
