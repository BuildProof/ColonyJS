// Always add the next OneTxPayment version here
import type { OneTxPayment as OneTxPayment1 } from '../../../contracts/OneTxPayment/1/index.js';
import type { OneTxPayment as OneTxPayment2 } from '../../../contracts/OneTxPayment/2/index.js';
import type { OneTxPayment as OneTxPayment3 } from '../../../contracts/OneTxPayment/3/index.js';
import type { OneTxPayment as OneTxPayment4 } from '../../../contracts/OneTxPayment/4/index.js';
import type { OneTxPayment as OneTxPayment5 } from '../../../contracts/OneTxPayment/5/index.js';
import type { OneTxPayment as OneTxPayment6 } from '../../../contracts/OneTxPayment/6/index.js';
import type { OneTxPayment as OneTxPayment7 } from '../../../contracts/OneTxPayment/7/index.js';
import type { OneTxPayment as OneTxPayment8 } from '../../../contracts/OneTxPayment/8/index.js';
import type { OneTxPayment as OneTxPayment9 } from '../../../contracts/OneTxPayment/9/index.js';

// Always adjust to the latest factory
export { OneTxPayment__factory as OneTxPaymentFactory } from '../../../contracts/OneTxPayment/9/factories/OneTxPayment__factory.js';

export type OneTxPaymentV1 = OneTxPayment1;
export type OneTxPaymentV2 = OneTxPayment2;
export type OneTxPaymentV3 = OneTxPayment3;
export type OneTxPaymentV4 = OneTxPayment4;
export type OneTxPaymentV5 = OneTxPayment5;
export type OneTxPaymentV6 = OneTxPayment6;
export type OneTxPaymentV7 = OneTxPayment7;
export type OneTxPaymentV8 = OneTxPayment8;
export type OneTxPaymentV9 = OneTxPayment9;

export type AnyOneTxPayment =
  | OneTxPayment4
  | OneTxPayment5
  | OneTxPayment6
  | OneTxPayment7
  | OneTxPayment8
  | OneTxPayment9;
