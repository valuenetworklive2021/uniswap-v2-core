# Deployment

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
```bash
yarn deploy ropsten
yarn verify ropsten ValueswapV2Factory
```


### Deployment for Mainnetwork
```bash
yarn deploy mainnet
yarn verify mainnet ValueswapV2Factory
```
