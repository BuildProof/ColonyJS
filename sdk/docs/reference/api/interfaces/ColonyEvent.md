# Interface: ColonyEvent

An Event that came from a contract within the Colony Network

## Hierarchy

- [`ColonyFilter`](ColonyFilter.md)

  ↳ **`ColonyEvent`**

## Properties

### address

• `Optional` **address**: `string` \| `string`[]

#### Inherited from

[ColonyFilter](ColonyFilter.md).[address](ColonyFilter.md#address)

___

### data

• **data**: `Result`

___

### eventName

• **eventName**: `string`

The full event signature of this event (e.g. `TokenMinted(uint256))`

#### Inherited from

[ColonyFilter](ColonyFilter.md).[eventName](ColonyFilter.md#eventname)

___

### eventSource

• **eventSource**: keyof [`EventSources`](EventSources.md)

The Colony contract the event originated from

#### Inherited from

[ColonyFilter](ColonyFilter.md).[eventSource](ColonyFilter.md#eventsource)

___

### fromBlock

• `Optional` **fromBlock**: `BlockTag`

#### Inherited from

[ColonyFilter](ColonyFilter.md).[fromBlock](ColonyFilter.md#fromblock)

___

### getMetadata

• `Optional` **getMetadata**: () => `Promise`<{ `annotationMessage`: `string`  } \| { `colonyAvatarHash`: `string` ; `colonyDisplayName`: `string` ; `colonyTokens`: `string`[]  } \| { `domainColor`: `number` ; `domainName`: `string` ; `domainPurpose`: `string`  }\>

#### Type declaration

▸ (): `Promise`<{ `annotationMessage`: `string`  } \| { `colonyAvatarHash`: `string` ; `colonyDisplayName`: `string` ; `colonyTokens`: `string`[]  } \| { `domainColor`: `number` ; `domainName`: `string` ; `domainPurpose`: `string`  }\>

##### Returns

`Promise`<{ `annotationMessage`: `string`  } \| { `colonyAvatarHash`: `string` ; `colonyDisplayName`: `string` ; `colonyTokens`: `string`[]  } \| { `domainColor`: `number` ; `domainName`: `string` ; `domainPurpose`: `string`  }\>

___

### toBlock

• `Optional` **toBlock**: `BlockTag`

#### Inherited from

[ColonyFilter](ColonyFilter.md).[toBlock](ColonyFilter.md#toblock)

___

### topics

• `Optional` **topics**: (``null`` \| `string` \| `string`[])[]

#### Inherited from

[ColonyFilter](ColonyFilter.md).[topics](ColonyFilter.md#topics)

___

### transactionHash

• **transactionHash**: `string`
