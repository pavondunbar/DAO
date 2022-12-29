var Diamond = artifacts.require("./contracts/Diamond.sol");
var TimelockController = artifacts.require("./contracts/TimelockController.sol");
var Governance = artifacts.require("./contracts/Governance.sol");

module.exports = function(deployer) {
    deployer.then(async () => {
        await deployer.deploy(Diamond);
        // Set MinDelay (1 = 1 min, 5 = 5 minutes, etc) and specify wallet addresses for Proposers and Executors
        await deployer.deploy(TimelockController, 1, ['0x2E1026FE7b3CC2864C67ecA58956dC218d894A5B'], ['0x2E1026FE7b3CC2864C67ecA58956dC218d894A5B']);
        await deployer.deploy(Governance, Diamond.address, TimelockController.address);   
    });
};


