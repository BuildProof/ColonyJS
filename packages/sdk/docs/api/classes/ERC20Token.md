# Class: ERC20Token

## Extended by

- [`ColonyToken`](ColonyToken.md)
- [`ERC2612Token`](ERC2612Token.md)

## Constructors

### new ERC20Token()

> **new ERC20Token**(`colonyNetwork`, `token`): [`ERC20Token`](ERC20Token.md)

Creates a new instance of an ERC20 Token

#### Parameters

##### colonyNetwork

[`ColonyNetwork`](ColonyNetwork.md)

A [ColonyNetwork](ColonyNetwork.md) instance

##### token

A token address or a full contract (like on a colony token client)

`string` | `TokenERC20`

#### Returns

[`ERC20Token`](ERC20Token.md)

An ERC20 token abstraction instance

#### Remarks

This does not deploy a new token, only connects to an exisiting one

## Properties

### address

> **address**: `string`

## Methods

### allowance()

> **allowance**(`owner`, `spender`): `Promise`\<`BigNumber`\>

Returns the amount which `spender` is still allowed to withdraw from `owner`

#### Parameters

##### owner

`string`

##### spender

`string`

#### Returns

`Promise`\<`BigNumber`\>

The allowance amount

***

### approve()

> **approve**(`amount`, `spender`?): [`TxCreator`](TxCreator.md)\<`TokenERC20`, `"approve"`, \{ `guy`: `string`; `src`: `string`; `wad`: `BigNumber`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

Approve `amount` of the wallet owners holdings of the specified token

In order for the wallet owner to stake tokens, that amount has to be approved and deposited into the Colony first. In the dapp the process is called "Activation" of a certain amount of the Colony's native token. The wallet must hold at least the amount of the token that will be approved.

#### Parameters

##### amount

`BigNumberish`

Amount of the token to be approved

##### spender?

`string`

Spender to approve the amount for. Defaults to the Colony Network

#### Returns

[`TxCreator`](TxCreator.md)\<`TokenERC20`, `"approve"`, \{ `guy`: `string`; `src`: `string`; `wad`: `BigNumber`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `src` | string | The address that approved the tokens from their wallet |
| `guy` | string | Address of the TokenLocking contract |
| `wad` | BigNumber | Amount that was approved |

#### Example

```typescript
import { w } from '@colony/sdk';

// Immediately executing async function
(async function() {
  // Approve 100 tokens to be "activated"
  await colony.token.approve(w`100`).tx().mined();
  // Deposit the tokens
  await colonyNetwork.locking.deposit(token.address, w`100`).tx().mined();
})();
```

***

### balanceOf()

> **balanceOf**(`owner`): `Promise`\<`BigNumber`\>

Returns the account balance of another account with address `owner`

#### Parameters

##### owner

`string`

#### Returns

`Promise`\<`BigNumber`\>

The account balance of the corresponding address

***

### decimals()

> **decimals**(): `Promise`\<`number`\>

Returns the token's decimals

#### Returns

`Promise`\<`number`\>

The token's decimals (e.g. 18)

***

### name()

> **name**(): `Promise`\<`string`\>

Returns the token's name

#### Returns

`Promise`\<`string`\>

The token's name (e.g. Colony Network Token)

***

### symbol()

> **symbol**(): `Promise`\<`string`\>

Returns the token's symbol

#### Returns

`Promise`\<`string`\>

The token's symbol (e.g. CLNY)

***

### totalSupply()

> **totalSupply**(): `Promise`\<`BigNumber`\>

Returns the total token supply

#### Returns

`Promise`\<`BigNumber`\>

The token's total supply

***

### transfer()

> **transfer**(`to`, `value`): [`TxCreator`](TxCreator.md)\<`TokenERC20`, `"transfer"`, \{ `dst`: `string`; `src`: `string`; `wad`: `BigNumber`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

Transfers `value` amount of tokens to address `to` from the currently used wallet

#### Parameters

##### to

`string`

##### value

`BigNumberish`

#### Returns

[`TxCreator`](TxCreator.md)\<`TokenERC20`, `"transfer"`, \{ `dst`: `string`; `src`: `string`; `wad`: `BigNumber`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `src` | string | The address that transferred the tokens from their wallet |
| `dst` | string | Address of the recipient of the tokens |
| `wad` | BigNumber | Amount that was transferred |

***

### transferFrom()

> **transferFrom**(`from`, `to`, `value`): [`TxCreator`](TxCreator.md)\<`TokenERC20`, `"transferFrom"`, \{ `dst`: `string`; `src`: `string`; `wad`: `BigNumber`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

Transfers `value` amount of tokens from address `from` to address `to`

The transferFrom method is used for a withdraw workflow, allowing contracts to transfer tokens on your behalf. This can be used for example to allow a contract to transfer tokens on your behalf and/or to charge fees in sub-currencies

#### Parameters

##### from

`string`

##### to

`string`

##### value

`BigNumberish`

#### Returns

[`TxCreator`](TxCreator.md)\<`TokenERC20`, `"transferFrom"`, \{ `dst`: `string`; `src`: `string`; `wad`: `BigNumber`; \}, [`MetadataType`](../enumerations/MetadataType.md)\>

A transaction creator

#### Event data

| Property | Type | Description |
| :------ | :------ | :------ |
| `src` | string | The address that transferred the tokens from their wallet |
| `dst` | string | Address of the recipient of the tokens |
| `wad` | BigNumber | Amount that was transferred |
