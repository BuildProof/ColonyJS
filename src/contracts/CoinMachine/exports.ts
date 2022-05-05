// Always add the next CoinMachine version here
import type { CoinMachine as CoinMachine1 } from './1';
import type { CoinMachine as CoinMachine2 } from './2';
import type { CoinMachine as CoinMachine3 } from './3';
import type { CoinMachine as CoinMachine4 } from './4';
import type { CoinMachine as CoinMachine5 } from './5';

// Always adjust to the latest factory
export { CoinMachine__factory as CoinMachineFactory } from './5/factories/CoinMachine__factory';

export type CoinMachineV1 = CoinMachine1;
export type CoinMachineV2 = CoinMachine2;
export type CoinMachineV3 = CoinMachine3;
export type CoinMachineV4 = CoinMachine4;
export type CoinMachineV5 = CoinMachine5;

export type AnyCoinMachine =
  | CoinMachine1
  | CoinMachine2
  | CoinMachine3
  | CoinMachine4
  | CoinMachine5;
