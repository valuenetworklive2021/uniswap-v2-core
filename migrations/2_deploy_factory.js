const Factory = artifacts.require('ValueswapV2Factory.sol');



module.exports = async function (deployer, network, accounts) {
  const feeToSetter = accounts[0];
  const args = [feeToSetter];
  await deployer.deploy(Factory, ...args);
};
