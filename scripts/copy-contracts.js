const { execSync } = require('child_process');



main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

async function main() {
  return new Promise((resolve, reject) => {
    const npx = execSync(
      'npx copyfiles -f ./artifacts/contracts/**/*.json ./build/contracts && del-cli ./build/contracts/*.dbg.json &&'+
      'npx copyfiles -f ./artifacts/contracts/interfaces/**/*.json ./build/contracts/interfaces && del-cli ./build/contracts/interfaces/*.dbg.json &&' +
      'npx copyfiles -f ./artifacts/contracts/libraries/**/*.json ./build/contracts/libraries && del-cli ./build/contracts/libraries/*.dbg.json &&' +
      'npx copyfiles -f copyfiles -f ./artifacts/contracts/test/**/*.json ./build/contracts/test && del-cli ./build/contracts/test/*.dbg.json'
    );
    resolve();
  });
}
