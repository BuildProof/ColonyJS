import type { ColonyVersion } from './IColony.js';

import { createContractVersionArray } from './utils.js';

const FUNDING_QUEUE_VERSION_NEXT = 10;

/** @internal */
export const FUNDING_QUEUE_VERSIONS = createContractVersionArray(
  FUNDING_QUEUE_VERSION_NEXT,
);

export type FundingQueueVersion = (typeof FUNDING_QUEUE_VERSIONS)[number];

/** @internal */
export const fundingQueueIncompatibilityMap: Record<
  FundingQueueVersion,
  Array<ColonyVersion>
> = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
};

/** @internal */
export const FUNDING_QUEUE_VERSION_LATEST = (FUNDING_QUEUE_VERSION_NEXT -
  1) as FundingQueueVersion;
