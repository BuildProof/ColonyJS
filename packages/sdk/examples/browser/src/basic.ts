import { providers, utils } from 'ethers';
import { Id, ColonyRole } from '@colony/sdk';

import {
  ColonyNetwork,
  ColonyRpcEndpoint,
} from '../../../src/index.js';

const { isAddress } = utils;

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
      const percentage = reputationAmount.mul(10000).div(totalReputation).toNumber() / 100;
      return `User: ${address}, Reputation: ${percentage.toFixed(2)}%`;
    }));
    return reputationList.join('\n');
  } catch (error) {
    console.error('Error fetching global reputation:', error);
    throw error; // Rethrow the error for further handling
  }
};

const domainNames = {
  1: 'General',
  4: '🅿 Intuition',
  3: '🅿 Eco',
  5: '🅿 Jokerace',
  // Add more domain names as needed
};

const getDomainReputation = async (domainIds: number[]) => {
  const colonyNetwork = new ColonyNetwork(provider);
  const colony = await colonyNetwork.getColony(colonyAddress);

  try {
    const reputationDetails = await Promise.all(domainIds.map(async (domainId) => {
      const { skillId } = await colony.getTeam(domainId);
      const totalReputation = await colony.reputation.getTotalReputation(skillId);
      const membersReputation = await colony.reputation.getMembersReputation(skillId);
      const reputationList = await Promise.all(membersReputation.addresses.map(async (address) => {
        const { reputationAmount } = await colony.reputation.getReputation(skillId, address);
        const percentage = reputationAmount.mul(10000).div(totalReputation.reputationAmount).toNumber() / 100;
        return `User: ${address}, Reputation: ${percentage.toFixed(2)}%`;
      }));
      return {
        domainName: domainNames[domainId] || `Domain ${domainId}`,
        reputationList: reputationList.join('\n'),
      };
    }));
    return reputationDetails;
  } catch (error) {
    console.error('Error fetching domain reputation:', error);
    throw error;
  }
};

const getRolesForDomains = async (address: string, domainIds: number[]) => {
  const colonyNetwork = new ColonyNetwork(provider);
  const colony = await colonyNetwork.getColony(colonyAddress);

  try {
    const rolesDetails = await Promise.all(domainIds.map(async (domainId) => {
      const roles = await colony.getRoles(address, domainId);
      return {
        domainName: domainNames[domainId] || `Domain ${domainId}`,
        roles: roles.map(role => ColonyRole[role] || role).join(', '),
      };
    }));
    return rolesDetails;
  } catch (error) {
    console.error('Error fetching roles:', error);
    throw error;
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
  if (resultElm) {
    resultElm.innerText = msg;
  } else {
    console.error('Result element not found.');
  }
};

button.addEventListener('click', async () => {
  kalm();
  const inputColonyAddress = addressInput?.value;
  if (!isAddress(inputColonyAddress)) {
    return panik('This is not a valid address');
  }
  speak('Thinking...');
  addressInput.value = '';
  try {
    const domainIds = [1, 4, 3, 5]; // Your specified domain IDs
    const reputationDetails = await getDomainReputation(domainIds);
    const rolesDetails = await getRolesForDomains(inputColonyAddress, domainIds);
    const reputationMessages = reputationDetails.map(domain => {
      return `Domain: ${domain.domainName}\n${domain.reputationList}`;
    }).join('\n\n');
    const rolesMessages = rolesDetails.map(domain => {
      return `Domain: ${domain.domainName}\nRoles: ${domain.roles}`;
    }).join('\n\n');
    speak(`${reputationMessages}\n\n${rolesMessages}`);
  } catch (e) {
    panik(`Found an error: ${(e as Error).message}`);
    console.error('Error loading domain reputation or roles:', e);
    speak('');
  }
  return null;
});