const UniswapV2Pair = artifacts.require('ValueswapV2Pair.sol');



module.exports = async (callback) => {
  console.log(
    'ValueswapV2Pair bytecode hash (Look for INIT_CODE_HASH):\n%s',
    (web3.utils.keccak256(UniswapV2Pair.bytecode)).substring(2)
  );
  callback();
}
