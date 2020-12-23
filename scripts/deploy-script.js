const fs = require('fs');
const hre = require('hardhat');
const { expect } = require('chai');



async function main() {
  checkDir();
  const { name, arguments, instance, factory } = await deployValueswapV2Factory();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });


function checkDir() {
  const isExists = fs.existsSync('./cache/deployed');
  if (!isExists)
    fs.mkdirSync('./cache/deployed', { recursive: true });
}


async function deployValueswapV2Factory() {
  const name = 'ValueswapV2Factory';
  const accounts = await ethers.getSigners();
  const arguments = [accounts[0].address];
  console.log('Deploying contract "%s"!', name);

  const factory = await hre.ethers.getContractFactory(name);
  const instance = await factory.deploy(...arguments);
  await instance.deployed();

  updateDeployedContractInfo(name, instance, arguments);
  /*
  await instance.setFeeTo(feeTo);
  expect(await instance.feeTo()).to.equal(feeTo);

  await instance.setFeeToSetter(feeToSetter);
  expect(await instance.feeToSetter()).to.equal(feeToSetter);
  */
  return { name, arguments, instance, factory };
}


function updateDeployedContractInfo(name, instance, arguments = []) {
  const newInfo = {
    [instance.provider.network.name]: {
      name: name,
      address: instance.address,
      signer: instance.signer.address,
      arguments: arguments,
    }
  };
  console.log(newInfo);

  const fileName = `./cache/deployed/${name}.json`;
  const isExists = fs.existsSync(fileName);
  if (!isExists) {
    fs.writeFileSync(fileName, JSON.stringify({}, null, 2));
  }

  const oldInfo = JSON.parse(fs.readFileSync(fileName, { encoding: 'utf8' }));
  const info = Object.assign({}, oldInfo, newInfo);
  fs.writeFileSync(fileName, JSON.stringify(info, null, 2));
}
