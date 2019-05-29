import { BN } from 'web3-utils'
import { getColony } from '@/lib/colony-store'
import colonyProxy from '@/lib/colony-proxy'

export async function getDomains({ colony = getColony() }) {
  const { count: domainCount } = await colony.getDomainCount.call()
  const domainIds = [...Array(domainCount).keys()].map(k => k + 1)
  const domains = await Promise.all(domainIds.map(domainId => (async () => {
    const domain = await colony.getDomain.call({ domainId })
    domain.id = domainId
    return domain
  })()))
  return domains
}

export function addDomain({ colony = getColony() }) {
  const parentDomainId = 1
  return colonyProxy(colony).addDomain({ parentDomainId })
}

export async function fundDomain({ colony = getColony(), domain }) {
  const { id: domainId, amount } = domain
  const token = colony.tokenClient.contract.address
  const { potId } = await colony.getDomain.call({ domainId })
  return colony.moveFundsBetweenPots.send({
    fromPot: 1,
    toPot: potId,
    amount: new BN(amount),
    token,
  })
}
