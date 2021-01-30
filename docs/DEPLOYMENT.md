# Deployment

## ropsten
- ValueswapV2Pair bytecode hash (Look for INIT_CODE_HASH):
- f27fee3fc000c2148077e3c1de2bfc88ca0e8881a5c9fbb18615dc16f0cc1b75
  - old = ?
- ValueswapV2Factory 0xa8d200eaB94c77a98077c8e2631B2F2D00F2c1E7  block 9566772=>9566771, old: ?
  - old = ?

## Install Dependencies
```bash
yarn
```


## Compile Contracts
```bash
yarn compile
```


## Run Tests
```bash
yarn test
```


## INIT_CODE_HASH
Replace in Line #24 for `valueswap-v2-periphery/contracts/libraries/ValueswapV2Library.sol`.
Replace in `INIT_CODE_HASH` for `valueswap-sdk/src/constants.ts`.
```bash
yarn get-hash
```


## Deployment
```bash
yarn deploy <network>
yarn verify <network> ValueswapV2Factory
```


### Deployment for Ropsten
```bash
yarn deploy ropsten
yarn verify ropsten ValueswapV2Factory
```


### Deployment for Mainnetwork
```bash
yarn deploy mainnet
yarn verify mainnet ValueswapV2Factory
```

### FACTORY_ADDRESS
Replace in `FACTORY_ADDRESS` 
 - for `valueswap-sdk/src/constants.ts`.
 - for `valueswap-v2-periphery/migrations/2_deploy_router.js`.
 - for `valueswap-info/src/constants/index.js`.
 - for `valueswap-v2-subgraph/src/mappings/helpers.ts`.
 - src/mappings/helpers.ts
 - subgraph.yaml и номер блока -1