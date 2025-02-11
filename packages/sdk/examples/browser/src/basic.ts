import { providers, utils, BigNumber } from 'ethers';
import { Id } from '@colony/sdk';

import {
  ColonyNetwork,
  ColonyRpcEndpoint,
  Tokens,
  ReputationClient,
} from '../../../src/index.js';

const { formatEther, isAddress } = utils;

const provider = new providers.JsonRpcProvider(ColonyRpcEndpoint.ArbitrumOne);
const colonyAddress = '0x8e389bf45f926dDDB2BE3636290de42B68aefd51'; // Replace with your actual colony address

const getGlobalReputation = async () => {
  const colonyNetwork = new ColonyNetwork(provider);
  const colony = await colonyNetwork.getColony(colonyAddress);

  // Get the skill ID for the root domain
  const { skillId } = await colony.getTeam(Id.RootDomain);

  // Fetch the total reputation for the colony
  try {
    const { reputationAmount: totalReputation } = await colony.reputation.getTotalReputation(skillId);
    const membersReputation = await colony.reputation.getMembersReputation(skillId);
    const reputationList = await Promise.all(membersReputation.addresses.map(async (address) => {
      const { reputationAmount } = await colony.reputation.getReputation(skillId, address);
      const percentage = reputationAmount.mul(100).div(totalReputation);
      return `User: ${address}, Reputation: ${percentage.toString()}%`;
    }));
    return reputationList.join('\n');
  } catch (error) {
    console.error('Error fetching global reputation:', error);
    throw error; // Rethrow the error for further handling
  }
};

// Just some basic setup to display the UI
const addressInput: HTMLInputElement | null =
  document.querySelector('#address');
const button = document.querySelector('#button');
const errElm: HTMLParagraphElement | null = document.querySelector('#error');
const resultElm: HTMLParagraphElement | null =
  document.querySelector('#result');

if (!addressInput || !button || !errElm || !resultElm) {
  throw new Error('Could not find all required HTML elements');
}

const panik = (err: string) => {
  errElm.innerText = err;
};
const kalm = () => {
  errElm.innerText = '';
};
const speak = (msg: string) => {
  console.log('Updating result element with message:', msg);
  if (resultElm) {
    resultElm.innerText = msg;
  } else {
    console.error('Result element not found.');
  }
};

button.addEventListener('click', async () => {
  kalm();
  const colonyAddress = addressInput?.value;
  if (!isAddress(colonyAddress)) {
    return panik('This is not a valid address');
  }
  speak('Thinking...');
  addressInput.value = '';
  try {
    const reputationList = await getGlobalReputation();
    speak(reputationList);
  } catch (e) {
    panik(`Found an error: ${(e as Error).message}`);
    console.error('Error loading global reputation:', e);
    speak('');
  }
  return null;
});