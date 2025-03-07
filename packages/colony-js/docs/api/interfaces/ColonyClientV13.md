# Interface: ColonyClientV13

## Extends

- `AugmentedIColony`\<`IColony`\>.`ColonyAugmentsV3`\<`IColony`\>.`ColonyAugmentsV4`\<`IColony`\>.`ColonyAugmentsV5`\<`IColony`\>.`ColonyAugmentsV6`\<`IColony`\>.`ColonyAugmentsV7`\<`IColony`\>.`AddDomainAugmentsB`\<`IColony`\>.`MoveFundsBetweenPotsAugmentsB`\<`IColony`\>

## Properties

### \_deployedPromise

> **\_deployedPromise**: `Promise`\<`Contract`\>

#### Inherited from

`AugmentedIColony._deployedPromise`

***

### \_runningEvents

> **\_runningEvents**: `object`

#### Index Signature

\[`eventTag`: `string`\]: `RunningEvent`

#### Inherited from

`AugmentedIColony._runningEvents`

***

### \_wrappedEmits

> **\_wrappedEmits**: `object`

#### Index Signature

\[`eventTag`: `string`\]: (...`args`) => `void`

#### Inherited from

`AugmentedIColony._wrappedEmits`

***

### address

> `readonly` **address**: `string`

#### Inherited from

`AugmentedIColony.address`

***

### clientType

> **clientType**: [`ColonyClient`](../enumerations/ClientType.md#colonyclient)

#### Inherited from

`AugmentedIColony.clientType`

***

### clientVersion

> **clientVersion**: `13`

The version of the Colony the client is attached to

#### Overrides

`AugmentedIColony.clientVersion`

***

### colonyEvents

> **colonyEvents**: `IColonyEvents`

The colonyEvents contract supports all events across all versions.
Isn't that amazing?
It's an ethers contract with only events to filter

#### Inherited from

`AugmentedIColony.colonyEvents`

***

### deployTransaction

> `readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

`AugmentedIColony.deployTransaction`

***

### estimateGas

> **estimateGas**: `ColonyClientV13Estimate`

#### Overrides

`AugmentedIColony.estimateGas`

***

### filters

> **filters**: `object`

#### Annotation()

##### Parameters

###### agent?

`null` | `string`

###### txHash?

`null` | `BytesLike`

###### metadata?

`null`

##### Returns

`AnnotationEventFilter`

#### Annotation(address,bytes32,string)()

##### Parameters

###### agent?

`null` | `string`

###### txHash?

`null` | `BytesLike`

###### metadata?

`null`

##### Returns

`AnnotationEventFilter`

#### ArbitraryReputationUpdate()

##### Parameters

###### agent?

`null`

###### user?

`null`

###### skillId?

`null`

###### amount?

`null`

##### Returns

`ArbitraryReputationUpdateEventFilter`

#### ArbitraryReputationUpdate(address,address,uint256,int256)()

##### Parameters

###### agent?

`null`

###### user?

`null`

###### skillId?

`null`

###### amount?

`null`

##### Returns

`ArbitraryReputationUpdateEventFilter`

#### ArbitraryTransaction()

##### Parameters

###### target?

`null`

###### data?

`null`

###### success?

`null`

##### Returns

`ArbitraryTransactionEventFilter`

#### ArbitraryTransaction(address,bytes,bool)()

##### Parameters

###### target?

`null`

###### data?

`null`

###### success?

`null`

##### Returns

`ArbitraryTransactionEventFilter`

#### ColonyBootstrapped()

##### Parameters

###### agent?

`null`

###### users?

`null`

###### amounts?

`null`

##### Returns

`ColonyBootstrappedEventFilter`

#### ColonyBootstrapped(address,address\[\],int256\[\])()

##### Parameters

###### agent?

`null`

###### users?

`null`

###### amounts?

`null`

##### Returns

`ColonyBootstrappedEventFilter`

#### ColonyFundsClaimed()

##### Parameters

###### agent?

`null`

###### token?

`null`

###### fee?

`null`

###### payoutRemainder?

`null`

##### Returns

`ColonyFundsClaimedEventFilter`

#### ColonyFundsClaimed(address,address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### token?

`null`

###### fee?

`null`

###### payoutRemainder?

`null`

##### Returns

`ColonyFundsClaimedEventFilter`

#### ColonyFundsMovedBetweenFundingPots()

##### Parameters

###### agent?

`null`

###### fromPot?

`null` | `BigNumberish`

###### toPot?

`null` | `BigNumberish`

###### amount?

`null`

###### token?

`null`

##### Returns

`ColonyFundsMovedBetweenFundingPotsEventFilter`

#### ColonyFundsMovedBetweenFundingPots(address,uint256,uint256,uint256,address)()

##### Parameters

###### agent?

`null`

###### fromPot?

`null` | `BigNumberish`

###### toPot?

`null` | `BigNumberish`

###### amount?

`null`

###### token?

`null`

##### Returns

`ColonyFundsMovedBetweenFundingPotsEventFilter`

#### ColonyInitialised()

##### Parameters

###### agent?

`null`

###### colonyNetwork?

`null`

###### token?

`null`

##### Returns

`ColonyInitialisedEventFilter`

#### ColonyInitialised(address,address,address)()

##### Parameters

###### agent?

`null`

###### colonyNetwork?

`null`

###### token?

`null`

##### Returns

`ColonyInitialisedEventFilter`

#### ColonyMetadata()

##### Parameters

###### agent?

`null`

###### metadata?

`null`

##### Returns

`ColonyMetadataEventFilter`

#### ColonyMetadata(address,string)()

##### Parameters

###### agent?

`null`

###### metadata?

`null`

##### Returns

`ColonyMetadataEventFilter`

#### ColonyMetadataDelta()

##### Parameters

###### agent?

`null`

###### metadata?

`null`

##### Returns

`ColonyMetadataDeltaEventFilter`

#### ColonyMetadataDelta(address,string)()

##### Parameters

###### agent?

`null`

###### metadata?

`null`

##### Returns

`ColonyMetadataDeltaEventFilter`

#### ColonyRewardInverseSet()

##### Parameters

###### agent?

`null`

###### rewardInverse?

`null`

##### Returns

`ColonyRewardInverseSetEventFilter`

#### ColonyRewardInverseSet(address,uint256)()

##### Parameters

###### agent?

`null`

###### rewardInverse?

`null`

##### Returns

`ColonyRewardInverseSetEventFilter`

#### ColonyRoleSet()

##### Parameters

###### agent?

`null`

###### user?

`null` | `string`

###### domainId?

`null` | `BigNumberish`

###### role?

`null` | `BigNumberish`

###### setTo?

`null`

##### Returns

`ColonyRoleSetEventFilter`

#### ColonyRoleSet(address,address,uint256,uint8,bool)()

##### Parameters

###### agent?

`null`

###### user?

`null` | `string`

###### domainId?

`null` | `BigNumberish`

###### role?

`null` | `BigNumberish`

###### setTo?

`null`

##### Returns

`ColonyRoleSetEventFilter`

#### ColonyUpgraded()

##### Parameters

###### agent?

`null`

###### oldVersion?

`null`

###### newVersion?

`null`

##### Returns

`ColonyUpgradedEventFilter`

#### ColonyUpgraded(address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### oldVersion?

`null`

###### newVersion?

`null`

##### Returns

`ColonyUpgradedEventFilter`

#### DomainAdded()

##### Parameters

###### agent?

`null`

###### domainId?

`null`

##### Returns

`DomainAddedEventFilter`

#### DomainAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### domainId?

`null`

##### Returns

`DomainAddedEventFilter`

#### DomainDeprecated()

##### Parameters

###### agent?

`null`

###### domainId?

`null` | `BigNumberish`

###### deprecated?

`null`

##### Returns

`DomainDeprecatedEventFilter`

#### DomainDeprecated(address,uint256,bool)()

##### Parameters

###### agent?

`null`

###### domainId?

`null` | `BigNumberish`

###### deprecated?

`null`

##### Returns

`DomainDeprecatedEventFilter`

#### DomainMetadata()

##### Parameters

###### agent?

`null`

###### domainId?

`null` | `BigNumberish`

###### metadata?

`null`

##### Returns

`DomainMetadataEventFilter`

#### DomainMetadata(address,uint256,string)()

##### Parameters

###### agent?

`null`

###### domainId?

`null` | `BigNumberish`

###### metadata?

`null`

##### Returns

`DomainMetadataEventFilter`

#### ExpenditureAdded()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null`

##### Returns

`ExpenditureAddedEventFilter`

#### ExpenditureAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null`

##### Returns

`ExpenditureAddedEventFilter`

#### ExpenditureCancelled()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureCancelledEventFilter`

#### ExpenditureCancelled(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureCancelledEventFilter`

#### ExpenditureClaimDelaySet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### claimDelay?

`null`

##### Returns

`ExpenditureClaimDelaySetEventFilter`

#### ExpenditureClaimDelaySet(address,uint256,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### claimDelay?

`null`

##### Returns

`ExpenditureClaimDelaySetEventFilter`

#### ExpenditureFinalized()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureFinalizedEventFilter`

#### ExpenditureFinalized(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureFinalizedEventFilter`

#### ExpenditureGlobalClaimDelaySet()

##### Parameters

###### agent?

`null`

###### globalClaimDelay?

`null`

##### Returns

`ExpenditureGlobalClaimDelaySetEventFilter`

#### ExpenditureGlobalClaimDelaySet(address,uint256)()

##### Parameters

###### agent?

`null`

###### globalClaimDelay?

`null`

##### Returns

`ExpenditureGlobalClaimDelaySetEventFilter`

#### ExpenditureLocked()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureLockedEventFilter`

#### ExpenditureLocked(address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

##### Returns

`ExpenditureLockedEventFilter`

#### ExpenditureMetadataSet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### metadata?

`null`

##### Returns

`ExpenditureMetadataSetEventFilter`

#### ExpenditureMetadataSet(address,uint256,string)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### metadata?

`null`

##### Returns

`ExpenditureMetadataSetEventFilter`

#### ExpenditurePayoutModifierSet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### payoutModifier?

`null`

##### Returns

`ExpenditurePayoutModifierSetEventFilter`

#### ExpenditurePayoutModifierSet(address,uint256,uint256,int256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### payoutModifier?

`null`

##### Returns

`ExpenditurePayoutModifierSetEventFilter`

#### ExpenditurePayoutSet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### token?

`null` | `string`

###### amount?

`null`

##### Returns

`ExpenditurePayoutSetEventFilter`

#### ExpenditurePayoutSet(address,uint256,uint256,address,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### token?

`null` | `string`

###### amount?

`null`

##### Returns

`ExpenditurePayoutSetEventFilter`

#### ExpenditureRecipientSet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### recipient?

`null` | `string`

##### Returns

`ExpenditureRecipientSetEventFilter`

#### ExpenditureRecipientSet(address,uint256,uint256,address)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### recipient?

`null` | `string`

##### Returns

`ExpenditureRecipientSetEventFilter`

#### ExpenditureSkillSet()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### skillId?

`null` | `BigNumberish`

##### Returns

`ExpenditureSkillSetEventFilter`

#### ExpenditureSkillSet(address,uint256,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### slot?

`null` | `BigNumberish`

###### skillId?

`null` | `BigNumberish`

##### Returns

`ExpenditureSkillSetEventFilter`

#### ExpenditureStateChanged()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### storageSlot?

`null` | `BigNumberish`

###### mask?

`null`

###### keys?

`null`

###### value?

`null`

##### Returns

`ExpenditureStateChangedEventFilter`

#### ExpenditureStateChanged(address,uint256,uint256,bool\[\],bytes32\[\],bytes32)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### storageSlot?

`null` | `BigNumberish`

###### mask?

`null`

###### keys?

`null`

###### value?

`null`

##### Returns

`ExpenditureStateChangedEventFilter`

#### ExpenditureTransferred()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### owner?

`null` | `string`

##### Returns

`ExpenditureTransferredEventFilter`

#### ExpenditureTransferred(address,uint256,address)()

##### Parameters

###### agent?

`null`

###### expenditureId?

`null` | `BigNumberish`

###### owner?

`null` | `string`

##### Returns

`ExpenditureTransferredEventFilter`

#### FundingPotAdded()

##### Parameters

###### fundingPotId?

`null`

##### Returns

`FundingPotAddedEventFilter`

#### FundingPotAdded(uint256)()

##### Parameters

###### fundingPotId?

`null`

##### Returns

`FundingPotAddedEventFilter`

#### LocalSkillAdded()

##### Parameters

###### agent?

`null`

###### localSkillId?

`null`

##### Returns

`LocalSkillAddedEventFilter`

#### LocalSkillAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### localSkillId?

`null`

##### Returns

`LocalSkillAddedEventFilter`

#### LocalSkillDeprecated()

##### Parameters

###### agent?

`null`

###### localSkillId?

`null`

###### deprecated?

`null`

##### Returns

`LocalSkillDeprecatedEventFilter`

#### LocalSkillDeprecated(address,uint256,bool)()

##### Parameters

###### agent?

`null`

###### localSkillId?

`null`

###### deprecated?

`null`

##### Returns

`LocalSkillDeprecatedEventFilter`

#### MetaTransactionExecuted()

##### Parameters

###### userAddress?

`null`

###### relayerAddress?

`null`

###### payload?

`null`

##### Returns

`MetaTransactionExecutedEventFilter`

#### MetaTransactionExecuted(address,address,bytes)()

##### Parameters

###### userAddress?

`null`

###### relayerAddress?

`null`

###### payload?

`null`

##### Returns

`MetaTransactionExecutedEventFilter`

#### PaymentAdded()

##### Parameters

###### agent?

`null`

###### paymentId?

`null`

##### Returns

`PaymentAddedEventFilter`

#### PaymentAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null`

##### Returns

`PaymentAddedEventFilter`

#### PaymentFinalized()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

##### Returns

`PaymentFinalizedEventFilter`

#### PaymentFinalized(address,uint256)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

##### Returns

`PaymentFinalizedEventFilter`

#### PaymentPayoutSet()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### token?

`null`

###### amount?

`null`

##### Returns

`PaymentPayoutSetEventFilter`

#### PaymentPayoutSet(address,uint256,address,uint256)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### token?

`null`

###### amount?

`null`

##### Returns

`PaymentPayoutSetEventFilter`

#### PaymentRecipientSet()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### recipient?

`null`

##### Returns

`PaymentRecipientSetEventFilter`

#### PaymentRecipientSet(address,uint256,address)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### recipient?

`null`

##### Returns

`PaymentRecipientSetEventFilter`

#### PaymentSkillSet()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### skillId?

`null`

##### Returns

`PaymentSkillSetEventFilter`

#### PaymentSkillSet(address,uint256,uint256)()

##### Parameters

###### agent?

`null`

###### paymentId?

`null` | `BigNumberish`

###### skillId?

`null`

##### Returns

`PaymentSkillSetEventFilter`

#### PayoutClaimed()

##### Parameters

###### agent?

`null`

###### fundingPotId?

`null` | `BigNumberish`

###### token?

`null`

###### amount?

`null`

##### Returns

`PayoutClaimedEventFilter`

#### PayoutClaimed(address,uint256,address,uint256)()

##### Parameters

###### agent?

`null`

###### fundingPotId?

`null` | `BigNumberish`

###### token?

`null`

###### amount?

`null`

##### Returns

`PayoutClaimedEventFilter`

#### RecoveryModeEntered()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeEnteredEventFilter`

#### RecoveryModeEntered(address)()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeEnteredEventFilter`

#### RecoveryModeExitApproved()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeExitApprovedEventFilter`

#### RecoveryModeExitApproved(address)()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeExitApprovedEventFilter`

#### RecoveryModeExited()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeExitedEventFilter`

#### RecoveryModeExited(address)()

##### Parameters

###### user?

`null`

##### Returns

`RecoveryModeExitedEventFilter`

#### RecoveryRoleSet()

##### Parameters

###### user?

`null` | `string`

###### setTo?

`null`

##### Returns

`RecoveryRoleSetEventFilter`

#### RecoveryRoleSet(address,bool)()

##### Parameters

###### user?

`null` | `string`

###### setTo?

`null`

##### Returns

`RecoveryRoleSetEventFilter`

#### RecoveryStorageSlotSet()

##### Parameters

###### user?

`null`

###### slot?

`null`

###### fromValue?

`null`

###### toValue?

`null`

##### Returns

`RecoveryStorageSlotSetEventFilter`

#### RecoveryStorageSlotSet(address,uint256,bytes32,bytes32)()

##### Parameters

###### user?

`null`

###### slot?

`null`

###### fromValue?

`null`

###### toValue?

`null`

##### Returns

`RecoveryStorageSlotSetEventFilter`

#### RewardPayoutClaimed()

##### Parameters

###### rewardPayoutId?

`null`

###### user?

`null`

###### fee?

`null`

###### rewardRemainder?

`null`

##### Returns

`RewardPayoutClaimedEventFilter`

#### RewardPayoutClaimed(uint256,address,uint256,uint256)()

##### Parameters

###### rewardPayoutId?

`null`

###### user?

`null`

###### fee?

`null`

###### rewardRemainder?

`null`

##### Returns

`RewardPayoutClaimedEventFilter`

#### RewardPayoutCycleEnded()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

`RewardPayoutCycleEndedEventFilter`

#### RewardPayoutCycleEnded(address,uint256)()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

`RewardPayoutCycleEndedEventFilter`

#### RewardPayoutCycleStarted()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

`RewardPayoutCycleStartedEventFilter`

#### RewardPayoutCycleStarted(address,uint256)()

##### Parameters

###### agent?

`null`

###### rewardPayoutId?

`null`

##### Returns

`RewardPayoutCycleStartedEventFilter`

#### TaskAdded()

##### Parameters

###### agent?

`null`

###### taskId?

`null`

##### Returns

`TaskAddedEventFilter`

#### TaskAdded(address,uint256)()

##### Parameters

###### agent?

`null`

###### taskId?

`null`

##### Returns

`TaskAddedEventFilter`

#### TaskBriefSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### specificationHash?

`null`

##### Returns

`TaskBriefSetEventFilter`

#### TaskBriefSet(uint256,bytes32)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### specificationHash?

`null`

##### Returns

`TaskBriefSetEventFilter`

#### TaskCanceled()

##### Parameters

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskCanceledEventFilter`

#### TaskCanceled(uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskCanceledEventFilter`

#### TaskChangedViaSignatures()

##### Parameters

###### reviewerAddresses?

`null`

##### Returns

`TaskChangedViaSignaturesEventFilter`

#### TaskChangedViaSignatures(address\[\])()

##### Parameters

###### reviewerAddresses?

`null`

##### Returns

`TaskChangedViaSignaturesEventFilter`

#### TaskCompleted()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskCompletedEventFilter`

#### TaskCompleted(address,uint256)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskCompletedEventFilter`

#### TaskDeliverableSubmitted()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

###### deliverableHash?

`null`

##### Returns

`TaskDeliverableSubmittedEventFilter`

#### TaskDeliverableSubmitted(address,uint256,bytes32)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

###### deliverableHash?

`null`

##### Returns

`TaskDeliverableSubmittedEventFilter`

#### TaskDueDateSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### dueDate?

`null`

##### Returns

`TaskDueDateSetEventFilter`

#### TaskDueDateSet(uint256,uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### dueDate?

`null`

##### Returns

`TaskDueDateSetEventFilter`

#### TaskFinalized()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskFinalizedEventFilter`

#### TaskFinalized(address,uint256)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

##### Returns

`TaskFinalizedEventFilter`

#### TaskPayoutSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### token?

`null`

###### amount?

`null`

##### Returns

`TaskPayoutSetEventFilter`

#### TaskPayoutSet(uint256,uint8,address,uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### token?

`null`

###### amount?

`null`

##### Returns

`TaskPayoutSetEventFilter`

#### TaskRoleUserSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### user?

`null` | `string`

##### Returns

`TaskRoleUserSetEventFilter`

#### TaskRoleUserSet(uint256,uint8,address)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### user?

`null` | `string`

##### Returns

`TaskRoleUserSetEventFilter`

#### TaskSkillSet()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### skillId?

`null` | `BigNumberish`

##### Returns

`TaskSkillSetEventFilter`

#### TaskSkillSet(uint256,uint256)()

##### Parameters

###### taskId?

`null` | `BigNumberish`

###### skillId?

`null` | `BigNumberish`

##### Returns

`TaskSkillSetEventFilter`

#### TaskWorkRatingRevealed()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### rating?

`null`

##### Returns

`TaskWorkRatingRevealedEventFilter`

#### TaskWorkRatingRevealed(address,uint256,uint8,uint8)()

##### Parameters

###### agent?

`null`

###### taskId?

`null` | `BigNumberish`

###### role?

`null`

###### rating?

`null`

##### Returns

`TaskWorkRatingRevealedEventFilter`

#### TokensBurned()

##### Parameters

###### agent?

`null`

###### token?

`null`

###### amount?

`null`

##### Returns

`TokensBurnedEventFilter`

#### TokensBurned(address,address,uint256)()

##### Parameters

###### agent?

`null`

###### token?

`null`

###### amount?

`null`

##### Returns

`TokensBurnedEventFilter`

#### TokensMinted()

##### Parameters

###### agent?

`null`

###### who?

`null`

###### amount?

`null`

##### Returns

`TokensMintedEventFilter`

#### TokensMinted(address,address,uint256)()

##### Parameters

###### agent?

`null`

###### who?

`null`

###### amount?

`null`

##### Returns

`TokensMintedEventFilter`

#### TokenUnlocked()

##### Parameters

###### agent?

`null`

##### Returns

`TokenUnlockedEventFilter`

#### TokenUnlocked(address)()

##### Parameters

###### agent?

`null`

##### Returns

`TokenUnlockedEventFilter`

#### Inherited from

`AugmentedIColony.filters`

***

### interface

> **interface**: `IColonyInterface`

#### Inherited from

`AugmentedIColony.interface`

***

### networkClient

> **networkClient**: [`ColonyNetworkClient`](ColonyNetworkClient.md)

An instance of the ColonyNetworkClient

#### Inherited from

`AugmentedIColony.networkClient`

***

### off

> **off**: `OnEvent`\<[`ColonyClientV13`](ColonyClientV13.md)\>

#### Inherited from

`AugmentedIColony.off`

***

### on

> **on**: `OnEvent`\<[`ColonyClientV13`](ColonyClientV13.md)\>

#### Inherited from

`AugmentedIColony.on`

***

### once

> **once**: `OnEvent`\<[`ColonyClientV13`](ColonyClientV13.md)\>

#### Inherited from

`AugmentedIColony.once`

***

### provider

> `readonly` **provider**: `Provider`

#### Inherited from

`AugmentedIColony.provider`

***

### removeListener

> **removeListener**: `OnEvent`\<[`ColonyClientV13`](ColonyClientV13.md)\>

#### Inherited from

`AugmentedIColony.removeListener`

***

### reputationClient

> **reputationClient**: [`ReputationClient`](../classes/ReputationClient.md)

A helper client to retrieve reputation

#### Inherited from

`AugmentedIColony.reputationClient`

***

### resolvedAddress

> `readonly` **resolvedAddress**: `Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.resolvedAddress`

***

### signer

> `readonly` **signer**: `Signer`

#### Inherited from

`AugmentedIColony.signer`

***

### tokenClient

> **tokenClient**: [`TokenClient`](../type-aliases/TokenClient.md)

An instance of the TokenClient for the Colony's native token

#### Inherited from

`AugmentedIColony.tokenClient`

## Methods

### \_checkRunningEvents()

> **\_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

##### runningEvent

`RunningEvent`

#### Returns

`void`

#### Inherited from

`AugmentedIColony._checkRunningEvents`

***

### \_deployed()

> **\_deployed**(`blockTag`?): `Promise`\<`Contract`\>

#### Parameters

##### blockTag?

`BlockTag`

#### Returns

`Promise`\<`Contract`\>

#### Inherited from

`AugmentedIColony._deployed`

***

### \_wrapEvent()

> **\_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

##### runningEvent

`RunningEvent`

##### log

`Log`

##### listener

`Listener`

#### Returns

`Event`

#### Inherited from

`AugmentedIColony._wrapEvent`

***

### addDomain(uint256,uint256,uint256,string)()

> **addDomain(uint256,uint256,uint256,string)**(`_permissionDomainId`, `_childSkillIndex`, `_parentDomainId`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

Adding new domains is currently retricted to one level only, i.e. `_parentDomainId` has to be the root domain id: `1`.We expect this function to only be used by the dapp
Add a colony domain, and its respective local skill under skill with id `_parentSkillId`. New funding pot is created and associated with the domain here.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_parentDomainId

`BigNumberish`

Id of the domain under which the new one will be added

##### \_metadata

`string`

Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.addDomain(uint256,uint256,uint256,string)`

***

### addDomain(uint256,uint256,uint256)()

> **addDomain(uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_parentDomainId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Adding new domains is currently retricted to one level only, i.e. `_parentDomainId` has to be the root domain id: `1`.
Add a colony domain, and its respective local skill under skill with id `_parentSkillId`. New funding pot is created and associated with the domain here.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_parentDomainId

`BigNumberish`

Id of the domain under which the new one will be added

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.addDomain(uint256,uint256,uint256)`

***

### addDomainWithProofs(uint256,string)()

> **addDomainWithProofs(uint256,string)**(`_parentDomainId`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as ["addDomain(uint256,uint256,uint256,string)"](ColonyClientV13.md#adddomain(uint256,uint256,uint256,string)), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_parentDomainId

`BigNumberish`

Id of the domain under which the new one will be added

##### \_metadata

`string`

Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts.

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AddDomainAugmentsB.addDomainWithProofs(uint256,string)`

***

### addDomainWithProofs(uint256)()

> **addDomainWithProofs(uint256)**(`_parentDomainId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as ["addDomain(uint256,uint256,uint256)"](ColonyClientV13.md#adddomain(uint256,uint256,uint256)), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_parentDomainId

`BigNumberish`

Id of the domain under which the new one will be added

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AddDomainAugmentsB.addDomainWithProofs(uint256)`

***

### addLocalSkill()

> **addLocalSkill**(`overrides`?): `Promise`\<`ContractTransaction`\>

Add a new local skill for the colony. Secured function to authorised members.

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.addLocalSkill`

***

### addLocalSkill()()

> **addLocalSkill()**(`overrides`?): `Promise`\<`ContractTransaction`\>

Add a new local skill for the colony. Secured function to authorised members.

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.addLocalSkill()`

***

### addPayment()

> **addPayment**(`_permissionDomainId`, `_childSkillIndex`, `_recipient`, `_token`, `_amount`, `_domainId`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Add a new payment in the colony. Secured function to authorised members.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`)

##### \_recipient

`string`

Address of the payment recipient

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_amount

`BigNumberish`

Payout amount

##### \_domainId

`BigNumberish`

The domain where the payment belongs

##### \_skillId

`BigNumberish`

The skill associated with the payment

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.addPayment`

***

### addPayment(uint256,uint256,address,address,uint256,uint256,uint256)()

> **addPayment(uint256,uint256,address,address,uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_recipient`, `_token`, `_amount`, `_domainId`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Add a new payment in the colony. Secured function to authorised members.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`)

##### \_recipient

`string`

Address of the payment recipient

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_amount

`BigNumberish`

Payout amount

##### \_domainId

`BigNumberish`

The domain where the payment belongs

##### \_skillId

`BigNumberish`

The skill associated with the payment

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.addPayment(uint256,uint256,address,address,uint256,uint256,uint256)`

***

### annotateTransaction()

> **annotateTransaction**(`_txHash`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

Emit a metadata string for a transaction

#### Parameters

##### \_txHash

`BytesLike`

Hash of transaction being annotated (0x0 for current tx)

##### \_metadata

`string`

String of metadata for tx

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.annotateTransaction`

***

### annotateTransaction(bytes32,string)()

> **annotateTransaction(bytes32,string)**(`_txHash`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

Emit a metadata string for a transaction

#### Parameters

##### \_txHash

`BytesLike`

Hash of transaction being annotated (0x0 for current tx)

##### \_metadata

`string`

String of metadata for tx

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.annotateTransaction(bytes32,string)`

***

### approveExitRecovery()

> **approveExitRecovery**(`overrides`?): `Promise`\<`ContractTransaction`\>

Indicate approval to exit recovery mode. Can only be called by user with recovery role.

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.approveExitRecovery`

***

### approveExitRecovery()()

> **approveExitRecovery()**(`overrides`?): `Promise`\<`ContractTransaction`\>

Indicate approval to exit recovery mode. Can only be called by user with recovery role.

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.approveExitRecovery()`

***

### approveStake()

> **approveStake**(`_approvee`, `_domainId`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Allow the _approvee to obligate some amount of tokens as a stake.

#### Parameters

##### \_approvee

`string`

Address of the account we are willing to let obligate us.

##### \_domainId

`BigNumberish`

Domain in which we are willing to be obligated.

##### \_amount

`BigNumberish`

Amount of internal token up to which we are willing to be obligated.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.approveStake`

***

### approveStake(address,uint256,uint256)()

> **approveStake(address,uint256,uint256)**(`_approvee`, `_domainId`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Allow the _approvee to obligate some amount of tokens as a stake.

#### Parameters

##### \_approvee

`string`

Address of the account we are willing to let obligate us.

##### \_domainId

`BigNumberish`

Domain in which we are willing to be obligated.

##### \_amount

`BigNumberish`

Amount of internal token up to which we are willing to be obligated.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.approveStake(address,uint256,uint256)`

***

### attach()

> **attach**(`addressOrName`): `this`

#### Parameters

##### addressOrName

`string`

#### Returns

`this`

#### Inherited from

`AugmentedIColony.attach`

***

### authority()

> **authority**(`overrides`?): `Promise`\<`string`\>

Get the `ColonyAuthority` for the colony.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.authority`

***

### authority()()

> **authority()**(`overrides`?): `Promise`\<`string`\>

Get the `ColonyAuthority` for the colony.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.authority()`

***

### bootstrapColony()

> **bootstrapColony**(`_users`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Only allowed to be called when `taskCount` is `0` by authorized addresses.
Allows the colony to bootstrap itself by having initial reputation and token `_amount` assigned to `_users`. This reputation is assigned in the colony-wide domain. Secured function to authorised members.

#### Parameters

##### \_users

`string`[]

Array of address to bootstrap with reputation

##### \_amount

`BigNumberish`[]

Amount of reputation/tokens for every address

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.bootstrapColony`

***

### bootstrapColony(address\[\],int256\[\])()

> **bootstrapColony(address\[\],int256\[\])**(`_users`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Only allowed to be called when `taskCount` is `0` by authorized addresses.
Allows the colony to bootstrap itself by having initial reputation and token `_amount` assigned to `_users`. This reputation is assigned in the colony-wide domain. Secured function to authorised members.

#### Parameters

##### \_users

`string`[]

Array of address to bootstrap with reputation

##### \_amount

`BigNumberish`[]

Amount of reputation/tokens for every address

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.bootstrapColony(address[],int256[])`

***

### burnTokens()

> **burnTokens**(`token`, `amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Burn tokens held by the colony. Can only burn tokens held in the root funding pot.

#### Parameters

##### token

`string`

The address of the token to burn

##### amount

`BigNumberish`

The amount of tokens to burn

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.burnTokens`

***

### burnTokens(address,uint256)()

> **burnTokens(address,uint256)**(`token`, `amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Burn tokens held by the colony. Can only burn tokens held in the root funding pot.

#### Parameters

##### token

`string`

The address of the token to burn

##### amount

`BigNumberish`

The amount of tokens to burn

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.burnTokens(address,uint256)`

***

### cancelExpenditure()

> **cancelExpenditure**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Cancels the expenditure and prevents further editing. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.cancelExpenditure`

***

### cancelExpenditure(uint256)()

> **cancelExpenditure(uint256)**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Cancels the expenditure and prevents further editing. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.cancelExpenditure(uint256)`

***

### cancelTask()

> **cancelTask**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set the `task.status` property to `1`.
Cancel a task at any point before it is finalized. Secured function to authorised members. Any funds assigned to its funding pot can be moved back to the domain via `IColony.moveFundsBetweenPots`.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.cancelTask`

***

### cancelTask(uint256)()

> **cancelTask(uint256)**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set the `task.status` property to `1`.
Cancel a task at any point before it is finalized. Secured function to authorised members. Any funds assigned to its funding pot can be moved back to the domain via `IColony.moveFundsBetweenPots`.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.cancelTask(uint256)`

***

### checkNotAdditionalProtectedVariable()

> **checkNotAdditionalProtectedVariable**(`_slot`, `overrides`?): `Promise`\<`void`\>

No return value, but should throw if protected.This is external, but is only expected to be called from ContractRecovery; no need toexpose this to any users.
Check whether the supplied slot is a protected variable specific to this contract

#### Parameters

##### \_slot

`BigNumberish`

The storage slot number to check.

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`AugmentedIColony.checkNotAdditionalProtectedVariable`

***

### checkNotAdditionalProtectedVariable(uint256)()

> **checkNotAdditionalProtectedVariable(uint256)**(`_slot`, `overrides`?): `Promise`\<`void`\>

No return value, but should throw if protected.This is external, but is only expected to be called from ContractRecovery; no need toexpose this to any users.
Check whether the supplied slot is a protected variable specific to this contract

#### Parameters

##### \_slot

`BigNumberish`

The storage slot number to check.

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`AugmentedIColony.checkNotAdditionalProtectedVariable(uint256)`

***

### claimColonyFunds()

> **claimColonyFunds**(`_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

Move any funds received by the colony in `_token` denomination to the top-level domain pot, siphoning off a small amount to the reward pot. If called against a colony's own token, no fee is taken.

#### Parameters

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.claimColonyFunds`

***

### claimColonyFunds(address)()

> **claimColonyFunds(address)**(`_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

Move any funds received by the colony in `_token` denomination to the top-level domain pot, siphoning off a small amount to the reward pot. If called against a colony's own token, no fee is taken.

#### Parameters

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.claimColonyFunds(address)`

***

### claimExpenditurePayout()

> **claimExpenditurePayout**(`_id`, `_slot`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

Claim the payout for an expenditure slot. Here the network receives a fee from each payout.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_slot

`BigNumberish`

Number of the slot

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.claimExpenditurePayout`

***

### claimExpenditurePayout(uint256,uint256,address)()

> **claimExpenditurePayout(uint256,uint256,address)**(`_id`, `_slot`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

Claim the payout for an expenditure slot. Here the network receives a fee from each payout.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_slot

`BigNumberish`

Number of the slot

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.claimExpenditurePayout(uint256,uint256,address)`

***

### claimPayment()

> **claimPayment**(`_id`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

Claim the payout in `_token` denomination for payment `_id`. Here the network receives its fee from each payout. Same as for tasks, ether fees go straight to the Meta Colony whereas Token fees go to the Network to be auctioned off.

#### Parameters

##### \_id

`BigNumberish`

Payment identifier

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.claimPayment`

***

### claimPayment(uint256,address)()

> **claimPayment(uint256,address)**(`_id`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

Claim the payout in `_token` denomination for payment `_id`. Here the network receives its fee from each payout. Same as for tasks, ether fees go straight to the Meta Colony whereas Token fees go to the Network to be auctioned off.

#### Parameters

##### \_id

`BigNumberish`

Payment identifier

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.claimPayment(uint256,address)`

***

### claimRewardPayout()

> **claimRewardPayout**(`_payoutId`, `_squareRoots`, `key`, `value`, `branchMask`, `siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

Claim the reward payout at `_payoutId`. User needs to provide their reputation and colony-wide reputation which will be proven via Merkle proof inside this function. Can only be called if payout is active, i.e if 60 days have not passed from its creation. Can only be called if next in queue.

#### Parameters

##### \_payoutId

`BigNumberish`

Id of the reward payout

##### \_squareRoots

`BigNumberish`[]

Square roots of values used in equation: `_squareRoots[0]` - square root of user reputation, `_squareRoots[1]` - square root of user tokens (deposited in TokenLocking), `_squareRoots[2]` - square root of total reputation, `_squareRoots[3]` - square root of total tokens, `_squareRoots[4]` - square root of numerator (user reputation * user tokens), `_squareRoots[5]` - square root of denominator (total reputation * total tokens), `_squareRoots[6]` - square root of payout amount.

##### key

`BytesLike`

Some Reputation hash tree key

##### value

`BytesLike`

Reputation value

##### branchMask

`BigNumberish`

The branchmask of the proof

##### siblings

`BytesLike`[]

The siblings of the proof

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.claimRewardPayout`

***

### claimRewardPayout(uint256,uint256\[7\],bytes,bytes,uint256,bytes32\[\])()

> **claimRewardPayout(uint256,uint256\[7\],bytes,bytes,uint256,bytes32\[\])**(`_payoutId`, `_squareRoots`, `key`, `value`, `branchMask`, `siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

Claim the reward payout at `_payoutId`. User needs to provide their reputation and colony-wide reputation which will be proven via Merkle proof inside this function. Can only be called if payout is active, i.e if 60 days have not passed from its creation. Can only be called if next in queue.

#### Parameters

##### \_payoutId

`BigNumberish`

Id of the reward payout

##### \_squareRoots

`BigNumberish`[]

Square roots of values used in equation: `_squareRoots[0]` - square root of user reputation, `_squareRoots[1]` - square root of user tokens (deposited in TokenLocking), `_squareRoots[2]` - square root of total reputation, `_squareRoots[3]` - square root of total tokens, `_squareRoots[4]` - square root of numerator (user reputation * user tokens), `_squareRoots[5]` - square root of denominator (total reputation * total tokens), `_squareRoots[6]` - square root of payout amount.

##### key

`BytesLike`

Some Reputation hash tree key

##### value

`BytesLike`

Reputation value

##### branchMask

`BigNumberish`

The branchmask of the proof

##### siblings

`BytesLike`[]

The siblings of the proof

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.claimRewardPayout(uint256,uint256[7],bytes,bytes,uint256,bytes32[])`

***

### claimTaskPayout()

> **claimTaskPayout**(`_id`, `_role`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

Claim the payout in `_token` denomination for work completed in task `_id` by contributor with role `_role`. Allowed only after task is finalized. Here the network receives its fee from each payout. Ether fees go straight to the Meta Colony whereas Token fees go to the Network to be auctioned off.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_role

`BigNumberish`

Id of the role, as defined in TaskRole enum

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.claimTaskPayout`

***

### claimTaskPayout(uint256,uint8,address)()

> **claimTaskPayout(uint256,uint8,address)**(`_id`, `_role`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

Claim the payout in `_token` denomination for work completed in task `_id` by contributor with role `_role`. Allowed only after task is finalized. Here the network receives its fee from each payout. Ether fees go straight to the Meta Colony whereas Token fees go to the Network to be auctioned off.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_role

`BigNumberish`

Id of the role, as defined in TaskRole enum

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.claimTaskPayout(uint256,uint8,address)`

***

### completeTask()

> **completeTask**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Mark a task as complete after the due date has passed. This allows the task to be rated and finalized (and funds recovered) even in the presence of a worker who has disappeared. Note that if the due date was not set, then this function will throw.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.completeTask`

***

### completeTask(uint256)()

> **completeTask(uint256)**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Mark a task as complete after the due date has passed. This allows the task to be rated and finalized (and funds recovered) even in the presence of a worker who has disappeared. Note that if the due date was not set, then this function will throw.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.completeTask(uint256)`

***

### connect()

> **connect**(`signerOrProvider`): `this`

#### Parameters

##### signerOrProvider

`string` | `Signer` | `Provider`

#### Returns

`this`

#### Inherited from

`AugmentedIColony.connect`

***

### deobligateStake()

> **deobligateStake**(`_user`, `_domainId`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Deobligate the user some amount of tokens, releasing the stake.

#### Parameters

##### \_user

`string`

Address of the account we are deobligating.

##### \_domainId

`BigNumberish`

Domain in which we are deobligating the user.

##### \_amount

`BigNumberish`

Amount of internal token we are deobligating.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.deobligateStake`

***

### deobligateStake(address,uint256,uint256)()

> **deobligateStake(address,uint256,uint256)**(`_user`, `_domainId`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Deobligate the user some amount of tokens, releasing the stake.

#### Parameters

##### \_user

`string`

Address of the account we are deobligating.

##### \_domainId

`BigNumberish`

Domain in which we are deobligating the user.

##### \_amount

`BigNumberish`

Amount of internal token we are deobligating.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.deobligateStake(address,uint256,uint256)`

***

### deployed()

> **deployed**(): `Promise`\<[`ColonyClientV13`](ColonyClientV13.md)\>

#### Returns

`Promise`\<[`ColonyClientV13`](ColonyClientV13.md)\>

#### Inherited from

`AugmentedIColony.deployed`

***

### deprecateDomain()

> **deprecateDomain**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

Deprecate a domain, preventing certain actions from happening there

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_domainId

`BigNumberish`

Id of the domain being deprecated

##### \_deprecated

`boolean`

Whether or not the domain is deprecated

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.deprecateDomain`

***

### deprecateDomain(uint256,uint256,uint256,bool)()

> **deprecateDomain(uint256,uint256,uint256,bool)**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

Deprecate a domain, preventing certain actions from happening there

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_domainId

`BigNumberish`

Id of the domain being deprecated

##### \_deprecated

`boolean`

Whether or not the domain is deprecated

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.deprecateDomain(uint256,uint256,uint256,bool)`

***

### deprecateDomainWithProofs()

> **deprecateDomainWithProofs**(`_domainId`, `_deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [deprecateDomain](ColonyClientV13.md#deprecatedomain), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_domainId

`BigNumberish`

Id of the domain being deprecated

##### \_deprecated

`boolean`

Whether the domain should be deprecated (true) or undeprecated (false)

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV6.deprecateDomainWithProofs`

***

### deprecateExtension()

> **deprecateExtension**(`extensionId`, `deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set the deprecation of an extension in a colony. Secured function to authorised members.

#### Parameters

##### extensionId

`BytesLike`

keccak256 hash of the extension name, used as an indentifier

##### deprecated

`boolean`

Whether to deprecate the extension or not

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.deprecateExtension`

***

### deprecateExtension(bytes32,bool)()

> **deprecateExtension(bytes32,bool)**(`extensionId`, `deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set the deprecation of an extension in a colony. Secured function to authorised members.

#### Parameters

##### extensionId

`BytesLike`

keccak256 hash of the extension name, used as an indentifier

##### deprecated

`boolean`

Whether to deprecate the extension or not

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.deprecateExtension(bytes32,bool)`

***

### deprecateLocalSkill()

> **deprecateLocalSkill**(`localSkillId`, `deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

Deprecate a local skill for the colony. Secured function to authorised members.

#### Parameters

##### localSkillId

`BigNumberish`

Id for the local skill

##### deprecated

`boolean`

Deprecation status to set for the skill

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.deprecateLocalSkill`

***

### deprecateLocalSkill(uint256,bool)()

> **deprecateLocalSkill(uint256,bool)**(`localSkillId`, `deprecated`, `overrides`?): `Promise`\<`ContractTransaction`\>

Deprecate a local skill for the colony. Secured function to authorised members.

#### Parameters

##### localSkillId

`BigNumberish`

Id for the local skill

##### deprecated

`boolean`

Deprecation status to set for the skill

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.deprecateLocalSkill(uint256,bool)`

***

### editColony()

> **editColony**(`_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

Called to change the metadata associated with a colony. Expected to be a IPFS hash of a JSON blob, but not enforced to any degree by the contracts

#### Parameters

##### \_metadata

`string`

IPFS hash of the metadata

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.editColony`

***

### editColony(string)()

> **editColony(string)**(`_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

Called to change the metadata associated with a colony. Expected to be a IPFS hash of a JSON blob, but not enforced to any degree by the contracts

#### Parameters

##### \_metadata

`string`

IPFS hash of the metadata

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.editColony(string)`

***

### editColonyByDelta()

> **editColonyByDelta**(`_metadataDelta`, `overrides`?): `Promise`\<`ContractTransaction`\>

Called to change the metadata associated with a colony. Expected to be a IPFS hash of a delta to a JSON blob, but not enforced to any degree by the contracts

#### Parameters

##### \_metadataDelta

`string`

IPFS hash of the metadata delta

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.editColonyByDelta`

***

### editColonyByDelta(string)()

> **editColonyByDelta(string)**(`_metadataDelta`, `overrides`?): `Promise`\<`ContractTransaction`\>

Called to change the metadata associated with a colony. Expected to be a IPFS hash of a delta to a JSON blob, but not enforced to any degree by the contracts

#### Parameters

##### \_metadataDelta

`string`

IPFS hash of the metadata delta

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.editColonyByDelta(string)`

***

### editDomain()

> **editDomain**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

Add a colony domain, and its respective local skill under skill with id `_parentSkillId`. New funding pot is created and associated with the domain here.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_domainId

`BigNumberish`

Id of the domain being edited

##### \_metadata

`string`

Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.editDomain`

***

### editDomain(uint256,uint256,uint256,string)()

> **editDomain(uint256,uint256,uint256,string)**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

Add a colony domain, and its respective local skill under skill with id `_parentSkillId`. New funding pot is created and associated with the domain here.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_domainId

`BigNumberish`

Id of the domain being edited

##### \_metadata

`string`

Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.editDomain(uint256,uint256,uint256,string)`

***

### editDomainWithProofs()

> **editDomainWithProofs**(`_domainId`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [editDomain](ColonyClientV13.md#editdomain), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_domainId

`BigNumberish`

Id of the domain being edited

##### \_metadata

`string`

Metadata relating to the domain. Expected to be the IPFS hash of a JSON blob, but not enforced by the contracts.

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV5.editDomainWithProofs`

***

### emit()

> **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

##### eventName

`string` | `EventFilter`

##### args

...`any`[]

#### Returns

`boolean`

#### Inherited from

`AugmentedIColony.emit`

***

### emitDomainReputationPenalty()

> **emitDomainReputationPenalty**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Emit a negative domain reputation update. Available only to Arbitration role holders

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I hold the Arbitration role

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_domainId

`BigNumberish`

The domain where the user will lose reputation

##### \_user

`string`

The user who will lose reputation

##### \_amount

`BigNumberish`

The (negative) amount of reputation to lose

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.emitDomainReputationPenalty`

***

### emitDomainReputationPenalty(uint256,uint256,uint256,address,int256)()

> **emitDomainReputationPenalty(uint256,uint256,uint256,address,int256)**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Emit a negative domain reputation update. Available only to Arbitration role holders

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I hold the Arbitration role

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_domainId

`BigNumberish`

The domain where the user will lose reputation

##### \_user

`string`

The user who will lose reputation

##### \_amount

`BigNumberish`

The (negative) amount of reputation to lose

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.emitDomainReputationPenalty(uint256,uint256,uint256,address,int256)`

***

### emitDomainReputationPenaltyWithProofs()

> **emitDomainReputationPenaltyWithProofs**(`_domainId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [emitDomainReputationPenalty](ColonyClientV13.md#emitdomainreputationpenalty), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_domainId

`BigNumberish`

The domain where the user will lose reputation

##### \_user

`string`

The user who will lose reputation

##### \_amount

`BigNumberish`

The (negative) amount of reputation to lose

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV5.emitDomainReputationPenaltyWithProofs`

***

### emitDomainReputationReward()

> **emitDomainReputationReward**(`_domainId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Emit a positive domain reputation update. Available only to Root role holders

#### Parameters

##### \_domainId

`BigNumberish`

The domain where the user will gain reputation

##### \_user

`string`

The user who will gain reputation

##### \_amount

`BigNumberish`

The (positive) amount of reputation to gain

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.emitDomainReputationReward`

***

### emitDomainReputationReward(uint256,address,int256)()

> **emitDomainReputationReward(uint256,address,int256)**(`_domainId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Emit a positive domain reputation update. Available only to Root role holders

#### Parameters

##### \_domainId

`BigNumberish`

The domain where the user will gain reputation

##### \_user

`string`

The user who will gain reputation

##### \_amount

`BigNumberish`

The (positive) amount of reputation to gain

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.emitDomainReputationReward(uint256,address,int256)`

***

### emitSkillReputationPenalty()

> **emitSkillReputationPenalty**(`_skillId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Emit a negative skill reputation update. Available only to Arbitration role holders in the root domain

#### Parameters

##### \_skillId

`BigNumberish`

The skill where the user will lose reputation

##### \_user

`string`

The user who will lose reputation

##### \_amount

`BigNumberish`

The (negative) amount of reputation to lose

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.emitSkillReputationPenalty`

***

### emitSkillReputationPenalty(uint256,address,int256)()

> **emitSkillReputationPenalty(uint256,address,int256)**(`_skillId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Emit a negative skill reputation update. Available only to Arbitration role holders in the root domain

#### Parameters

##### \_skillId

`BigNumberish`

The skill where the user will lose reputation

##### \_user

`string`

The user who will lose reputation

##### \_amount

`BigNumberish`

The (negative) amount of reputation to lose

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.emitSkillReputationPenalty(uint256,address,int256)`

***

### emitSkillReputationReward()

> **emitSkillReputationReward**(`_skillId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Emit a positive skill reputation update. Available only to Root role holders

#### Parameters

##### \_skillId

`BigNumberish`

The skill where the user will gain reputation

##### \_user

`string`

The user who will gain reputation

##### \_amount

`BigNumberish`

The (positive) amount of reputation to gain

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.emitSkillReputationReward`

***

### emitSkillReputationReward(uint256,address,int256)()

> **emitSkillReputationReward(uint256,address,int256)**(`_skillId`, `_user`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Emit a positive skill reputation update. Available only to Root role holders

#### Parameters

##### \_skillId

`BigNumberish`

The skill where the user will gain reputation

##### \_user

`string`

The user who will gain reputation

##### \_amount

`BigNumberish`

The (positive) amount of reputation to gain

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.emitSkillReputationReward(uint256,address,int256)`

***

### enterRecoveryMode()

> **enterRecoveryMode**(`overrides`?): `Promise`\<`ContractTransaction`\>

Put colony network mining into recovery mode. Can only be called by user with recovery role.

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.enterRecoveryMode`

***

### enterRecoveryMode()()

> **enterRecoveryMode()**(`overrides`?): `Promise`\<`ContractTransaction`\>

Put colony network mining into recovery mode. Can only be called by user with recovery role.

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.enterRecoveryMode()`

***

### executeMetaTransaction()

> **executeMetaTransaction**(`userAddress`, `payload`, `sigR`, `sigS`, `sigV`, `overrides`?): `Promise`\<`ContractTransaction`\>

Executes a metatransaction targeting this contract

#### Parameters

##### userAddress

`string`

The address of the user that signed the metatransaction

##### payload

`BytesLike`

The transaction data that will be executed if signature valid

##### sigR

`BytesLike`

The 'r' part of the signature

##### sigS

`BytesLike`

The 's' part of the signature

##### sigV

`BigNumberish`

The 'v' part of the signature

##### overrides?

`PayableOverrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.executeMetaTransaction`

***

### executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)()

> **executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)**(`userAddress`, `payload`, `sigR`, `sigS`, `sigV`, `overrides`?): `Promise`\<`ContractTransaction`\>

Executes a metatransaction targeting this contract

#### Parameters

##### userAddress

`string`

The address of the user that signed the metatransaction

##### payload

`BytesLike`

The transaction data that will be executed if signature valid

##### sigR

`BytesLike`

The 'r' part of the signature

##### sigS

`BytesLike`

The 's' part of the signature

##### sigV

`BigNumberish`

The 'v' part of the signature

##### overrides?

`PayableOverrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)`

***

### executeTaskChange()

> **executeTaskChange**(`_sigV`, `_sigR`, `_sigS`, `_mode`, `_value`, `_data`, `overrides`?): `Promise`\<`ContractTransaction`\>

The Colony functions which require approval and the task roles to review these are set in `IColony.initialiseColony` at colony creation. Upon successful execution the `taskChangeNonces` entry for the task is incremented.
Executes a task update transaction `_data` which is approved and signed by two of its roles (e.g. manager and worker) using the detached signatures for these users.

#### Parameters

##### \_sigV

`BigNumberish`[]

recovery id

##### \_sigR

`BytesLike`[]

r output of the ECDSA signature of the transaction

##### \_sigS

`BytesLike`[]

s output of the ECDSA signature of the transaction

##### \_mode

`BigNumberish`[]

How the signature was generated - 0 for Geth-style (usual), 1 for Trezor-style (only Trezor does this)

##### \_value

`BigNumberish`

The transaction value, i.e. number of wei to be sent when the transaction is executed Currently we only accept 0 value transactions but this is kept as a future option

##### \_data

`BytesLike`

The transaction data

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.executeTaskChange`

***

### executeTaskChange(uint8\[\],bytes32\[\],bytes32\[\],uint8\[\],uint256,bytes)()

> **executeTaskChange(uint8\[\],bytes32\[\],bytes32\[\],uint8\[\],uint256,bytes)**(`_sigV`, `_sigR`, `_sigS`, `_mode`, `_value`, `_data`, `overrides`?): `Promise`\<`ContractTransaction`\>

The Colony functions which require approval and the task roles to review these are set in `IColony.initialiseColony` at colony creation. Upon successful execution the `taskChangeNonces` entry for the task is incremented.
Executes a task update transaction `_data` which is approved and signed by two of its roles (e.g. manager and worker) using the detached signatures for these users.

#### Parameters

##### \_sigV

`BigNumberish`[]

recovery id

##### \_sigR

`BytesLike`[]

r output of the ECDSA signature of the transaction

##### \_sigS

`BytesLike`[]

s output of the ECDSA signature of the transaction

##### \_mode

`BigNumberish`[]

How the signature was generated - 0 for Geth-style (usual), 1 for Trezor-style (only Trezor does this)

##### \_value

`BigNumberish`

The transaction value, i.e. number of wei to be sent when the transaction is executed Currently we only accept 0 value transactions but this is kept as a future option

##### \_data

`BytesLike`

The transaction data

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.executeTaskChange(uint8[],bytes32[],bytes32[],uint8[],uint256,bytes)`

***

### executeTaskRoleAssignment()

> **executeTaskRoleAssignment**(`_sigV`, `_sigR`, `_sigS`, `_mode`, `_value`, `_data`, `overrides`?): `Promise`\<`ContractTransaction`\>

Executes a task role update transaction `_data` which is approved and signed by two of addresses. depending of which function we are calling. Allowed functions are `setTaskManagerRole`, `setTaskEvaluatorRole` and `setTaskWorkerRole`. Upon successful execution the `taskChangeNonces` entry for the task is incremented.

#### Parameters

##### \_sigV

`BigNumberish`[]

recovery id

##### \_sigR

`BytesLike`[]

r output of the ECDSA signature of the transaction

##### \_sigS

`BytesLike`[]

s output of the ECDSA signature of the transaction

##### \_mode

`BigNumberish`[]

How the signature was generated - 0 for Geth-style (usual), 1 for Trezor-style (only Trezor does this)

##### \_value

`BigNumberish`

The transaction value, i.e. number of wei to be sent when the transaction is executed Currently we only accept 0 value transactions but this is kept as a future option

##### \_data

`BytesLike`

The transaction data

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.executeTaskRoleAssignment`

***

### executeTaskRoleAssignment(uint8\[\],bytes32\[\],bytes32\[\],uint8\[\],uint256,bytes)()

> **executeTaskRoleAssignment(uint8\[\],bytes32\[\],bytes32\[\],uint8\[\],uint256,bytes)**(`_sigV`, `_sigR`, `_sigS`, `_mode`, `_value`, `_data`, `overrides`?): `Promise`\<`ContractTransaction`\>

Executes a task role update transaction `_data` which is approved and signed by two of addresses. depending of which function we are calling. Allowed functions are `setTaskManagerRole`, `setTaskEvaluatorRole` and `setTaskWorkerRole`. Upon successful execution the `taskChangeNonces` entry for the task is incremented.

#### Parameters

##### \_sigV

`BigNumberish`[]

recovery id

##### \_sigR

`BytesLike`[]

r output of the ECDSA signature of the transaction

##### \_sigS

`BytesLike`[]

s output of the ECDSA signature of the transaction

##### \_mode

`BigNumberish`[]

How the signature was generated - 0 for Geth-style (usual), 1 for Trezor-style (only Trezor does this)

##### \_value

`BigNumberish`

The transaction value, i.e. number of wei to be sent when the transaction is executed Currently we only accept 0 value transactions but this is kept as a future option

##### \_data

`BytesLike`

The transaction data

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.executeTaskRoleAssignment(uint8[],bytes32[],bytes32[],uint8[],uint256,bytes)`

***

### exitRecoveryMode()

> **exitRecoveryMode**(`overrides`?): `Promise`\<`ContractTransaction`\>

Exit recovery mode, can be called by anyone if enough whitelist approvals are given.

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.exitRecoveryMode`

***

### exitRecoveryMode()()

> **exitRecoveryMode()**(`overrides`?): `Promise`\<`ContractTransaction`\>

Exit recovery mode, can be called by anyone if enough whitelist approvals are given.

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.exitRecoveryMode()`

***

### fallback()

> **fallback**(`overrides`?): `Promise`\<`TransactionResponse`\>

#### Parameters

##### overrides?

`TransactionRequest`

#### Returns

`Promise`\<`TransactionResponse`\>

#### Inherited from

`AugmentedIColony.fallback`

***

### finalizeExpenditure()

> **finalizeExpenditure**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Finalizes the expenditure and allows for funds to be claimed. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finalizeExpenditure`

***

### finalizeExpenditure(uint256)()

> **finalizeExpenditure(uint256)**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Finalizes the expenditure and allows for funds to be claimed. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finalizeExpenditure(uint256)`

***

### finalizePayment()

> **finalizePayment**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Finalizes the payment and logs the reputation log updates. Allowed to be called once after payment is fully funded. Secured function to authorised members.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_id

`BigNumberish`

Payment identifier

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finalizePayment`

***

### finalizePayment(uint256,uint256,uint256)()

> **finalizePayment(uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Finalizes the payment and logs the reputation log updates. Allowed to be called once after payment is fully funded. Secured function to authorised members.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_id

`BigNumberish`

Payment identifier

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finalizePayment(uint256,uint256,uint256)`

***

### finalizePaymentWithProofs()

> **finalizePaymentWithProofs**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [finalizePayment](ColonyClientV13.md#finalizepayment), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

Payment identifier

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finalizePaymentWithProofs`

***

### finalizeRewardPayout()

> **finalizeRewardPayout**(`_payoutId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Finalises the reward payout. Allows creation of next reward payouts for token that has been used in `_payoutId`. Can only be called when reward payout cycle is finished i.e when 60 days have passed from its creation.

#### Parameters

##### \_payoutId

`BigNumberish`

Id of the reward payout

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finalizeRewardPayout`

***

### finalizeRewardPayout(uint256)()

> **finalizeRewardPayout(uint256)**(`_payoutId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Finalises the reward payout. Allows creation of next reward payouts for token that has been used in `_payoutId`. Can only be called when reward payout cycle is finished i.e when 60 days have passed from its creation.

#### Parameters

##### \_payoutId

`BigNumberish`

Id of the reward payout

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finalizeRewardPayout(uint256)`

***

### finalizeTask()

> **finalizeTask**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set the `task.finalized` property to true
Called after task work rating is complete which closes the task and logs the respective reputation log updates. Allowed to be called once per task. Secured function to authorised members.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finalizeTask`

***

### finalizeTask(uint256)()

> **finalizeTask(uint256)**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set the `task.finalized` property to true
Called after task work rating is complete which closes the task and logs the respective reputation log updates. Allowed to be called once per task. Secured function to authorised members.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finalizeTask(uint256)`

***

### finishUpgrade()

> **finishUpgrade**(`overrides`?): `Promise`\<`ContractTransaction`\>

Can only be called by the colony itself, and only expected to be called as part of the `upgrade()` call. Required to be external so it can be an external call.
A function to be called after an upgrade has been done from v2 to v3.

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finishUpgrade`

***

### finishUpgrade()()

> **finishUpgrade()**(`overrides`?): `Promise`\<`ContractTransaction`\>

Can only be called by the colony itself, and only expected to be called as part of the `upgrade()` call. Required to be external so it can be an external call.
A function to be called after an upgrade has been done from v2 to v3.

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.finishUpgrade()`

***

### generateSecret()

> **generateSecret**(`_salt`, `_value`, `overrides`?): `Promise`\<`string`\>

Helper function used to generage consistently the rating secret using salt value `_salt` and value to hide `_value`

#### Parameters

##### \_salt

`BytesLike`

Salt value

##### \_value

`BigNumberish`

Value to hide

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.generateSecret`

***

### generateSecret(bytes32,uint256)()

> **generateSecret(bytes32,uint256)**(`_salt`, `_value`, `overrides`?): `Promise`\<`string`\>

Helper function used to generage consistently the rating secret using salt value `_salt` and value to hide `_value`

#### Parameters

##### \_salt

`BytesLike`

Salt value

##### \_value

`BigNumberish`

Value to hide

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.generateSecret(bytes32,uint256)`

***

### getApproval()

> **getApproval**(`_user`, `_obligator`, `_domainId`, `overrides`?): `Promise`\<`BigNumber`\>

View an approval to obligate tokens.

#### Parameters

##### \_user

`string`

User allowing their tokens to be obligated.

##### \_obligator

`string`

Address of the account we are willing to let obligate us.

##### \_domainId

`BigNumberish`

Domain in which we are willing to be obligated.

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getApproval`

***

### getApproval(address,address,uint256)()

> **getApproval(address,address,uint256)**(`_user`, `_obligator`, `_domainId`, `overrides`?): `Promise`\<`BigNumber`\>

View an approval to obligate tokens.

#### Parameters

##### \_user

`string`

User allowing their tokens to be obligated.

##### \_obligator

`string`

Address of the account we are willing to let obligate us.

##### \_domainId

`BigNumberish`

Domain in which we are willing to be obligated.

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getApproval(address,address,uint256)`

***

### getCapabilityRoles()

> **getCapabilityRoles**(`_sig`, `overrides`?): `Promise`\<`string`\>

Gets the bytes32 representation of the roles authorized to call a function

#### Parameters

##### \_sig

`BytesLike`

The function signature

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getCapabilityRoles`

***

### getCapabilityRoles(bytes4)()

> **getCapabilityRoles(bytes4)**(`_sig`, `overrides`?): `Promise`\<`string`\>

Gets the bytes32 representation of the roles authorized to call a function

#### Parameters

##### \_sig

`BytesLike`

The function signature

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getCapabilityRoles(bytes4)`

***

### getColonyNetwork()

> **getColonyNetwork**(`overrides`?): `Promise`\<`string`\>

The colonyNetworkAddress we read here is set once, during `initialiseColony`.
Returns the colony network address set on the Colony.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getColonyNetwork`

***

### getColonyNetwork()()

> **getColonyNetwork()**(`overrides`?): `Promise`\<`string`\>

The colonyNetworkAddress we read here is set once, during `initialiseColony`.
Returns the colony network address set on the Colony.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getColonyNetwork()`

***

### getDomain()

> **getDomain**(`_id`, `overrides`?): `Promise`\<`DomainStructOutput`\>

Get a domain by id.

#### Parameters

##### \_id

`BigNumberish`

Id of the domain which details to get

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`DomainStructOutput`\>

#### Inherited from

`AugmentedIColony.getDomain`

***

### getDomain(uint256)()

> **getDomain(uint256)**(`_id`, `overrides`?): `Promise`\<`DomainStructOutput`\>

Get a domain by id.

#### Parameters

##### \_id

`BigNumberish`

Id of the domain which details to get

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`DomainStructOutput`\>

#### Inherited from

`AugmentedIColony.getDomain(uint256)`

***

### getDomainCount()

> **getDomainCount**(`overrides`?): `Promise`\<`BigNumber`\>

Get the number of domains in the colony.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getDomainCount`

***

### getDomainCount()()

> **getDomainCount()**(`overrides`?): `Promise`\<`BigNumber`\>

Get the number of domains in the colony.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getDomainCount()`

***

### getDomainFromFundingPot()

> **getDomainFromFundingPot**(`_fundingPotId`, `overrides`?): `Promise`\<`BigNumber`\>

Get the domain corresponding to a funding pot

#### Parameters

##### \_fundingPotId

`BigNumberish`

Id of the funding pot

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getDomainFromFundingPot`

***

### getDomainFromFundingPot(uint256)()

> **getDomainFromFundingPot(uint256)**(`_fundingPotId`, `overrides`?): `Promise`\<`BigNumber`\>

Get the domain corresponding to a funding pot

#### Parameters

##### \_fundingPotId

`BigNumberish`

Id of the funding pot

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getDomainFromFundingPot(uint256)`

***

### getExpenditure()

> **getExpenditure**(`_id`, `overrides`?): `Promise`\<`ExpenditureStructOutput`\>

Returns an existing expenditure.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`ExpenditureStructOutput`\>

#### Inherited from

`AugmentedIColony.getExpenditure`

***

### getExpenditure(uint256)()

> **getExpenditure(uint256)**(`_id`, `overrides`?): `Promise`\<`ExpenditureStructOutput`\>

Returns an existing expenditure.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`ExpenditureStructOutput`\>

#### Inherited from

`AugmentedIColony.getExpenditure(uint256)`

***

### getExpenditureCount()

> **getExpenditureCount**(`overrides`?): `Promise`\<`BigNumber`\>

Get the number of expenditures in the colony.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getExpenditureCount`

***

### getExpenditureCount()()

> **getExpenditureCount()**(`overrides`?): `Promise`\<`BigNumber`\>

Get the number of expenditures in the colony.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getExpenditureCount()`

***

### getExpenditureSlot()

> **getExpenditureSlot**(`_id`, `_slot`, `overrides`?): `Promise`\<`ExpenditureSlotStructOutput`\>

Returns an existing expenditure slot.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_slot

`BigNumberish`

Expenditure slot

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`ExpenditureSlotStructOutput`\>

#### Inherited from

`AugmentedIColony.getExpenditureSlot`

***

### getExpenditureSlot(uint256,uint256)()

> **getExpenditureSlot(uint256,uint256)**(`_id`, `_slot`, `overrides`?): `Promise`\<`ExpenditureSlotStructOutput`\>

Returns an existing expenditure slot.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_slot

`BigNumberish`

Expenditure slot

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`ExpenditureSlotStructOutput`\>

#### Inherited from

`AugmentedIColony.getExpenditureSlot(uint256,uint256)`

***

### getExpenditureSlotPayout()

> **getExpenditureSlotPayout**(`_id`, `_slot`, `_token`, `overrides`?): `Promise`\<`BigNumber`\>

Returns an existing expenditure slot's payout for a token.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_slot

`BigNumberish`

Expenditure slot

##### \_token

`string`

Token address

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getExpenditureSlotPayout`

***

### getExpenditureSlotPayout(uint256,uint256,address)()

> **getExpenditureSlotPayout(uint256,uint256,address)**(`_id`, `_slot`, `_token`, `overrides`?): `Promise`\<`BigNumber`\>

Returns an existing expenditure slot's payout for a token.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_slot

`BigNumberish`

Expenditure slot

##### \_token

`string`

Token address

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getExpenditureSlotPayout(uint256,uint256,address)`

***

### getExtensionClient()

> **getExtensionClient**\<`E`\>(`extension`): `Promise`\<`GetExtensionClientReturns`\[`E`\]\>

Get an instance of an extension client associated with this Colony.

#### Type Parameters

• **E** *extends* [`Extension`](../enumerations/Extension.md)

#### Parameters

##### extension

`E`

An [Extension](../enumerations/Extension.md)

#### Returns

`Promise`\<`GetExtensionClientReturns`\[`E`\]\>

An instance of an intialized extension client for the desired extension

#### Inherited from

`AugmentedIColony.getExtensionClient`

***

### getFundingPot()

> **getFundingPot**(`_id`, `overrides`?): `Promise`\<\[`number`, `BigNumber`, `BigNumber`\] & `object`\>

For the reward funding pot (e.g. id: 0) this returns (0, 0, 0).
Get the non-mapping properties of a pot by id.

#### Parameters

##### \_id

`BigNumberish`

Id of the pot which details to get

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`number`, `BigNumber`, `BigNumber`\] & `object`\>

#### Inherited from

`AugmentedIColony.getFundingPot`

***

### getFundingPot(uint256)()

> **getFundingPot(uint256)**(`_id`, `overrides`?): `Promise`\<\[`number`, `BigNumber`, `BigNumber`\] & `object`\>

For the reward funding pot (e.g. id: 0) this returns (0, 0, 0).
Get the non-mapping properties of a pot by id.

#### Parameters

##### \_id

`BigNumberish`

Id of the pot which details to get

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`number`, `BigNumber`, `BigNumber`\] & `object`\>

#### Inherited from

`AugmentedIColony.getFundingPot(uint256)`

***

### getFundingPotBalance()

> **getFundingPotBalance**(`_potId`, `_token`, `overrides`?): `Promise`\<`BigNumber`\>

Get the `_token` balance of pot with id `_potId`.

#### Parameters

##### \_potId

`BigNumberish`

Id of the funding pot

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getFundingPotBalance`

***

### getFundingPotBalance(uint256,address)()

> **getFundingPotBalance(uint256,address)**(`_potId`, `_token`, `overrides`?): `Promise`\<`BigNumber`\>

Get the `_token` balance of pot with id `_potId`.

#### Parameters

##### \_potId

`BigNumberish`

Id of the funding pot

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getFundingPotBalance(uint256,address)`

***

### getFundingPotCount()

> **getFundingPotCount**(`overrides`?): `Promise`\<`BigNumber`\>

Get the number of funding pots in the colony.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getFundingPotCount`

***

### getFundingPotCount()()

> **getFundingPotCount()**(`overrides`?): `Promise`\<`BigNumber`\>

Get the number of funding pots in the colony.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getFundingPotCount()`

***

### getFundingPotPayout()

> **getFundingPotPayout**(`_potId`, `_token`, `overrides`?): `Promise`\<`BigNumber`\>

Get the assigned `_token` payouts of pot with id `_potId`.

#### Parameters

##### \_potId

`BigNumberish`

Id of the funding pot

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getFundingPotPayout`

***

### getFundingPotPayout(uint256,address)()

> **getFundingPotPayout(uint256,address)**(`_potId`, `_token`, `overrides`?): `Promise`\<`BigNumber`\>

Get the assigned `_token` payouts of pot with id `_potId`.

#### Parameters

##### \_potId

`BigNumberish`

Id of the funding pot

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getFundingPotPayout(uint256,address)`

***

### getMembersReputation()

> **getMembersReputation**(`skillId`): `Promise`\<\{ `addresses`: `string`[]; \}\>

Get all addresses that have reputation for a given skill.
If you need the skillId for a certain domain you can use the [getDomain](ColonyClientV13.md#getdomain) function.

#### Parameters

##### skillId

`BigNumberish`

The skill id to get the reputation in

#### Returns

`Promise`\<\{ `addresses`: `string`[]; \}\>

All addresses that have a non-zero reputation for the given skill

#### Inherited from

`AugmentedIColony.getMembersReputation`

***

### getMetatransactionNonce()

> **getMetatransactionNonce**(`userAddress`, `overrides`?): `Promise`\<`BigNumber`\>

Gets the next metatransaction nonce for user that should be used targeting this contract

#### Parameters

##### userAddress

`string`

The address of the user that will sign the metatransaction

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getMetatransactionNonce`

***

### getMetatransactionNonce(address)()

> **getMetatransactionNonce(address)**(`userAddress`, `overrides`?): `Promise`\<`BigNumber`\>

Gets the next metatransaction nonce for user that should be used targeting this contract

#### Parameters

##### userAddress

`string`

The address of the user that will sign the metatransaction

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getMetatransactionNonce(address)`

***

### getNonRewardPotsTotal()

> **getNonRewardPotsTotal**(`_token`, `overrides`?): `Promise`\<`BigNumber`\>

Get the total amount of tokens `_token` minus amount reserved to be paid to the reputation and token holders as rewards.

#### Parameters

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getNonRewardPotsTotal`

***

### getNonRewardPotsTotal(address)()

> **getNonRewardPotsTotal(address)**(`_token`, `overrides`?): `Promise`\<`BigNumber`\>

Get the total amount of tokens `_token` minus amount reserved to be paid to the reputation and token holders as rewards.

#### Parameters

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getNonRewardPotsTotal(address)`

***

### getObligation()

> **getObligation**(`_user`, `_obligator`, `_domainId`, `overrides`?): `Promise`\<`BigNumber`\>

View an obligation of tokens.

#### Parameters

##### \_user

`string`

User whose tokens are obligated.

##### \_obligator

`string`

Address of the account who obligated us.

##### \_domainId

`BigNumberish`

Domain in which we are obligated.

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getObligation`

***

### getObligation(address,address,uint256)()

> **getObligation(address,address,uint256)**(`_user`, `_obligator`, `_domainId`, `overrides`?): `Promise`\<`BigNumber`\>

View an obligation of tokens.

#### Parameters

##### \_user

`string`

User whose tokens are obligated.

##### \_obligator

`string`

Address of the account who obligated us.

##### \_domainId

`BigNumberish`

Domain in which we are obligated.

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getObligation(address,address,uint256)`

***

### getPayment()

> **getPayment**(`_id`, `overrides`?): `Promise`\<`PaymentStructOutput`\>

Returns an exiting payment.

#### Parameters

##### \_id

`BigNumberish`

Payment identifier

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`PaymentStructOutput`\>

#### Inherited from

`AugmentedIColony.getPayment`

***

### getPayment(uint256)()

> **getPayment(uint256)**(`_id`, `overrides`?): `Promise`\<`PaymentStructOutput`\>

Returns an exiting payment.

#### Parameters

##### \_id

`BigNumberish`

Payment identifier

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`PaymentStructOutput`\>

#### Inherited from

`AugmentedIColony.getPayment(uint256)`

***

### getPaymentCount()

> **getPaymentCount**(`overrides`?): `Promise`\<`BigNumber`\>

Get the number of payments in the colony.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getPaymentCount`

***

### getPaymentCount()()

> **getPaymentCount()**(`overrides`?): `Promise`\<`BigNumber`\>

Get the number of payments in the colony.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getPaymentCount()`

***

### getReputation()

> **getReputation**(`skillId`, `address`, `customRootHash`?): `Promise`\<\{ `branchMask`: `string`; `key`: `string`; `reputationAmount`: `BigNumber`; `siblings`: `string`[]; `value`: `string`; \}\>

Get the reputation for an address and a certain skill.
If you need the skillId for a certain domain you can use the [getDomain](ColonyClientV13.md#getdomain) function.

#### Parameters

##### skillId

`BigNumberish`

The skill id to get the addresses reputation in

##### address

`string`

Wallet address to retrieve the reputation of

##### customRootHash?

`string`

The `customRootHash` can be set to retrieve the reputation at a certain block time in the past

#### Returns

`Promise`\<\{ `branchMask`: `string`; `key`: `string`; `reputationAmount`: `BigNumber`; `siblings`: `string`[]; `value`: `string`; \}\>

The reputation amount as well as the two proofs that are needed to verify the reputation on chain

#### Remarks

This function also retrieves the proofs (`branchMask`, `siblings`) that are needed to verify the reputation on chain.
If you don't need to do that (e.g. in order to proof the reputation when calling a contract method), you should probably just use
the [getReputationWithoutProofs](ColonyClientV13.md#getreputationwithoutproofs) method as it requires fewer computations

#### Inherited from

`AugmentedIColony.getReputation`

***

### getReputationAcrossDomains()

> **getReputationAcrossDomains**(`address`, `customRootHash`?): `Promise`\<`object`[]\>

Get the reputation for an address across all domains in a Colony.

#### Parameters

##### address

`string`

Wallet address to retrieve the reputation of

##### customRootHash?

`string`

The `customRootHash` can be set to retrieve the reputation at a certain block time in the past

#### Returns

`Promise`\<`object`[]\>

The reputation amount

#### Inherited from

`AugmentedIColony.getReputationAcrossDomains`

***

### getReputationWithoutProofs()

> **getReputationWithoutProofs**(`skillId`, `address`, `customRootHash`?): `Promise`\<\{ `key`: `string`; `reputationAmount`: `BigNumber`; `value`: `string`; \}\>

Get the reputation for an address and a certain skill.
If you need the skillId for a certain domain you can use the [getDomain](ColonyClientV13.md#getdomain) function.

#### Parameters

##### skillId

`BigNumberish`

The skill id to get the addresses reputation in

##### address

`string`

Wallet address to retrieve the reputation of

##### customRootHash?

`string`

The `customRootHash` can be set to retrieve the reputation at a certain block time in the past

#### Returns

`Promise`\<\{ `key`: `string`; `reputationAmount`: `BigNumber`; `value`: `string`; \}\>

The reputation amount

#### Inherited from

`AugmentedIColony.getReputationWithoutProofs`

***

### getRewardInverse()

> **getRewardInverse**(`overrides`?): `Promise`\<`BigNumber`\>

Return 1 / the reward to pay out from revenue. e.g. if the fee is 1% (or 0.01), return 100.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getRewardInverse`

***

### getRewardInverse()()

> **getRewardInverse()**(`overrides`?): `Promise`\<`BigNumber`\>

Return 1 / the reward to pay out from revenue. e.g. if the fee is 1% (or 0.01), return 100.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getRewardInverse()`

***

### getRewardPayoutInfo()

> **getRewardPayoutInfo**(`_payoutId`, `overrides`?): `Promise`\<`RewardPayoutCycleStructOutput`\>

Get useful information about specific reward payout.

#### Parameters

##### \_payoutId

`BigNumberish`

Id of the reward payout

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`RewardPayoutCycleStructOutput`\>

#### Inherited from

`AugmentedIColony.getRewardPayoutInfo`

***

### getRewardPayoutInfo(uint256)()

> **getRewardPayoutInfo(uint256)**(`_payoutId`, `overrides`?): `Promise`\<`RewardPayoutCycleStructOutput`\>

Get useful information about specific reward payout.

#### Parameters

##### \_payoutId

`BigNumberish`

Id of the reward payout

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`RewardPayoutCycleStructOutput`\>

#### Inherited from

`AugmentedIColony.getRewardPayoutInfo(uint256)`

***

### getRootLocalSkill()

> **getRootLocalSkill**(`overrides`?): `Promise`\<`BigNumber`\>

Get the root local skill id

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getRootLocalSkill`

***

### getRootLocalSkill()()

> **getRootLocalSkill()**(`overrides`?): `Promise`\<`BigNumber`\>

Get the root local skill id

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getRootLocalSkill()`

***

### getTask()

> **getTask**(`_id`, `overrides`?): `Promise`\<\[`string`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`[]\] & `object`\>

Get a task with id `_id`

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`string`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`[]\] & `object`\>

#### Inherited from

`AugmentedIColony.getTask`

***

### getTask(uint256)()

> **getTask(uint256)**(`_id`, `overrides`?): `Promise`\<\[`string`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`[]\] & `object`\>

Get a task with id `_id`

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`string`, `string`, `number`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`, `BigNumber`[]\] & `object`\>

#### Inherited from

`AugmentedIColony.getTask(uint256)`

***

### getTaskChangeNonce()

> **getTaskChangeNonce**(`_id`, `overrides`?): `Promise`\<`BigNumber`\>

Starts from 0 and is incremented on every co-reviewed task change via `executeTaskChange` call.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTaskChangeNonce`

***

### getTaskChangeNonce(uint256)()

> **getTaskChangeNonce(uint256)**(`_id`, `overrides`?): `Promise`\<`BigNumber`\>

Starts from 0 and is incremented on every co-reviewed task change via `executeTaskChange` call.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTaskChangeNonce(uint256)`

***

### getTaskCount()

> **getTaskCount**(`overrides`?): `Promise`\<`BigNumber`\>

Get the number of tasks in the colony.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTaskCount`

***

### getTaskCount()()

> **getTaskCount()**(`overrides`?): `Promise`\<`BigNumber`\>

Get the number of tasks in the colony.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTaskCount()`

***

### getTaskPayout()

> **getTaskPayout**(`_id`, `_role`, `_token`, `overrides`?): `Promise`\<`BigNumber`\>

Get payout amount in `_token` denomination for role `_role` in task `_id`.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_role

`BigNumberish`

Id of the role, as defined in TaskRole enum

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTaskPayout`

***

### getTaskPayout(uint256,uint8,address)()

> **getTaskPayout(uint256,uint8,address)**(`_id`, `_role`, `_token`, `overrides`?): `Promise`\<`BigNumber`\>

Get payout amount in `_token` denomination for role `_role` in task `_id`.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_role

`BigNumberish`

Id of the role, as defined in TaskRole enum

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTaskPayout(uint256,uint8,address)`

***

### getTaskRole()

> **getTaskRole**(`_id`, `_role`, `overrides`?): `Promise`\<`RoleStructOutput`\>

Get the `Role` properties back for role `_role` in task `_id`.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_role

`BigNumberish`

Id of the role, as defined in TaskRole enum

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`RoleStructOutput`\>

#### Inherited from

`AugmentedIColony.getTaskRole`

***

### getTaskRole(uint256,uint8)()

> **getTaskRole(uint256,uint8)**(`_id`, `_role`, `overrides`?): `Promise`\<`RoleStructOutput`\>

Get the `Role` properties back for role `_role` in task `_id`.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_role

`BigNumberish`

Id of the role, as defined in TaskRole enum

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`RoleStructOutput`\>

#### Inherited from

`AugmentedIColony.getTaskRole(uint256,uint8)`

***

### getTaskWorkRatingSecret()

> **getTaskWorkRatingSecret**(`_id`, `_role`, `overrides`?): `Promise`\<`string`\>

Get the rating secret submitted for role `_role` in task `_id`

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_role

`BigNumberish`

Id of the role, as defined in TaskRole enum

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getTaskWorkRatingSecret`

***

### getTaskWorkRatingSecret(uint256,uint8)()

> **getTaskWorkRatingSecret(uint256,uint8)**(`_id`, `_role`, `overrides`?): `Promise`\<`string`\>

Get the rating secret submitted for role `_role` in task `_id`

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_role

`BigNumberish`

Id of the role, as defined in TaskRole enum

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getTaskWorkRatingSecret(uint256,uint8)`

***

### getTaskWorkRatingSecretsInfo()

> **getTaskWorkRatingSecretsInfo**(`_id`, `overrides`?): `Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

Get the `ColonyStorage.RatingSecrets` information for task `_id`.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Inherited from

`AugmentedIColony.getTaskWorkRatingSecretsInfo`

***

### getTaskWorkRatingSecretsInfo(uint256)()

> **getTaskWorkRatingSecretsInfo(uint256)**(`_id`, `overrides`?): `Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

Get the `ColonyStorage.RatingSecrets` information for task `_id`.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<\[`BigNumber`, `BigNumber`\] & `object`\>

#### Inherited from

`AugmentedIColony.getTaskWorkRatingSecretsInfo(uint256)`

***

### getToken()

> **getToken**(`overrides`?): `Promise`\<`string`\>

Get the colony token.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getToken`

***

### getToken()()

> **getToken()**(`overrides`?): `Promise`\<`string`\>

Get the colony token.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getToken()`

***

### getTokenApproval()

> **getTokenApproval**(`token`, `spender`, `overrides`?): `Promise`\<`BigNumber`\>

Get the current approval amount

#### Parameters

##### token

`string`

The address of the token which was approved

##### spender

`string`

The account we have approved

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTokenApproval`

***

### getTokenApproval(address,address)()

> **getTokenApproval(address,address)**(`token`, `spender`, `overrides`?): `Promise`\<`BigNumber`\>

Get the current approval amount

#### Parameters

##### token

`string`

The address of the token which was approved

##### spender

`string`

The account we have approved

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTokenApproval(address,address)`

***

### getTotalTokenApproval()

> **getTotalTokenApproval**(`token`, `overrides`?): `Promise`\<`BigNumber`\>

Get the current total approval amount across all spenders

#### Parameters

##### token

`string`

The address of the token which was approved

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTotalTokenApproval`

***

### getTotalTokenApproval(address)()

> **getTotalTokenApproval(address)**(`token`, `overrides`?): `Promise`\<`BigNumber`\>

Get the current total approval amount across all spenders

#### Parameters

##### token

`string`

The address of the token which was approved

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.getTotalTokenApproval(address)`

***

### getUserRoles()

> **getUserRoles**(`_user`, `_domain`, `overrides`?): `Promise`\<`string`\>

Gets the bytes32 representation of the roles for a user in a given domain

#### Parameters

##### \_user

`string`

The user whose roles we want to get

##### \_domain

`BigNumberish`

The domain we want to get roles in

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getUserRoles`

***

### getUserRoles(address,uint256)()

> **getUserRoles(address,uint256)**(`_user`, `_domain`, `overrides`?): `Promise`\<`string`\>

Gets the bytes32 representation of the roles for a user in a given domain

#### Parameters

##### \_user

`string`

The user whose roles we want to get

##### \_domain

`BigNumberish`

The domain we want to get roles in

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.getUserRoles(address,uint256)`

***

### hasInheritedUserRole()

> **hasInheritedUserRole**(`_user`, `_domainId`, `_role`, `_childSkillIndex`, `_childDomainId`, `overrides`?): `Promise`\<`boolean`\>

Check whether a given user has a given role for the colony, in a child domain. Calls the function of the same name on the colony's authority contract and an internal inheritance validator function

#### Parameters

##### \_user

`string`

The user whose role we want to check

##### \_domainId

`BigNumberish`

Domain in which the caller has the role

##### \_role

`BigNumberish`

The role we want to check for

##### \_childSkillIndex

`BigNumberish`

The index that the `_childDomainId` is relative to `_domainId`

##### \_childDomainId

`BigNumberish`

The domain where we want to use the role

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.hasInheritedUserRole`

***

### hasInheritedUserRole(address,uint256,uint8,uint256,uint256)()

> **hasInheritedUserRole(address,uint256,uint8,uint256,uint256)**(`_user`, `_domainId`, `_role`, `_childSkillIndex`, `_childDomainId`, `overrides`?): `Promise`\<`boolean`\>

Check whether a given user has a given role for the colony, in a child domain. Calls the function of the same name on the colony's authority contract and an internal inheritance validator function

#### Parameters

##### \_user

`string`

The user whose role we want to check

##### \_domainId

`BigNumberish`

Domain in which the caller has the role

##### \_role

`BigNumberish`

The role we want to check for

##### \_childSkillIndex

`BigNumberish`

The index that the `_childDomainId` is relative to `_domainId`

##### \_childDomainId

`BigNumberish`

The domain where we want to use the role

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.hasInheritedUserRole(address,uint256,uint8,uint256,uint256)`

***

### hasInheritedUserRoleWithProofs()

> **hasInheritedUserRoleWithProofs**(`_user`, `_domainId`, `_role`, `overrides`?): `Promise`\<`boolean`\>

Same as [hasInheritedUserRole](ColonyClientV13.md#hasinheriteduserrole), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_user

`string`

The user whose role we want to check

##### \_domainId

`BigNumberish`

Domain in which the caller has the role

##### \_role

`BigNumberish`

The role we want to check for

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`ColonyAugmentsV4.hasInheritedUserRoleWithProofs`

***

### hasUserRole()

> **hasUserRole**(`_user`, `_domainId`, `_role`, `overrides`?): `Promise`\<`boolean`\>

Check whether a given user has a given role for the colony. Calls the function of the same name on the colony's authority contract.

#### Parameters

##### \_user

`string`

The user whose role we want to check

##### \_domainId

`BigNumberish`

The domain where we want to check for the role

##### \_role

`BigNumberish`

The role we want to check for

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.hasUserRole`

***

### hasUserRole(address,uint256,uint8)()

> **hasUserRole(address,uint256,uint8)**(`_user`, `_domainId`, `_role`, `overrides`?): `Promise`\<`boolean`\>

Check whether a given user has a given role for the colony. Calls the function of the same name on the colony's authority contract.

#### Parameters

##### \_user

`string`

The user whose role we want to check

##### \_domainId

`BigNumberish`

The domain where we want to check for the role

##### \_role

`BigNumberish`

The role we want to check for

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.hasUserRole(address,uint256,uint8)`

***

### initialiseColony()

> **initialiseColony**(`_colonyNetworkAddress`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets the reward inverse to the uint max 2**256 - 1.
Called once when the colony is created to initialise certain storage slot values.

#### Parameters

##### \_colonyNetworkAddress

`string`

Address of the colony network

##### \_token

`string`

Address of the colony ERC20 Token

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.initialiseColony`

***

### initialiseColony(address,address)()

> **initialiseColony(address,address)**(`_colonyNetworkAddress`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets the reward inverse to the uint max 2**256 - 1.
Called once when the colony is created to initialise certain storage slot values.

#### Parameters

##### \_colonyNetworkAddress

`string`

Address of the colony network

##### \_token

`string`

Address of the colony ERC20 Token

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.initialiseColony(address,address)`

***

### initialiseRootLocalSkill()

> **initialiseRootLocalSkill**(`overrides`?): `Promise`\<`ContractTransaction`\>

Initialise the local skill tree for the colony.

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.initialiseRootLocalSkill`

***

### initialiseRootLocalSkill()()

> **initialiseRootLocalSkill()**(`overrides`?): `Promise`\<`ContractTransaction`\>

Initialise the local skill tree for the colony.

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.initialiseRootLocalSkill()`

***

### installExtension()

> **installExtension**(`extensionId`, `version`, `overrides`?): `Promise`\<`ContractTransaction`\>

Install an extension to the colony. Secured function to authorised members.

#### Parameters

##### extensionId

`BytesLike`

keccak256 hash of the extension name, used as an indentifier

##### version

`BigNumberish`

The new extension version to install

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.installExtension`

***

### installExtension(bytes32,uint256)()

> **installExtension(bytes32,uint256)**(`extensionId`, `version`, `overrides`?): `Promise`\<`ContractTransaction`\>

Install an extension to the colony. Secured function to authorised members.

#### Parameters

##### extensionId

`BytesLike`

keccak256 hash of the extension name, used as an indentifier

##### version

`BigNumberish`

The new extension version to install

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.installExtension(bytes32,uint256)`

***

### installExtensionChecked()

> **installExtensionChecked**(`extension`, `version`?, `overrides`?): `Promise`\<`ContractTransaction`\>

Similar to [installExtension](ColonyClientV13.md#installextension), but first check whether the desired extension can be installed in this Colony
Always prefer this method, except when you have good reason not to.

#### Parameters

##### extension

[`Extension`](../enumerations/Extension.md)

A [Extension](../enumerations/Extension.md) name

##### version?

`number`

The desired version number of the extension you wish to install

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV5.installExtensionChecked`

***

### isInRecoveryMode()

> **isInRecoveryMode**(`overrides`?): `Promise`\<`boolean`\>

Is colony network in recovery mode.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.isInRecoveryMode`

***

### isInRecoveryMode()()

> **isInRecoveryMode()**(`overrides`?): `Promise`\<`boolean`\>

Is colony network in recovery mode.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.isInRecoveryMode()`

***

### listenerCount()

> **listenerCount**(`eventName`?): `number`

#### Parameters

##### eventName?

`string` | `EventFilter`

#### Returns

`number`

#### Inherited from

`AugmentedIColony.listenerCount`

***

### listeners()

#### Call Signature

> **listeners**\<`TEvent`\>(`eventFilter`?): `TypedListener`\<`TEvent`\>[]

##### Type Parameters

• **TEvent** *extends* `TypedEvent`

##### Parameters

###### eventFilter?

`TypedEventFilter`\<`TEvent`\>

##### Returns

`TypedListener`\<`TEvent`\>[]

##### Inherited from

`AugmentedIColony.listeners`

#### Call Signature

> **listeners**(`eventName`?): `Listener`[]

##### Parameters

###### eventName?

`string`

##### Returns

`Listener`[]

##### Inherited from

`AugmentedIColony.listeners`

***

### lockExpenditure()

> **lockExpenditure**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Locks the expenditure and prevents further editing. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.lockExpenditure`

***

### lockExpenditure(uint256)()

> **lockExpenditure(uint256)**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Locks the expenditure and prevents further editing. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.lockExpenditure(uint256)`

***

### lockToken()

> **lockToken**(`overrides`?): `Promise`\<`ContractTransaction`\>

Lock the colony's token. Can only be called by a network-managed extension.

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.lockToken`

***

### lockToken()()

> **lockToken()**(`overrides`?): `Promise`\<`ContractTransaction`\>

Lock the colony's token. Can only be called by a network-managed extension.

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.lockToken()`

***

### makeArbitraryTransaction()

> **makeArbitraryTransaction**(`_to`, `_action`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_to

`string`

Contract to receive the function call (cannot be this contract, network or token locking)

##### \_action

`BytesLike`

Bytes array encoding the function call and arguments

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Deprecated Execute

arbitrary transaction on behalf of the Colony

#### Inherited from

`AugmentedIColony.makeArbitraryTransaction`

***

### makeArbitraryTransaction(address,bytes)()

> **makeArbitraryTransaction(address,bytes)**(`_to`, `_action`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_to

`string`

Contract to receive the function call (cannot be this contract, network or token locking)

##### \_action

`BytesLike`

Bytes array encoding the function call and arguments

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Deprecated Execute

arbitrary transaction on behalf of the Colony

#### Inherited from

`AugmentedIColony.makeArbitraryTransaction(address,bytes)`

***

### makeArbitraryTransactions()

> **makeArbitraryTransactions**(`_targets`, `_actions`, `_strict`, `overrides`?): `Promise`\<`ContractTransaction`\>

Execute arbitrary transactions on behalf of the Colony in series

#### Parameters

##### \_targets

`string`[]

Array of addressed to be targeted

##### \_actions

`BytesLike`[]

Array of Bytes arrays encoding the function calls and arguments

##### \_strict

`boolean`

Boolean indicating whether if one transaction fails, the whole call to this function should fail.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeArbitraryTransactions`

***

### makeArbitraryTransactions(address\[\],bytes\[\],bool)()

> **makeArbitraryTransactions(address\[\],bytes\[\],bool)**(`_targets`, `_actions`, `_strict`, `overrides`?): `Promise`\<`ContractTransaction`\>

Execute arbitrary transactions on behalf of the Colony in series

#### Parameters

##### \_targets

`string`[]

Array of addressed to be targeted

##### \_actions

`BytesLike`[]

Array of Bytes arrays encoding the function calls and arguments

##### \_strict

`boolean`

Boolean indicating whether if one transaction fails, the whole call to this function should fail.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeArbitraryTransactions(address[],bytes[],bool)`

***

### makeExpenditure()

> **makeExpenditure**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Add a new expenditure in the colony. Secured function to authorised members.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`)

##### \_domainId

`BigNumberish`

The domain where the expenditure belongs

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeExpenditure`

***

### makeExpenditure(uint256,uint256,uint256)()

> **makeExpenditure(uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Add a new expenditure in the colony. Secured function to authorised members.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`)

##### \_domainId

`BigNumberish`

The domain where the expenditure belongs

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeExpenditure(uint256,uint256,uint256)`

***

### makeExpenditureWithProofs()

> **makeExpenditureWithProofs**(`_domainId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [makeExpenditure](ColonyClientV13.md#makeexpenditure), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_domainId

`BigNumberish`

The domain where the expenditure belongs

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV4.makeExpenditureWithProofs`

***

### makeSingleArbitraryTransaction()

> **makeSingleArbitraryTransaction**(`_target`, `_action`, `overrides`?): `Promise`\<`ContractTransaction`\>

Only callable by the colony itself. If you wish to use this functionality, you should use the makeAbitraryTransactions function
Executes a single arbitrary transaction

#### Parameters

##### \_target

`string`

Contract to receive the function call

##### \_action

`BytesLike`

Bytes array encoding the function call and arguments

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeSingleArbitraryTransaction`

***

### makeSingleArbitraryTransaction(address,bytes)()

> **makeSingleArbitraryTransaction(address,bytes)**(`_target`, `_action`, `overrides`?): `Promise`\<`ContractTransaction`\>

Only callable by the colony itself. If you wish to use this functionality, you should use the makeAbitraryTransactions function
Executes a single arbitrary transaction

#### Parameters

##### \_target

`string`

Contract to receive the function call

##### \_action

`BytesLike`

Bytes array encoding the function call and arguments

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeSingleArbitraryTransaction(address,bytes)`

***

### makeTask()

> **makeTask**(`_permissionDomainId`, `_childSkillIndex`, `_specificationHash`, `_domainId`, `_skillId`, `_dueDate`, `overrides`?): `Promise`\<`ContractTransaction`\>

Make a new task in the colony. Secured function to authorised members.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_specificationHash

`BytesLike`

Database identifier where the task specification is stored

##### \_domainId

`BigNumberish`

The domain where the task belongs

##### \_skillId

`BigNumberish`

The skill associated with the task, can set to `0` for no-op

##### \_dueDate

`BigNumberish`

The due date of the task, can set to `0` for no-op

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeTask`

***

### makeTask(uint256,uint256,bytes32,uint256,uint256,uint256)()

> **makeTask(uint256,uint256,bytes32,uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_specificationHash`, `_domainId`, `_skillId`, `_dueDate`, `overrides`?): `Promise`\<`ContractTransaction`\>

Make a new task in the colony. Secured function to authorised members.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_specificationHash

`BytesLike`

Database identifier where the task specification is stored

##### \_domainId

`BigNumberish`

The domain where the task belongs

##### \_skillId

`BigNumberish`

The skill associated with the task, can set to `0` for no-op

##### \_dueDate

`BigNumberish`

The due date of the task, can set to `0` for no-op

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeTask(uint256,uint256,bytes32,uint256,uint256,uint256)`

***

### makeTaskWithProofs()

> **makeTaskWithProofs**(`_specificationHash`, `_domainId`, `_skillId`, `_dueDate`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [makeTask](ColonyClientV13.md#maketask), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_specificationHash

`BytesLike`

Database identifier where the task specification is stored

##### \_domainId

`BigNumberish`

The domain where the task belongs

##### \_skillId

`BigNumberish`

The skill associated with the task, can set to `0` for no-op

##### \_dueDate

`BigNumberish`

The due date of the task, can set to `0` for no-op

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.makeTaskWithProofs`

***

### mintTokens()

> **mintTokens**(`_wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

Mint `_wad` amount of colony tokens. Secured function to authorised members.

#### Parameters

##### \_wad

`BigNumberish`

Amount to mint

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.mintTokens`

***

### mintTokens(uint256)()

> **mintTokens(uint256)**(`_wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

Mint `_wad` amount of colony tokens. Secured function to authorised members.

#### Parameters

##### \_wad

`BigNumberish`

Amount to mint

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.mintTokens(uint256)`

***

### mintTokensFor()

> **mintTokensFor**(`_guy`, `_wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

Mint `_wad` amount of colony tokens and send to `_guy`. Secured function to authorised members.

#### Parameters

##### \_guy

`string`

Recipient of new tokens

##### \_wad

`BigNumberish`

Amount to mint

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.mintTokensFor`

***

### mintTokensFor(address,uint256)()

> **mintTokensFor(address,uint256)**(`_guy`, `_wad`, `overrides`?): `Promise`\<`ContractTransaction`\>

Mint `_wad` amount of colony tokens and send to `_guy`. Secured function to authorised members.

#### Parameters

##### \_guy

`string`

Recipient of new tokens

##### \_wad

`BigNumberish`

Amount to mint

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.mintTokensFor(address,uint256)`

***

### moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)()

> **moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)**(`_permissionDomainId`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_fromPot`, `_toPot`, `_amount`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_fromChildSkillIndex

`BigNumberish`

The child index in `_permissionDomainId` where we can find the domain for `_fromPotId`

##### \_toChildSkillIndex

`BigNumberish`

The child index in `_permissionDomainId` where we can find the domain for `_toPotId`

##### \_fromPot

`BigNumberish`

Funding pot id providing the funds

##### \_toPot

`BigNumberish`

Funding pot id receiving the funds

##### \_amount

`BigNumberish`

Amount of funds

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Deprecated Move

a given amount: `_amount` of `_token` funds from funding pot with id `_fromPot` to one with id `_toPot`.

#### Inherited from

`AugmentedIColony.moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)`

***

### moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)()

> **moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)**(`_permissionDomainId`, `_childSkillIndex`, `_domainId`, `_fromChildSkillIndex`, `_toChildSkillIndex`, `_fromPot`, `_toPot`, `_amount`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

Move a given amount: `_amount` of `_token` funds from funding pot with id `_fromPot` to one with id `_toPot`.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The child index in _permissionDomainId where I will be taking this action

##### \_domainId

`BigNumberish`

The domain where I am taking this action, pointed to by _permissionDomainId and _childSkillIndex

##### \_fromChildSkillIndex

`BigNumberish`

In the array of child skills for the skill associated with the domain pointed to by _permissionDomainId + _childSkillIndex,         the index of the skill associated with the domain that contains _fromPot

##### \_toChildSkillIndex

`BigNumberish`

The same, but for the _toPot which the funds are being moved to

##### \_fromPot

`BigNumberish`

Funding pot id providing the funds

##### \_toPot

`BigNumberish`

Funding pot id receiving the funds

##### \_amount

`BigNumberish`

Amount of funds

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)`

***

### ~~moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,address)()~~

> **moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,address)**(`_fromPot`, `_toPot`, `_amount`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_fromPot

`BigNumberish`

Funding pot id providing the funds

##### \_toPot

`BigNumberish`

Funding pot id receiving the funds

##### \_amount

`BigNumberish`

Amount of funds

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Deprecated

Same as ["moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,address)"](ColonyClientV13.md#movefundsbetweenpots(uint256,uint256,uint256,uint256,uint256,uint256,address)), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Inherited from

`MoveFundsBetweenPotsAugmentsB.moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,address)`

***

### moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)()

> **moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)**(`_domainId`, `_fromPot`, `_toPot`, `_amount`, `_token`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as ["moveFundsBetweenPots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)"](ColonyClientV13.md#movefundsbetweenpots(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_domainId

`BigNumberish`

The domain where I am taking this action, pointed to by _permissionDomainId and _childSkillIndex

##### \_fromPot

`BigNumberish`

Funding pot id providing the funds

##### \_toPot

`BigNumberish`

Funding pot id receiving the funds

##### \_amount

`BigNumberish`

Amount of funds

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`MoveFundsBetweenPotsAugmentsB.moveFundsBetweenPotsWithProofs(uint256,uint256,uint256,uint256,address)`

***

### multicall()

> **multicall**(`data`, `overrides`?): `Promise`\<`ContractTransaction`\>

The `msg.value` should not be trusted for any method callable from multicall.
Call multiple functions in the current contract and return the data from all of them if they all succeed

#### Parameters

##### data

`BytesLike`[]

The encoded function data for each of the calls to make to this contract

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.multicall`

***

### multicall(bytes\[\])()

> **multicall(bytes\[\])**(`data`, `overrides`?): `Promise`\<`ContractTransaction`\>

The `msg.value` should not be trusted for any method callable from multicall.
Call multiple functions in the current contract and return the data from all of them if they all succeed

#### Parameters

##### data

`BytesLike`[]

The encoded function data for each of the calls to make to this contract

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.multicall(bytes[])`

***

### numRecoveryRoles()

> **numRecoveryRoles**(`overrides`?): `Promise`\<`BigNumber`\>

Return number of recovery roles.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.numRecoveryRoles`

***

### numRecoveryRoles()()

> **numRecoveryRoles()**(`overrides`?): `Promise`\<`BigNumber`\>

Return number of recovery roles.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.numRecoveryRoles()`

***

### obligateStake()

> **obligateStake**(`_user`, `_domainId`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Obligate the user some amount of tokens as a stake.

#### Parameters

##### \_user

`string`

Address of the account we are obligating.

##### \_domainId

`BigNumberish`

Domain in which we are obligating the user.

##### \_amount

`BigNumberish`

Amount of internal token we are obligating.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.obligateStake`

***

### obligateStake(address,uint256,uint256)()

> **obligateStake(address,uint256,uint256)**(`_user`, `_domainId`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Obligate the user some amount of tokens as a stake.

#### Parameters

##### \_user

`string`

Address of the account we are obligating.

##### \_domainId

`BigNumberish`

Domain in which we are obligating the user.

##### \_amount

`BigNumberish`

Amount of internal token we are obligating.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.obligateStake(address,uint256,uint256)`

***

### owner()

> **owner**(`overrides`?): `Promise`\<`string`\>

Used for testing.
Get the colony `owner` address. This should be address(0x0) at all times.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.owner`

***

### owner()()

> **owner()**(`overrides`?): `Promise`\<`string`\>

Used for testing.
Get the colony `owner` address. This should be address(0x0) at all times.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`AugmentedIColony.owner()`

***

### queryFilter()

> **queryFilter**\<`TEvent`\>(`event`, `fromBlockOrBlockhash`?, `toBlock`?): `Promise`\<`TEvent`[]\>

#### Type Parameters

• **TEvent** *extends* `TypedEvent`

#### Parameters

##### event

`TypedEventFilter`\<`TEvent`\>

##### fromBlockOrBlockhash?

`string` | `number`

##### toBlock?

`string` | `number`

#### Returns

`Promise`\<`TEvent`[]\>

#### Inherited from

`AugmentedIColony.queryFilter`

***

### registerColonyLabel()

> **registerColonyLabel**(`colonyName`, `orbitdb`, `overrides`?): `Promise`\<`ContractTransaction`\>

Register colony's ENS label.

#### Parameters

##### colonyName

`string`

The label to register.

##### orbitdb

`string`

The path of the orbitDB database associated with the colony name

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.registerColonyLabel`

***

### registerColonyLabel(string,string)()

> **registerColonyLabel(string,string)**(`colonyName`, `orbitdb`, `overrides`?): `Promise`\<`ContractTransaction`\>

Register colony's ENS label.

#### Parameters

##### colonyName

`string`

The label to register.

##### orbitdb

`string`

The path of the orbitDB database associated with the colony name

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.registerColonyLabel(string,string)`

***

### removeAllListeners()

#### Call Signature

> **removeAllListeners**\<`TEvent`\>(`eventFilter`): `this`

##### Type Parameters

• **TEvent** *extends* `TypedEvent`

##### Parameters

###### eventFilter

`TypedEventFilter`\<`TEvent`\>

##### Returns

`this`

##### Inherited from

`AugmentedIColony.removeAllListeners`

#### Call Signature

> **removeAllListeners**(`eventName`?): `this`

##### Parameters

###### eventName?

`string`

##### Returns

`this`

##### Inherited from

`AugmentedIColony.removeAllListeners`

***

### removeRecoveryRole()

> **removeRecoveryRole**(`_user`, `overrides`?): `Promise`\<`ContractTransaction`\>

Remove colony recovery role. Can only be called by root role.

#### Parameters

##### \_user

`string`

User we want to remove recovery role from

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.removeRecoveryRole`

***

### removeRecoveryRole(address)()

> **removeRecoveryRole(address)**(`_user`, `overrides`?): `Promise`\<`ContractTransaction`\>

Remove colony recovery role. Can only be called by root role.

#### Parameters

##### \_user

`string`

User we want to remove recovery role from

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.removeRecoveryRole(address)`

***

### removeTaskEvaluatorRole()

> **removeTaskEvaluatorRole**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Removing evaluator role. Agreed between manager and currently assigned evaluator.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.removeTaskEvaluatorRole`

***

### removeTaskEvaluatorRole(uint256)()

> **removeTaskEvaluatorRole(uint256)**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Removing evaluator role. Agreed between manager and currently assigned evaluator.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.removeTaskEvaluatorRole(uint256)`

***

### removeTaskWorkerRole()

> **removeTaskWorkerRole**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Removing worker role. Agreed between manager and currently assigned worker.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.removeTaskWorkerRole`

***

### removeTaskWorkerRole(uint256)()

> **removeTaskWorkerRole(uint256)**(`_id`, `overrides`?): `Promise`\<`ContractTransaction`\>

Removing worker role. Agreed between manager and currently assigned worker.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.removeTaskWorkerRole(uint256)`

***

### revealTaskWorkRating()

> **revealTaskWorkRating**(`_id`, `_role`, `_rating`, `_salt`, `overrides`?): `Promise`\<`ContractTransaction`\>

Compares the `keccak256(_salt, _rating)` output with the previously submitted rating secret and if they match, sets the task role properties `rated` to `true` and `rating` to `_rating`.
Reveal the secret rating submitted in `IColony.submitTaskWorkRating` for task `_id` and task role with id `_role`. Allowed within 5 days period starting which whichever is first from either both rating secrets being submitted (via `IColony.submitTaskWorkRating`) or the 5 day rating period expiring.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_role

`BigNumberish`

Id of the role, as defined in TaskRole enum

##### \_rating

`BigNumberish`

0-50 rating score (in increments of 10, .e.g 0, 10, 20, 30, 40 or 50)

##### \_salt

`BytesLike`

Salt value used to generate the rating secret

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.revealTaskWorkRating`

***

### revealTaskWorkRating(uint256,uint8,uint8,bytes32)()

> **revealTaskWorkRating(uint256,uint8,uint8,bytes32)**(`_id`, `_role`, `_rating`, `_salt`, `overrides`?): `Promise`\<`ContractTransaction`\>

Compares the `keccak256(_salt, _rating)` output with the previously submitted rating secret and if they match, sets the task role properties `rated` to `true` and `rating` to `_rating`.
Reveal the secret rating submitted in `IColony.submitTaskWorkRating` for task `_id` and task role with id `_role`. Allowed within 5 days period starting which whichever is first from either both rating secrets being submitted (via `IColony.submitTaskWorkRating`) or the 5 day rating period expiring.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_role

`BigNumberish`

Id of the role, as defined in TaskRole enum

##### \_rating

`BigNumberish`

0-50 rating score (in increments of 10, .e.g 0, 10, 20, 30, 40 or 50)

##### \_salt

`BytesLike`

Salt value used to generate the rating secret

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.revealTaskWorkRating(uint256,uint8,uint8,bytes32)`

***

### setAdministrationRole()

> **setAdministrationRole**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set new colony admin role. Can be called by root role or architecture role.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

Domain in which the caller has root/architecture role

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_user

`string`

User we want to give an admin role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setAdministrationRole`

***

### setAdministrationRole(uint256,uint256,address,uint256,bool)()

> **setAdministrationRole(uint256,uint256,address,uint256,bool)**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set new colony admin role. Can be called by root role or architecture role.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

Domain in which the caller has root/architecture role

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_user

`string`

User we want to give an admin role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setAdministrationRole(uint256,uint256,address,uint256,bool)`

***

### setAdministrationRoleWithProofs()

> **setAdministrationRoleWithProofs**(`_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [setAdministrationRole](ColonyClientV13.md#setadministrationrole), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_user

`string`

User we want to give an admin role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setAdministrationRoleWithProofs`

***

### setAllTaskPayouts()

> **setAllTaskPayouts**(`_id`, `_token`, `_managerAmount`, `_evaluatorAmount`, `_workerAmount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Can only call if evaluator and worker are unassigned or manager, otherwise need signature.
Set `_token` payout for all roles in task `_id` to the respective amounts.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_managerAmount

`BigNumberish`

Payout amount for manager

##### \_evaluatorAmount

`BigNumberish`

Payout amount for evaluator

##### \_workerAmount

`BigNumberish`

Payout amount for worker

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setAllTaskPayouts`

***

### setAllTaskPayouts(uint256,address,uint256,uint256,uint256)()

> **setAllTaskPayouts(uint256,address,uint256,uint256,uint256)**(`_id`, `_token`, `_managerAmount`, `_evaluatorAmount`, `_workerAmount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Can only call if evaluator and worker are unassigned or manager, otherwise need signature.
Set `_token` payout for all roles in task `_id` to the respective amounts.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_managerAmount

`BigNumberish`

Payout amount for manager

##### \_evaluatorAmount

`BigNumberish`

Payout amount for evaluator

##### \_workerAmount

`BigNumberish`

Payout amount for worker

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setAllTaskPayouts(uint256,address,uint256,uint256,uint256)`

***

### setArbitrationRole()

> **setArbitrationRole**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set new colony arbitration role. Can be called by root role or architecture role.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

Domain in which the caller has root role

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_user

`string`

User we want to give an arbitration role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setArbitrationRole`

***

### setArbitrationRole(uint256,uint256,address,uint256,bool)()

> **setArbitrationRole(uint256,uint256,address,uint256,bool)**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set new colony arbitration role. Can be called by root role or architecture role.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

Domain in which the caller has root role

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_user

`string`

User we want to give an arbitration role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setArbitrationRole(uint256,uint256,address,uint256,bool)`

***

### setArbitrationRoleWithProofs()

> **setArbitrationRoleWithProofs**(`_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [setArbitrationRole](ColonyClientV13.md#setarbitrationrole), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_user

`string`

User we want to give an arbitration role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV3.setArbitrationRoleWithProofs`

***

### setArchitectureRole()

> **setArchitectureRole**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set new colony architecture role. Can be called by root role or architecture role.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

Domain in which the caller has root/architecture role

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_user

`string`

User we want to give an architecture role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setArchitectureRole`

***

### setArchitectureRole(uint256,uint256,address,uint256,bool)()

> **setArchitectureRole(uint256,uint256,address,uint256,bool)**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set new colony architecture role. Can be called by root role or architecture role.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

Domain in which the caller has root/architecture role

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_user

`string`

User we want to give an architecture role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setArchitectureRole(uint256,uint256,address,uint256,bool)`

***

### setArchitectureRoleWithProofs()

> **setArchitectureRoleWithProofs**(`_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [setArchitectureRole](ColonyClientV13.md#setarchitecturerole), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_user

`string`

User we want to give an architecture role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setArchitectureRoleWithProofs`

***

### setDefaultGlobalClaimDelay()

> **setDefaultGlobalClaimDelay**(`_globalClaimDelay`, `overrides`?): `Promise`\<`ContractTransaction`\>

Update the default global claim delay for expenditures

#### Parameters

##### \_globalClaimDelay

`BigNumberish`

The new default global claim delay

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setDefaultGlobalClaimDelay`

***

### setDefaultGlobalClaimDelay(uint256)()

> **setDefaultGlobalClaimDelay(uint256)**(`_globalClaimDelay`, `overrides`?): `Promise`\<`ContractTransaction`\>

Update the default global claim delay for expenditures

#### Parameters

##### \_globalClaimDelay

`BigNumberish`

The new default global claim delay

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setDefaultGlobalClaimDelay(uint256)`

***

### setExpenditureClaimDelay()

> **setExpenditureClaimDelay**(`_id`, `_slot`, `_claimDelay`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_slot

`BigNumberish`

Number of the slot

##### \_claimDelay

`BigNumberish`

Duration of time (in seconds) to delay

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Deprecated Sets

the claim delay on an expenditure slot. Can only be called by expenditure owner.

#### Inherited from

`AugmentedIColony.setExpenditureClaimDelay`

***

### setExpenditureClaimDelay(uint256,uint256,uint256)()

> **setExpenditureClaimDelay(uint256,uint256,uint256)**(`_id`, `_slot`, `_claimDelay`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_slot

`BigNumberish`

Number of the slot

##### \_claimDelay

`BigNumberish`

Duration of time (in seconds) to delay

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Deprecated Sets

the claim delay on an expenditure slot. Can only be called by expenditure owner.

#### Inherited from

`AugmentedIColony.setExpenditureClaimDelay(uint256,uint256,uint256)`

***

### setExpenditureClaimDelays()

> **setExpenditureClaimDelays**(`_id`, `_slots`, `_claimDelays`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets the claim delays in given expenditure slots. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_slots

`BigNumberish`[]

Array of slots to set claim delays

##### \_claimDelays

`BigNumberish`[]

Durations of time (in seconds) to delay

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureClaimDelays`

***

### setExpenditureClaimDelays(uint256,uint256\[\],uint256\[\])()

> **setExpenditureClaimDelays(uint256,uint256\[\],uint256\[\])**(`_id`, `_slots`, `_claimDelays`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets the claim delays in given expenditure slots. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_slots

`BigNumberish`[]

Array of slots to set claim delays

##### \_claimDelays

`BigNumberish`[]

Durations of time (in seconds) to delay

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureClaimDelays(uint256,uint256[],uint256[])`

***

### setExpenditureMetadata(uint256,string)()

> **setExpenditureMetadata(uint256,string)**(`_id`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

Can only be called while expenditure is in draft state.
Sets the metadata for an expenditure. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Id of the expenditure

##### \_metadata

`string`

IPFS hash of the metadata

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureMetadata(uint256,string)`

***

### setExpenditureMetadata(uint256,uint256,uint256,string)()

> **setExpenditureMetadata(uint256,uint256,uint256,string)**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_metadata`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets the metadata for an expenditure. Can only be called by Arbitration role.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`,

##### \_id

`BigNumberish`

Id of the expenditure

##### \_metadata

`string`

IPFS hash of the metadata

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureMetadata(uint256,uint256,uint256,string)`

***

### setExpenditurePayout(uint256,uint256,address,uint256)()

> **setExpenditurePayout(uint256,uint256,address,uint256)**(`_id`, `_slot`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Can only be called while expenditure is in draft state.

#### Parameters

##### \_id

`BigNumberish`

Id of the expenditure

##### \_slot

`BigNumberish`

Number of the slot

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_amount

`BigNumberish`

Payout amount

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Deprecated Set

the token payout on an expenditure slot. Can only be called by expenditure owner.

#### Inherited from

`AugmentedIColony.setExpenditurePayout(uint256,uint256,address,uint256)`

***

### setExpenditurePayout(uint256,uint256,uint256,uint256,address,uint256)()

> **setExpenditurePayout(uint256,uint256,uint256,uint256,address,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_slot`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set the token payout in a given expenditure slot. Can only be called by an Arbitration user.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_id

`BigNumberish`

Id of the expenditure

##### \_slot

`BigNumberish`

The slot to set the payout

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_amount

`BigNumberish`

Payout amount

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditurePayout(uint256,uint256,uint256,uint256,address,uint256)`

***

### setExpenditurePayoutModifiers()

> **setExpenditurePayoutModifiers**(`_id`, `_slots`, `_payoutModifiers`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets the payout modifiers in given expenditure slots. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_slots

`BigNumberish`[]

Array of slots to set payout modifiers

##### \_payoutModifiers

`BigNumberish`[]

Values (between +/- WAD) to modify the payout & reputation bonus

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditurePayoutModifiers`

***

### setExpenditurePayoutModifiers(uint256,uint256\[\],int256\[\])()

> **setExpenditurePayoutModifiers(uint256,uint256\[\],int256\[\])**(`_id`, `_slots`, `_payoutModifiers`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets the payout modifiers in given expenditure slots. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_slots

`BigNumberish`[]

Array of slots to set payout modifiers

##### \_payoutModifiers

`BigNumberish`[]

Values (between +/- WAD) to modify the payout & reputation bonus

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditurePayoutModifiers(uint256,uint256[],int256[])`

***

### setExpenditurePayouts()

> **setExpenditurePayouts**(`_id`, `_slots`, `_token`, `_amounts`, `overrides`?): `Promise`\<`ContractTransaction`\>

Can only be called while expenditure is in draft state.
Set the token payouts in given expenditure slots. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Id of the expenditure

##### \_slots

`BigNumberish`[]

Array of slots to set payouts

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_amounts

`BigNumberish`[]

Payout amounts

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditurePayouts`

***

### setExpenditurePayouts(uint256,uint256\[\],address,uint256\[\])()

> **setExpenditurePayouts(uint256,uint256\[\],address,uint256\[\])**(`_id`, `_slots`, `_token`, `_amounts`, `overrides`?): `Promise`\<`ContractTransaction`\>

Can only be called while expenditure is in draft state.
Set the token payouts in given expenditure slots. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Id of the expenditure

##### \_slots

`BigNumberish`[]

Array of slots to set payouts

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_amounts

`BigNumberish`[]

Payout amounts

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditurePayouts(uint256,uint256[],address,uint256[])`

***

### setExpenditurePayoutWithProofs()

> **setExpenditurePayoutWithProofs**(`_id`, `_slot`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as the permissioned overload of ["setExpenditurePayout(uint256,uint256,uint256,uint256,address,uint256)"](ColonyClientV13.md#setexpenditurepayout(uint256,uint256,uint256,uint256,address,uint256)), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

Id of the expenditure

##### \_slot

`BigNumberish`

Number of the slot

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_amount

`BigNumberish`

Payout amount

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV7.setExpenditurePayoutWithProofs`

***

### setExpenditureRecipient()

> **setExpenditureRecipient**(`_id`, `_slot`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

Can only be called while expenditure is in draft state.

#### Parameters

##### \_id

`BigNumberish`

Id of the expenditure

##### \_slot

`BigNumberish`

Slot for the recipient address

##### \_recipient

`string`

Address of the recipient

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Deprecated Sets

the recipient on an expenditure slot. Can only be called by expenditure owner.

#### Inherited from

`AugmentedIColony.setExpenditureRecipient`

***

### setExpenditureRecipient(uint256,uint256,address)()

> **setExpenditureRecipient(uint256,uint256,address)**(`_id`, `_slot`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

Can only be called while expenditure is in draft state.

#### Parameters

##### \_id

`BigNumberish`

Id of the expenditure

##### \_slot

`BigNumberish`

Slot for the recipient address

##### \_recipient

`string`

Address of the recipient

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Deprecated Sets

the recipient on an expenditure slot. Can only be called by expenditure owner.

#### Inherited from

`AugmentedIColony.setExpenditureRecipient(uint256,uint256,address)`

***

### setExpenditureRecipients()

> **setExpenditureRecipients**(`_id`, `_slots`, `_recipients`, `overrides`?): `Promise`\<`ContractTransaction`\>

Can only be called while expenditure is in draft state.
Sets the recipients in given expenditure slots. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Id of the expenditure

##### \_slots

`BigNumberish`[]

Array of slots to set recipients

##### \_recipients

`string`[]

Addresses of the recipients

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureRecipients`

***

### setExpenditureRecipients(uint256,uint256\[\],address\[\])()

> **setExpenditureRecipients(uint256,uint256\[\],address\[\])**(`_id`, `_slots`, `_recipients`, `overrides`?): `Promise`\<`ContractTransaction`\>

Can only be called while expenditure is in draft state.
Sets the recipients in given expenditure slots. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Id of the expenditure

##### \_slots

`BigNumberish`[]

Array of slots to set recipients

##### \_recipients

`string`[]

Addresses of the recipients

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureRecipients(uint256,uint256[],address[])`

***

### setExpenditureSkill()

> **setExpenditureSkill**(`_id`, `_slot`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_slot

`BigNumberish`

Number of the slot

##### \_skillId

`BigNumberish`

Id of the new skill to set

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Deprecated Sets

the skill on an expenditure slot. Can only be called by expenditure owner.

#### Inherited from

`AugmentedIColony.setExpenditureSkill`

***

### setExpenditureSkill(uint256,uint256,uint256)()

> **setExpenditureSkill(uint256,uint256,uint256)**(`_id`, `_slot`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_slot

`BigNumberish`

Number of the slot

##### \_skillId

`BigNumberish`

Id of the new skill to set

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Deprecated Sets

the skill on an expenditure slot. Can only be called by expenditure owner.

#### Inherited from

`AugmentedIColony.setExpenditureSkill(uint256,uint256,uint256)`

***

### setExpenditureSkills()

> **setExpenditureSkills**(`_id`, `_slots`, `_skillIds`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets the skill on an expenditure slot. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_slots

`BigNumberish`[]

Array of slots to set skills

##### \_skillIds

`BigNumberish`[]

Ids of the new skills to set

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureSkills`

***

### setExpenditureSkills(uint256,uint256\[\],uint256\[\])()

> **setExpenditureSkills(uint256,uint256\[\],uint256\[\])**(`_id`, `_slots`, `_skillIds`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets the skill on an expenditure slot. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_slots

`BigNumberish`[]

Array of slots to set skills

##### \_skillIds

`BigNumberish`[]

Ids of the new skills to set

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureSkills(uint256,uint256[],uint256[])`

***

### setExpenditureState()

> **setExpenditureState**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_storageSlot`, `_mask`, `_keys`, `_value`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set arbitrary state on an expenditure slot. Can only be called by Arbitration role.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`)

##### \_id

`BigNumberish`

Expenditure identifier

##### \_storageSlot

`BigNumberish`

Number of the top-level storage slot (25, 26, or 27)

##### \_mask

`boolean`[]

Array of booleans indicated whether a key is a mapping (F) or an array index (T).

##### \_keys

`BytesLike`[]

Array of additional keys (for mappings & arrays)

##### \_value

`BytesLike`

Value to set at location

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureState`

***

### setExpenditureState(uint256,uint256,uint256,uint256,bool\[\],bytes32\[\],bytes32)()

> **setExpenditureState(uint256,uint256,uint256,uint256,bool\[\],bytes32\[\],bytes32)**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_storageSlot`, `_mask`, `_keys`, `_value`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set arbitrary state on an expenditure slot. Can only be called by Arbitration role.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`)

##### \_id

`BigNumberish`

Expenditure identifier

##### \_storageSlot

`BigNumberish`

Number of the top-level storage slot (25, 26, or 27)

##### \_mask

`boolean`[]

Array of booleans indicated whether a key is a mapping (F) or an array index (T).

##### \_keys

`BytesLike`[]

Array of additional keys (for mappings & arrays)

##### \_value

`BytesLike`

Value to set at location

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureState(uint256,uint256,uint256,uint256,bool[],bytes32[],bytes32)`

***

### setExpenditureStateWithProofs()

> **setExpenditureStateWithProofs**(`_id`, `_storageSlot`, `_mask`, `_keys`, `_value`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [editDomain](ColonyClientV13.md#editdomain), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_storageSlot

`BigNumberish`

Number of the top-level storage slot (25, 26, or 27)

##### \_mask

`boolean`[]

Array of booleans indicated whether a key is a mapping (F) or an array index (T).

##### \_keys

`BytesLike`[]

Array of additional keys (for mappings & arrays)

##### \_value

`BytesLike`

Value to set at location

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV5.setExpenditureStateWithProofs`

***

### setExpenditureValues()

> **setExpenditureValues**(`_id`, `_recipientSlots`, `_recipients`, `_skillIdSlots`, `_skillIds`, `_claimDelaySlots`, `_claimDelays`, `_payoutModifierSlots`, `_payoutModifiers`, `_payoutTokens`, `_payoutSlots`, `_payoutValues`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set many values of an expenditure simultaneously. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_recipientSlots

`BigNumberish`[]

Array of slots to set recipients

##### \_recipients

`string`[]

Addresses of the recipients

##### \_skillIdSlots

`BigNumberish`[]

Array of slots to set skills

##### \_skillIds

`BigNumberish`[]

Ids of the new skills to set

##### \_claimDelaySlots

`BigNumberish`[]

Array of slots to set claim delays

##### \_claimDelays

`BigNumberish`[]

Durations of time (in seconds) to delay

##### \_payoutModifierSlots

`BigNumberish`[]

Array of slots to set payout modifiers

##### \_payoutModifiers

`BigNumberish`[]

Values (between +/- WAD) to modify the payout & reputation bonus

##### \_payoutTokens

`string`[]

Addresses of the tokens, `0x0` value indicates Ether

##### \_payoutSlots

`BigNumberish`[][]

2-dimensional array of slots to set payouts

##### \_payoutValues

`BigNumberish`[][]

2-dimensional array of the payout amounts

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureValues`

***

### setExpenditureValues(uint256,uint256\[\],address\[\],uint256\[\],uint256\[\],uint256\[\],uint256\[\],uint256\[\],int256\[\],address\[\],uint256\[\]\[\],uint256\[\]\[\])()

> **setExpenditureValues(uint256,uint256\[\],address\[\],uint256\[\],uint256\[\],uint256\[\],uint256\[\],uint256\[\],int256\[\],address\[\],uint256\[\]\[\],uint256\[\]\[\])**(`_id`, `_recipientSlots`, `_recipients`, `_skillIdSlots`, `_skillIds`, `_claimDelaySlots`, `_claimDelays`, `_payoutModifierSlots`, `_payoutModifiers`, `_payoutTokens`, `_payoutSlots`, `_payoutValues`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set many values of an expenditure simultaneously. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_recipientSlots

`BigNumberish`[]

Array of slots to set recipients

##### \_recipients

`string`[]

Addresses of the recipients

##### \_skillIdSlots

`BigNumberish`[]

Array of slots to set skills

##### \_skillIds

`BigNumberish`[]

Ids of the new skills to set

##### \_claimDelaySlots

`BigNumberish`[]

Array of slots to set claim delays

##### \_claimDelays

`BigNumberish`[]

Durations of time (in seconds) to delay

##### \_payoutModifierSlots

`BigNumberish`[]

Array of slots to set payout modifiers

##### \_payoutModifiers

`BigNumberish`[]

Values (between +/- WAD) to modify the payout & reputation bonus

##### \_payoutTokens

`string`[]

Addresses of the tokens, `0x0` value indicates Ether

##### \_payoutSlots

`BigNumberish`[][]

2-dimensional array of slots to set payouts

##### \_payoutValues

`BigNumberish`[][]

2-dimensional array of the payout amounts

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setExpenditureValues(uint256,uint256[],address[],uint256[],uint256[],uint256[],uint256[],uint256[],int256[],address[],uint256[][],uint256[][])`

***

### setFundingRole()

> **setFundingRole**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set new colony funding role. Can be called by root role or architecture role.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

Domain in which the caller has root/architecture role

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_user

`string`

User we want to give an funding role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setFundingRole`

***

### setFundingRole(uint256,uint256,address,uint256,bool)()

> **setFundingRole(uint256,uint256,address,uint256,bool)**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set new colony funding role. Can be called by root role or architecture role.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

Domain in which the caller has root/architecture role

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_user

`string`

User we want to give an funding role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setFundingRole(uint256,uint256,address,uint256,bool)`

***

### setFundingRoleWithProofs()

> **setFundingRoleWithProofs**(`_user`, `_domainId`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [setFundingRole](ColonyClientV13.md#setfundingrole), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_user

`string`

User we want to give an funding role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setFundingRoleWithProofs`

***

### setPaymentPayout()

> **setPaymentPayout**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets the payout for a given token on an existing payment. Secured function to authorised members.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_id

`BigNumberish`

Payment identifier

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_amount

`BigNumberish`

Payout amount

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setPaymentPayout`

***

### setPaymentPayout(uint256,uint256,uint256,address,uint256)()

> **setPaymentPayout(uint256,uint256,uint256,address,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets the payout for a given token on an existing payment. Secured function to authorised members.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_id

`BigNumberish`

Payment identifier

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_amount

`BigNumberish`

Payout amount

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setPaymentPayout(uint256,uint256,uint256,address,uint256)`

***

### setPaymentPayoutWithProofs()

> **setPaymentPayoutWithProofs**(`_id`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [setPaymentPayout](ColonyClientV13.md#setpaymentpayout), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

Payment identifier

##### \_token

`BigNumberish`

Address of the token, `0x0` value indicates Ether

##### \_amount

`BigNumberish`

Payout amount

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setPaymentPayoutWithProofs`

***

### setPaymentRecipient()

> **setPaymentRecipient**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets the recipient on an existing payment. Secured function to authorised members.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_id

`BigNumberish`

Payment identifier

##### \_recipient

`string`

Address of the payment recipient

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setPaymentRecipient`

***

### setPaymentRecipient(uint256,uint256,uint256,address)()

> **setPaymentRecipient(uint256,uint256,uint256,address)**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets the recipient on an existing payment. Secured function to authorised members.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_id

`BigNumberish`

Payment identifier

##### \_recipient

`string`

Address of the payment recipient

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setPaymentRecipient(uint256,uint256,uint256,address)`

***

### setPaymentRecipientWithProofs()

> **setPaymentRecipientWithProofs**(`_id`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [setPaymentRecipient](ColonyClientV13.md#setpaymentrecipient), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

Payment identifier

##### \_recipient

`string`

Address of the payment recipient

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setPaymentRecipientWithProofs`

***

### setPaymentSkill()

> **setPaymentSkill**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets the skill on an existing payment. Secured function to authorised members.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_id

`BigNumberish`

Payment identifier

##### \_skillId

`BigNumberish`

Id of the new skill to set

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setPaymentSkill`

***

### setPaymentSkill(uint256,uint256,uint256,uint256)()

> **setPaymentSkill(uint256,uint256,uint256,uint256)**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Sets the skill on an existing payment. Secured function to authorised members.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_id

`BigNumberish`

Payment identifier

##### \_skillId

`BigNumberish`

Id of the new skill to set

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setPaymentSkill(uint256,uint256,uint256,uint256)`

***

### setPaymentSkillWithProofs()

> **setPaymentSkillWithProofs**(`_id`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [setPaymentSkill](ColonyClientV13.md#setpaymentskill), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_id

`BigNumberish`

Payment identifier

##### \_skillId

`BigNumberish`

Id of the new skill to set

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setPaymentSkillWithProofs`

***

### setRecoveryRole()

> **setRecoveryRole**(`_user`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set new colony recovery role. Can be called by root.

#### Parameters

##### \_user

`string`

User we want to give a recovery role to

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setRecoveryRole`

***

### setRecoveryRole(address)()

> **setRecoveryRole(address)**(`_user`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set new colony recovery role. Can be called by root.

#### Parameters

##### \_user

`string`

User we want to give a recovery role to

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setRecoveryRole(address)`

***

### setRewardInverse()

> **setRewardInverse**(`_rewardInverse`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set the reward inverse to pay out from revenue. e.g. if the fee is 1% (or 0.01), set 100.

#### Parameters

##### \_rewardInverse

`BigNumberish`

The inverse of the reward

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setRewardInverse`

***

### setRewardInverse(uint256)()

> **setRewardInverse(uint256)**(`_rewardInverse`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set the reward inverse to pay out from revenue. e.g. if the fee is 1% (or 0.01), set 100.

#### Parameters

##### \_rewardInverse

`BigNumberish`

The inverse of the reward

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setRewardInverse(uint256)`

***

### setRootRole()

> **setRootRole**(`_user`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set new colony root role. Can be called by root role only.

#### Parameters

##### \_user

`string`

User we want to give an root role to

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setRootRole`

***

### setRootRole(address,bool)()

> **setRootRole(address,bool)**(`_user`, `_setTo`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set new colony root role. Can be called by root role only.

#### Parameters

##### \_user

`string`

User we want to give an root role to

##### \_setTo

`boolean`

The state of the role permission (true assign the permission, false revokes it)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setRootRole(address,bool)`

***

### setStorageSlotRecovery()

> **setStorageSlotRecovery**(`_slot`, `_value`, `overrides`?): `Promise`\<`ContractTransaction`\>

certain critical variables are protected from editing in this function
Update value of arbitrary storage variable. Can only be called by user with recovery role.

#### Parameters

##### \_slot

`BigNumberish`

Uint address of storage slot to be updated

##### \_value

`BytesLike`

word of data to be set

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setStorageSlotRecovery`

***

### setStorageSlotRecovery(uint256,bytes32)()

> **setStorageSlotRecovery(uint256,bytes32)**(`_slot`, `_value`, `overrides`?): `Promise`\<`ContractTransaction`\>

certain critical variables are protected from editing in this function
Update value of arbitrary storage variable. Can only be called by user with recovery role.

#### Parameters

##### \_slot

`BigNumberish`

Uint address of storage slot to be updated

##### \_value

`BytesLike`

word of data to be set

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setStorageSlotRecovery(uint256,bytes32)`

***

### setTaskBrief()

> **setTaskBrief**(`_id`, `_specificationHash`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set the hash for the task brief, aka task work specification, which identifies the task brief content in ddb. Allowed before a task is finalized.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_specificationHash

`BytesLike`

Unique hash of the task brief in ddb

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskBrief`

***

### setTaskBrief(uint256,bytes32)()

> **setTaskBrief(uint256,bytes32)**(`_id`, `_specificationHash`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set the hash for the task brief, aka task work specification, which identifies the task brief content in ddb. Allowed before a task is finalized.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_specificationHash

`BytesLike`

Unique hash of the task brief in ddb

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskBrief(uint256,bytes32)`

***

### setTaskDueDate()

> **setTaskDueDate**(`_id`, `_dueDate`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set the due date on task `_id`. Allowed before a task is finalized.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_dueDate

`BigNumberish`

Due date as seconds since unix epoch

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskDueDate`

***

### setTaskDueDate(uint256,uint256)()

> **setTaskDueDate(uint256,uint256)**(`_id`, `_dueDate`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set the due date on task `_id`. Allowed before a task is finalized.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_dueDate

`BigNumberish`

Due date as seconds since unix epoch

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskDueDate(uint256,uint256)`

***

### setTaskEvaluatorPayout()

> **setTaskEvaluatorPayout**(`_id`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set `_token` payout for evaluator in task `_id` to `_amount`.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_amount

`BigNumberish`

Payout amount

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskEvaluatorPayout`

***

### setTaskEvaluatorPayout(uint256,address,uint256)()

> **setTaskEvaluatorPayout(uint256,address,uint256)**(`_id`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set `_token` payout for evaluator in task `_id` to `_amount`.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_amount

`BigNumberish`

Payout amount

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskEvaluatorPayout(uint256,address,uint256)`

***

### setTaskEvaluatorRole()

> **setTaskEvaluatorRole**(`_id`, `_user`, `overrides`?): `Promise`\<`ContractTransaction`\>

This function can only be called through `executeTaskRoleAssignment`.
Assigning evaluator role. Can only be set if there is no one currently assigned to be an evaluator. Manager of the task and user we want to assign role to both need to agree. Managers can assign themselves to this role, if there is no one currently assigned to it.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_user

`string`

Address of the user we want to give a evaluator role to

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskEvaluatorRole`

***

### setTaskEvaluatorRole(uint256,address)()

> **setTaskEvaluatorRole(uint256,address)**(`_id`, `_user`, `overrides`?): `Promise`\<`ContractTransaction`\>

This function can only be called through `executeTaskRoleAssignment`.
Assigning evaluator role. Can only be set if there is no one currently assigned to be an evaluator. Manager of the task and user we want to assign role to both need to agree. Managers can assign themselves to this role, if there is no one currently assigned to it.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_user

`string`

Address of the user we want to give a evaluator role to

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskEvaluatorRole(uint256,address)`

***

### setTaskManagerPayout()

> **setTaskManagerPayout**(`_id`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set `_token` payout for manager in task `_id` to `_amount`.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_amount

`BigNumberish`

Payout amount

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskManagerPayout`

***

### setTaskManagerPayout(uint256,address,uint256)()

> **setTaskManagerPayout(uint256,address,uint256)**(`_id`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set `_token` payout for manager in task `_id` to `_amount`.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_amount

`BigNumberish`

Payout amount

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskManagerPayout(uint256,address,uint256)`

***

### setTaskManagerRole()

> **setTaskManagerRole**(`_id`, `_user`, `_permissionDomainId`, `_childSkillIndex`, `overrides`?): `Promise`\<`ContractTransaction`\>

This function can only be called through `executeTaskRoleAssignment`.
Assigning manager role. Current manager and user we want to assign role to both need to agree. User we want to set here also needs to be an admin. Note that the domain proof data comes at the end here to not interfere with the assembly argument unpacking.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_user

`string`

Address of the user we want to give a manager role to

##### \_permissionDomainId

`BigNumberish`

The domain ID in which _user has the Administration permission

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskManagerRole`

***

### setTaskManagerRole(uint256,address,uint256,uint256)()

> **setTaskManagerRole(uint256,address,uint256,uint256)**(`_id`, `_user`, `_permissionDomainId`, `_childSkillIndex`, `overrides`?): `Promise`\<`ContractTransaction`\>

This function can only be called through `executeTaskRoleAssignment`.
Assigning manager role. Current manager and user we want to assign role to both need to agree. User we want to set here also needs to be an admin. Note that the domain proof data comes at the end here to not interfere with the assembly argument unpacking.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_user

`string`

Address of the user we want to give a manager role to

##### \_permissionDomainId

`BigNumberish`

The domain ID in which _user has the Administration permission

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskManagerRole(uint256,address,uint256,uint256)`

***

### setTaskSkill()

> **setTaskSkill**(`_id`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Currently we only allow one skill per task although we have provisioned for an array of skills in `Task` struct. Allowed before a task is finalized.
Set the skill for task `_id`.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_skillId

`BigNumberish`

Id of the skill which has to be a global skill

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskSkill`

***

### setTaskSkill(uint256,uint256)()

> **setTaskSkill(uint256,uint256)**(`_id`, `_skillId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Currently we only allow one skill per task although we have provisioned for an array of skills in `Task` struct. Allowed before a task is finalized.
Set the skill for task `_id`.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_skillId

`BigNumberish`

Id of the skill which has to be a global skill

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskSkill(uint256,uint256)`

***

### setTaskWorkerPayout()

> **setTaskWorkerPayout**(`_id`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set `_token` payout for worker in task `_id` to `_amount`.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_amount

`BigNumberish`

Payout amount

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskWorkerPayout`

***

### setTaskWorkerPayout(uint256,address,uint256)()

> **setTaskWorkerPayout(uint256,address,uint256)**(`_id`, `_token`, `_amount`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set `_token` payout for worker in task `_id` to `_amount`.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_token

`string`

Address of the token, `0x0` value indicates Ether

##### \_amount

`BigNumberish`

Payout amount

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskWorkerPayout(uint256,address,uint256)`

***

### setTaskWorkerRole()

> **setTaskWorkerRole**(`_id`, `_user`, `overrides`?): `Promise`\<`ContractTransaction`\>

This function can only be called through `executeTaskRoleAssignment`.
Assigning worker role. Can only be set if there is no one currently assigned to be a worker. Manager of the task and user we want to assign role to both need to agree.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_user

`string`

Address of the user we want to give a worker role to

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskWorkerRole`

***

### setTaskWorkerRole(uint256,address)()

> **setTaskWorkerRole(uint256,address)**(`_id`, `_user`, `overrides`?): `Promise`\<`ContractTransaction`\>

This function can only be called through `executeTaskRoleAssignment`.
Assigning worker role. Can only be set if there is no one currently assigned to be a worker. Manager of the task and user we want to assign role to both need to agree.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_user

`string`

Address of the user we want to give a worker role to

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setTaskWorkerRole(uint256,address)`

***

### setUserRoles()

> **setUserRoles**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_roles`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set several roles in one transaction. Can be called by root role or architecture role.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

Domain in which the caller has root/architecture role

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_user

`string`

User we want to give a role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_roles

`BytesLike`

Byte array representing the desired role setting (1 for on, 0 for off)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setUserRoles`

***

### setUserRoles(uint256,uint256,address,uint256,bytes32)()

> **setUserRoles(uint256,uint256,address,uint256,bytes32)**(`_permissionDomainId`, `_childSkillIndex`, `_user`, `_domainId`, `_roles`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set several roles in one transaction. Can be called by root role or architecture role.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

Domain in which the caller has root/architecture role

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`

##### \_user

`string`

User we want to give a role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_roles

`BytesLike`

Byte array representing the desired role setting (1 for on, 0 for off)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.setUserRoles(uint256,uint256,address,uint256,bytes32)`

***

### setUserRolesWithProofs()

> **setUserRolesWithProofs**(`_user`, `_domainId`, `_roles`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [setUserRoles](ColonyClientV13.md#setuserroles), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_user

`string`

User we want to give a role to

##### \_domainId

`BigNumberish`

Domain in which we are giving user the role

##### \_roles

`BytesLike`

Byte array representing the desired role setting (1 for on, 0 for off)

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV5.setUserRolesWithProofs`

***

### startNextRewardPayout()

> **startNextRewardPayout**(`_token`, `key`, `value`, `branchMask`, `siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

Start next reward payout for `_token`. All funds in the reward pot for `_token` will become unavailable.Add a new payment in the colony. Can only be called by users with root permission. All tokens will be locked, and can be unlocked by calling `waiveRewardPayout` or `claimRewardPayout`.

#### Parameters

##### \_token

`string`

Address of the token used for reward payout

##### key

`BytesLike`

Some Reputation hash tree key

##### value

`BytesLike`

Reputation value

##### branchMask

`BigNumberish`

The branchmask of the proof

##### siblings

`BytesLike`[]

The siblings of the proof

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.startNextRewardPayout`

***

### startNextRewardPayout(address,bytes,bytes,uint256,bytes32\[\])()

> **startNextRewardPayout(address,bytes,bytes,uint256,bytes32\[\])**(`_token`, `key`, `value`, `branchMask`, `siblings`, `overrides`?): `Promise`\<`ContractTransaction`\>

Start next reward payout for `_token`. All funds in the reward pot for `_token` will become unavailable.Add a new payment in the colony. Can only be called by users with root permission. All tokens will be locked, and can be unlocked by calling `waiveRewardPayout` or `claimRewardPayout`.

#### Parameters

##### \_token

`string`

Address of the token used for reward payout

##### key

`BytesLike`

Some Reputation hash tree key

##### value

`BytesLike`

Reputation value

##### branchMask

`BigNumberish`

The branchmask of the proof

##### siblings

`BytesLike`[]

The siblings of the proof

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.startNextRewardPayout(address,bytes,bytes,uint256,bytes32[])`

***

### submitTaskDeliverable()

> **submitTaskDeliverable**(`_id`, `_deliverableHash`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set the `task.deliverableHash` and `task.completionTimestamp` properties.
Submit the task deliverable, i.e. the output of the work performed for task `_id`. Submission is allowed only to the assigned worker before the task due date. Submissions cannot be overwritten.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_deliverableHash

`BytesLike`

Unique hash of the task deliverable content in ddb

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.submitTaskDeliverable`

***

### submitTaskDeliverable(uint256,bytes32)()

> **submitTaskDeliverable(uint256,bytes32)**(`_id`, `_deliverableHash`, `overrides`?): `Promise`\<`ContractTransaction`\>

Set the `task.deliverableHash` and `task.completionTimestamp` properties.
Submit the task deliverable, i.e. the output of the work performed for task `_id`. Submission is allowed only to the assigned worker before the task due date. Submissions cannot be overwritten.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_deliverableHash

`BytesLike`

Unique hash of the task deliverable content in ddb

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.submitTaskDeliverable(uint256,bytes32)`

***

### submitTaskDeliverableAndRating()

> **submitTaskDeliverableAndRating**(`_id`, `_deliverableHash`, `_ratingSecret`, `overrides`?): `Promise`\<`ContractTransaction`\>

Internally call `submitTaskDeliverable` and `submitTaskWorkRating` in sequence.
Submit the task deliverable for Worker and rating for Manager.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_deliverableHash

`BytesLike`

Unique hash of the task deliverable content in ddb

##### \_ratingSecret

`BytesLike`

Rating secret for manager

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.submitTaskDeliverableAndRating`

***

### submitTaskDeliverableAndRating(uint256,bytes32,bytes32)()

> **submitTaskDeliverableAndRating(uint256,bytes32,bytes32)**(`_id`, `_deliverableHash`, `_ratingSecret`, `overrides`?): `Promise`\<`ContractTransaction`\>

Internally call `submitTaskDeliverable` and `submitTaskWorkRating` in sequence.
Submit the task deliverable for Worker and rating for Manager.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_deliverableHash

`BytesLike`

Unique hash of the task deliverable content in ddb

##### \_ratingSecret

`BytesLike`

Rating secret for manager

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.submitTaskDeliverableAndRating(uint256,bytes32,bytes32)`

***

### submitTaskWorkRating()

> **submitTaskWorkRating**(`_id`, `_role`, `_ratingSecret`, `overrides`?): `Promise`\<`ContractTransaction`\>

Submit a hashed secret of the rating for work in task `_id` which was performed by user with task role id `_role`. Allowed within 5 days period starting which whichever is first from either the deliverable being submitted or the dueDate been reached. Allowed only for evaluator to rate worker and for worker to rate manager performance. Once submitted ratings can not be changed or overwritten.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_role

`BigNumberish`

Id of the role, as defined in TaskRole enum

##### \_ratingSecret

`BytesLike`

`keccak256` hash of a salt and 0-50 rating score (in increments of 10, .e.g 0, 10, 20, 30, 40 or 50). Can be generated via `IColony.generateSecret` helper function.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.submitTaskWorkRating`

***

### submitTaskWorkRating(uint256,uint8,bytes32)()

> **submitTaskWorkRating(uint256,uint8,bytes32)**(`_id`, `_role`, `_ratingSecret`, `overrides`?): `Promise`\<`ContractTransaction`\>

Submit a hashed secret of the rating for work in task `_id` which was performed by user with task role id `_role`. Allowed within 5 days period starting which whichever is first from either the deliverable being submitted or the dueDate been reached. Allowed only for evaluator to rate worker and for worker to rate manager performance. Once submitted ratings can not be changed or overwritten.

#### Parameters

##### \_id

`BigNumberish`

Id of the task

##### \_role

`BigNumberish`

Id of the role, as defined in TaskRole enum

##### \_ratingSecret

`BytesLike`

`keccak256` hash of a salt and 0-50 rating score (in increments of 10, .e.g 0, 10, 20, 30, 40 or 50). Can be generated via `IColony.generateSecret` helper function.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.submitTaskWorkRating(uint256,uint8,bytes32)`

***

### transferExpenditure()

> **transferExpenditure**(`_id`, `_newOwner`, `overrides`?): `Promise`\<`ContractTransaction`\>

Updates the expenditure owner. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_newOwner

`string`

New owner of expenditure

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.transferExpenditure`

***

### transferExpenditure(uint256,address)()

> **transferExpenditure(uint256,address)**(`_id`, `_newOwner`, `overrides`?): `Promise`\<`ContractTransaction`\>

Updates the expenditure owner. Can only be called by expenditure owner.

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_newOwner

`string`

New owner of expenditure

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.transferExpenditure(uint256,address)`

***

### transferExpenditureViaArbitration()

> **transferExpenditureViaArbitration**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_newOwner`, `overrides`?): `Promise`\<`ContractTransaction`\>

This is now deprecated and will be removed in a future version

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`)

##### \_id

`BigNumberish`

Expenditure identifier

##### \_newOwner

`string`

New owner of expenditure

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Deprecated Updates

the expenditure owner. Can only be called by Arbitration role.

#### Inherited from

`AugmentedIColony.transferExpenditureViaArbitration`

***

### transferExpenditureViaArbitration(uint256,uint256,uint256,address)()

> **transferExpenditureViaArbitration(uint256,uint256,uint256,address)**(`_permissionDomainId`, `_childSkillIndex`, `_id`, `_newOwner`, `overrides`?): `Promise`\<`ContractTransaction`\>

This is now deprecated and will be removed in a future version

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action

##### \_childSkillIndex

`BigNumberish`

The index that the `_domainId` is relative to `_permissionDomainId`, (only used if `_permissionDomainId` is different to `_domainId`)

##### \_id

`BigNumberish`

Expenditure identifier

##### \_newOwner

`string`

New owner of expenditure

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Deprecated Updates

the expenditure owner. Can only be called by Arbitration role.

#### Inherited from

`AugmentedIColony.transferExpenditureViaArbitration(uint256,uint256,uint256,address)`

***

### ~~transferExpenditureViaArbitrationWithProofs()~~

> **transferExpenditureViaArbitrationWithProofs**(`_id`, `_newOwner`, `overrides`?): `Promise`\<`ContractTransaction`\>

#### Parameters

##### \_id

`BigNumberish`

Expenditure identifier

##### \_newOwner

`string`

New owner of expenditure

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Deprecated

Same as [transferExpenditureViaArbitration](ColonyClientV13.md#transferexpenditureviaarbitration), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Inherited from

`ColonyAugmentsV4.transferExpenditureViaArbitrationWithProofs`

***

### transferStake()

> **transferStake**(`_permissionDomainId`, `_childSkillIndex`, `_obligator`, `_user`, `_domainId`, `_amount`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

Transfer some amount of obligated tokens. Can be called by the arbitration role.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action.

##### \_childSkillIndex

`BigNumberish`

The child index in `_permissionDomainId` where we can find `_domainId`.

##### \_obligator

`string`

Address of the account who set the obligation.

##### \_user

`string`

Address of the account we are transferring.

##### \_domainId

`BigNumberish`

Domain in which we are transferring the tokens.

##### \_amount

`BigNumberish`

Amount of internal token we are transferring.

##### \_recipient

`string`

Recipient of the transferred tokens.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.transferStake`

***

### transferStake(uint256,uint256,address,address,uint256,uint256,address)()

> **transferStake(uint256,uint256,address,address,uint256,uint256,address)**(`_permissionDomainId`, `_childSkillIndex`, `_obligator`, `_user`, `_domainId`, `_amount`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

Transfer some amount of obligated tokens. Can be called by the arbitration role.

#### Parameters

##### \_permissionDomainId

`BigNumberish`

The domainId in which I have the permission to take this action.

##### \_childSkillIndex

`BigNumberish`

The child index in `_permissionDomainId` where we can find `_domainId`.

##### \_obligator

`string`

Address of the account who set the obligation.

##### \_user

`string`

Address of the account we are transferring.

##### \_domainId

`BigNumberish`

Domain in which we are transferring the tokens.

##### \_amount

`BigNumberish`

Amount of internal token we are transferring.

##### \_recipient

`string`

Recipient of the transferred tokens.

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.transferStake(uint256,uint256,address,address,uint256,uint256,address)`

***

### transferStakeWithProofs()

> **transferStakeWithProofs**(`_obligator`, `_user`, `_domainId`, `_amount`, `_recipient`, `overrides`?): `Promise`\<`ContractTransaction`\>

Same as [transferStake](ColonyClientV13.md#transferstake), but let colonyJS figure out the permission proofs for you.
Always prefer this method, except when you have good reason not to.

#### Parameters

##### \_obligator

`string`

Address of the account who set the obligation.

##### \_user

`string`

Address of the account we are transferring.

##### \_domainId

`BigNumberish`

Domain in which we are transferring the tokens.

##### \_amount

`BigNumberish`

Amount of internal token we are transferring.

##### \_recipient

`string`

Recipient of the transferred tokens.

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV5.transferStakeWithProofs`

***

### uninstallExtension()

> **uninstallExtension**(`extensionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

This is a permanent action -- re-installing the extension will deploy a new contractIt is recommended to deprecate an extension before uninstalling to allow active objects to be resolved
Uninstall an extension from a colony. Secured function to authorised members.

#### Parameters

##### extensionId

`BytesLike`

keccak256 hash of the extension name, used as an indentifier

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.uninstallExtension`

***

### uninstallExtension(bytes32)()

> **uninstallExtension(bytes32)**(`extensionId`, `overrides`?): `Promise`\<`ContractTransaction`\>

This is a permanent action -- re-installing the extension will deploy a new contractIt is recommended to deprecate an extension before uninstalling to allow active objects to be resolved
Uninstall an extension from a colony. Secured function to authorised members.

#### Parameters

##### extensionId

`BytesLike`

keccak256 hash of the extension name, used as an indentifier

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.uninstallExtension(bytes32)`

***

### unlockToken()

> **unlockToken**(`overrides`?): `Promise`\<`ContractTransaction`\>

unlock the native colony token, if possible

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.unlockToken`

***

### unlockToken()()

> **unlockToken()**(`overrides`?): `Promise`\<`ContractTransaction`\>

unlock the native colony token, if possible

#### Parameters

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.unlockToken()`

***

### unlockTokenForUser()

> **unlockTokenForUser**(`user`, `lockId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Unlock the colony's token for a user. Can only be called by a network-managed extension.

#### Parameters

##### user

`string`

The user to unlock

##### lockId

`BigNumberish`

The specific lock to unlock

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.unlockTokenForUser`

***

### unlockTokenForUser(address,uint256)()

> **unlockTokenForUser(address,uint256)**(`user`, `lockId`, `overrides`?): `Promise`\<`ContractTransaction`\>

Unlock the colony's token for a user. Can only be called by a network-managed extension.

#### Parameters

##### user

`string`

The user to unlock

##### lockId

`BigNumberish`

The specific lock to unlock

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.unlockTokenForUser(address,uint256)`

***

### updateApprovalAmount()

> **updateApprovalAmount**(`token`, `spender`, `overrides`?): `Promise`\<`ContractTransaction`\>

Update the internal bookkeeping around external ERC20 approvals

#### Parameters

##### token

`string`

The address of the token which was approved

##### spender

`string`

The account we have approved

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.updateApprovalAmount`

***

### updateApprovalAmount(address,address)()

> **updateApprovalAmount(address,address)**(`token`, `spender`, `overrides`?): `Promise`\<`ContractTransaction`\>

Update the internal bookkeeping around external ERC20 approvals

#### Parameters

##### token

`string`

The address of the token which was approved

##### spender

`string`

The account we have approved

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.updateApprovalAmount(address,address)`

***

### updateColonyOrbitDB()

> **updateColonyOrbitDB**(`orbitdb`, `overrides`?): `Promise`\<`ContractTransaction`\>

Update a colony's orbitdb address. Can only be called by a colony with a registered subdomain

#### Parameters

##### orbitdb

`string`

The path of the orbitDB database to be associated with the colony

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.updateColonyOrbitDB`

***

### updateColonyOrbitDB(string)()

> **updateColonyOrbitDB(string)**(`orbitdb`, `overrides`?): `Promise`\<`ContractTransaction`\>

Update a colony's orbitdb address. Can only be called by a colony with a registered subdomain

#### Parameters

##### orbitdb

`string`

The path of the orbitDB database to be associated with the colony

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.updateColonyOrbitDB(string)`

***

### upgrade()

> **upgrade**(`_newVersion`, `overrides`?): `Promise`\<`ContractTransaction`\>

Downgrades are not allowed, i.e. `_newVersion` should be higher than the currect colony version.
Upgrades a colony to a new Colony contract version `_newVersion`.

#### Parameters

##### \_newVersion

`BigNumberish`

The target version for the upgrade

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.upgrade`

***

### upgrade(uint256)()

> **upgrade(uint256)**(`_newVersion`, `overrides`?): `Promise`\<`ContractTransaction`\>

Downgrades are not allowed, i.e. `_newVersion` should be higher than the currect colony version.
Upgrades a colony to a new Colony contract version `_newVersion`.

#### Parameters

##### \_newVersion

`BigNumberish`

The target version for the upgrade

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.upgrade(uint256)`

***

### upgradeExtension()

> **upgradeExtension**(`extensionId`, `newVersion`, `overrides`?): `Promise`\<`ContractTransaction`\>

Upgrade an extension in a colony. Secured function to authorised members.

#### Parameters

##### extensionId

`BytesLike`

keccak256 hash of the extension name, used as an indentifier

##### newVersion

`BigNumberish`

The version to upgrade to (must be one larger than the current version)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.upgradeExtension`

***

### upgradeExtension(bytes32,uint256)()

> **upgradeExtension(bytes32,uint256)**(`extensionId`, `newVersion`, `overrides`?): `Promise`\<`ContractTransaction`\>

Upgrade an extension in a colony. Secured function to authorised members.

#### Parameters

##### extensionId

`BytesLike`

keccak256 hash of the extension name, used as an indentifier

##### newVersion

`BigNumberish`

The version to upgrade to (must be one larger than the current version)

##### overrides?

`Overrides` & `object`

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`AugmentedIColony.upgradeExtension(bytes32,uint256)`

***

### upgradeExtensionChecked()

> **upgradeExtensionChecked**(`extension`, `newVersion`?, `overrides`?): `Promise`\<`ContractTransaction`\>

Similar to [upgradeExtension](ColonyClientV13.md#upgradeextension), but first check whether the desired extension can be upgraded to the desired version in this Colony
Always prefer this method, except when you have good reason not to.

#### Parameters

##### extension

[`Extension`](../enumerations/Extension.md)

A [Extension](../enumerations/Extension.md) name

##### newVersion?

`number`

The desired version number of the extension you wish to upgrade

##### overrides?

[`TxOverrides`](../type-aliases/TxOverrides.md)

#### Returns

`Promise`\<`ContractTransaction`\>

#### Inherited from

`ColonyAugmentsV5.upgradeExtensionChecked`

***

### userCanSetRoles()

> **userCanSetRoles**(`_user`, `_domainId`, `_childSkillIndex`, `_childDomainId`, `overrides`?): `Promise`\<`boolean`\>

Check whether a given user can modify roles in the target domain `_childDomainId`. Mostly a convenience function to provide a uniform interface for extension contracts validating permissions

#### Parameters

##### \_user

`string`

The user whose permissions we want to check

##### \_domainId

`BigNumberish`

Domain in which the caller has the role (currently Root or Architecture)

##### \_childSkillIndex

`BigNumberish`

The index that the `_childDomainId` is relative to `_domainId`

##### \_childDomainId

`BigNumberish`

The domain where we want to edit roles

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.userCanSetRoles`

***

### userCanSetRoles(address,uint256,uint256,uint256)()

> **userCanSetRoles(address,uint256,uint256,uint256)**(`_user`, `_domainId`, `_childSkillIndex`, `_childDomainId`, `overrides`?): `Promise`\<`boolean`\>

Check whether a given user can modify roles in the target domain `_childDomainId`. Mostly a convenience function to provide a uniform interface for extension contracts validating permissions

#### Parameters

##### \_user

`string`

The user whose permissions we want to check

##### \_domainId

`BigNumberish`

Domain in which the caller has the role (currently Root or Architecture)

##### \_childSkillIndex

`BigNumberish`

The index that the `_childDomainId` is relative to `_domainId`

##### \_childDomainId

`BigNumberish`

The domain where we want to edit roles

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.userCanSetRoles(address,uint256,uint256,uint256)`

***

### verifyReputationProof()

> **verifyReputationProof**(`key`, `value`, `branchMask`, `siblings`, `overrides`?): `Promise`\<`boolean`\>

For more detail about branchMask and siblings, examine the PatriciaTree implementation. While external, likely only to be used by the Colony contracts, as it checks that the user is proving their own reputation in the current colony. The `verifyProof` function can be used to verify any proof, though this function is not currently exposed on the Colony's EtherRouter.
Helper function that can be used by a client to verify the correctness of a patricia proof they have been supplied with.

#### Parameters

##### key

`BytesLike`

The key of the element the proof is for.

##### value

`BytesLike`

The value of the element that the proof is for.

##### branchMask

`BigNumberish`

The branchmask of the proof

##### siblings

`BytesLike`[]

The siblings of the proof

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.verifyReputationProof`

***

### verifyReputationProof(bytes,bytes,uint256,bytes32\[\])()

> **verifyReputationProof(bytes,bytes,uint256,bytes32\[\])**(`key`, `value`, `branchMask`, `siblings`, `overrides`?): `Promise`\<`boolean`\>

For more detail about branchMask and siblings, examine the PatriciaTree implementation. While external, likely only to be used by the Colony contracts, as it checks that the user is proving their own reputation in the current colony. The `verifyProof` function can be used to verify any proof, though this function is not currently exposed on the Colony's EtherRouter.
Helper function that can be used by a client to verify the correctness of a patricia proof they have been supplied with.

#### Parameters

##### key

`BytesLike`

The key of the element the proof is for.

##### value

`BytesLike`

The value of the element that the proof is for.

##### branchMask

`BigNumberish`

The branchmask of the proof

##### siblings

`BytesLike`[]

The siblings of the proof

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AugmentedIColony.verifyReputationProof(bytes,bytes,uint256,bytes32[])`

***

### version()

> **version**(`overrides`?): `Promise`\<`BigNumber`\>

Get the Colony contract version. Starts from 1 and is incremented with every deployed contract change.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.version`

***

### version()()

> **version()**(`overrides`?): `Promise`\<`BigNumber`\>

Get the Colony contract version. Starts from 1 and is incremented with every deployed contract change.

#### Parameters

##### overrides?

`CallOverrides`

#### Returns

`Promise`\<`BigNumber`\>

#### Inherited from

`AugmentedIColony.version()`
