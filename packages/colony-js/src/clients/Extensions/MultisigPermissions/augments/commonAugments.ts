import { type MultisigPermissionsVersion } from '@colony/core';
import {
  type MultisigPermissionsEvents,
  MultisigPermissionsEvents__factory as MultisigPermissionsEventsFactory,
} from '@colony/events';

import { ClientType } from '../../../../constants.js';
import { type AugmentedIColony } from '../../../Core/augments/commonAugments.js';
import {
  type IColonyV14,
  type IColonyV15,
  type IColonyV16,
  type IColonyV17,
} from '../../../Core/contracts.js';
import { type AnyMultisigPermissions } from '../contracts.js';

export type ValidColony = IColonyV14 | IColonyV15 | IColonyV16 | IColonyV17;

export type AugmentedEstimate<
  T extends AnyMultisigPermissions = AnyMultisigPermissions,
> = T['estimateGas'];

export type AugmentedMultisigPermissions<
  T extends AnyMultisigPermissions = AnyMultisigPermissions,
> = T & {
  clientType: ClientType.MultisigPermissionsClient;
  clientVersion: MultisigPermissionsVersion;
  /** An instance of the corresponding ColonyClient */
  colonyClient: AugmentedIColony<ValidColony>;

  /**
   * The multisigPermissionsEvents contract supports all events across all versions.
   * Isn't that amazing?
   * It's an ethers contract with only events to filter
   */
  // eslint-disable-next-line max-len
  multisigPermissionsEvents: MultisigPermissionsEvents.MultisigPermissionsEvents;

  estimateGas: T['estimateGas'] & AugmentedEstimate;
};

export const addAugments = <T extends AugmentedMultisigPermissions>(
  instance: T,
  colonyClient: AugmentedIColony<ValidColony>,
): T => {
  /* eslint-disable no-param-reassign */
  instance.clientType = ClientType.MultisigPermissionsClient;
  instance.colonyClient = colonyClient;

  instance.multisigPermissionsEvents = MultisigPermissionsEventsFactory.connect(
    instance.address,
    instance.signer || instance.provider,
  );

  return instance;
  /* eslint-enable no-param-reassign */
};

export type UnknownMultisigPermissionsClient =
  AugmentedMultisigPermissions<any>;
