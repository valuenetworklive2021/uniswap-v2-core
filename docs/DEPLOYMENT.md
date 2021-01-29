# Deployment

## ropsten
- ValueswapV2Pair bytecode hash (Look for INIT_CODE_HASH):
- bd180ae29cf24eb2aeb0c652457a18bf292f7aaa4661545fb91e6eefcffe1a24
  - old = f27fee3fc000c2148077e3c1de2bfc88ca0e8881a5c9fbb18615dc16f0cc1b75
- ValueswapV2Factory 0xF8CC7061b9286b16dF5909BF7969b50209A551E1 block 9561851=>9561850
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