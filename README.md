# How to Use

To launch the app and test with the SDK, follow these steps:

## Versioning

You will need to use the following versions:
- **Node**: `^18 || ^20 || ^22`
- **pnpm**: `^10`

You can install the dependencies using:

bash
pnpm install


## Building Packages

To run the application, you must build every package. Execute the following command in each of the directories:
pnpm build

- `/packages/colonyJS`
- `/packages/contractor`
- `/packages/core`
- `/packages/events`
- `/packages/sdk`

## Running the Example

Once you have built all packages, navigate to the `packages/sdk` directory and run:


pnpm examples:browser   

Open the app in your browser, click on **Reputation & Roles**, and enter the Buildproof_test colony address:
0x8e389bf45f926dDDB2BE3636290de42B68aefd51
