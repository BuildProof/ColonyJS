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
      const adminRole = roles.includes(ColonyRole.Administration) ? 'Administration' : 'None';
      return {
        domainName: domainNames[domainId] || `Domain ${domainId}`,
        roles: adminRole,
      };
    }));
    return rolesDetails;
  } catch (error) {
    console.error('Error fetching roles:', error);
    throw error;
  }
};

const getRolesForRootDomain = async (address: string) => {
  const colonyNetwork = new ColonyNetwork(provider);
  const colony = await colonyNetwork.getColony(colonyAddress);

  try {
    const roles = await colony.getRoles(address, Id.RootDomain);
    const adminRole = roles.includes(ColonyRole.Administration) ? 'Administration' : 'None';
    return adminRole;
  } catch (error) {
    console.error('Error fetching roles for Root domain:', error);
    throw error;
  }
};

type UserRole = {
  address: string;
  domains: {
    domainId: number;
    domainName: string;
    roles: string;
    reputation: string;
  }[];
};

const checkAdminRoleAndReputationForAllUsers = async (domainIds: number[]): Promise<UserRole[]> => {
  const colonyNetwork = new ColonyNetwork(provider);
  const colony = await colonyNetwork.getColony(colonyAddress);

  const rolesData: UserRole[] = [];

  try {
    // Fetch all addresses with reputation
    const { skillId } = await colony.getTeam(Id.RootDomain);
    const membersReputation = await colony.reputation.getMembersReputation(skillId);
    const addresses = membersReputation.addresses;

    for (const address of addresses) {
      const userRoles: UserRole = { address, domains: [] };
      for (const domainId of domainIds) {
        const roles = await colony.getRoles(address, domainId);
        const { reputationAmount } = await colony.reputation.getReputation(skillId, address);
        const totalReputation = await colony.reputation.getTotalReputation(skillId);
        const percentage = reputationAmount.mul(10000).div(totalReputation.reputationAmount).toNumber() / 100;
        userRoles.domains.push({
          domainId,
          domainName: domainNames[domainId] || `Domain ${domainId}`,
          roles: roles.map(role => ColonyRole[role] || `Unknown Role (${role})`).join(', '),
          reputation: `${percentage.toFixed(2)}%`
        });
      }
      rolesData.push(userRoles);
    }
  } catch (error) {
    console.error('Error checking admin role and reputation for all users:', error);
    throw error;
  }

  return rolesData;
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
    const allRolesData = await checkAdminRoleAndReputationForAllUsers(domainIds);
    const rolesMessages = allRolesData.map(user => {
      const userRoles = user.domains.map(domain => {
        return `Domain: ${domain.domainName}, Roles: ${domain.roles}, Reputation: ${domain.reputation}`;
      }).join('\n');
      return `User: ${user.address}\n${userRoles}`;
    }).join('\n\n');
    speak(`Roles and Reputation Data:\n\n${rolesMessages}`);
  } catch (e) {
    panik(`Found an error: ${(e as Error).message}`);
    console.error('Error loading domain reputation or roles:', e);
    speak('');
  }
  return null;
});