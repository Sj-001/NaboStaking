const LivToken = artifacts.require('LivToken');
const StakingLiv = artifacts.require('Staking');


module.exports = async function (deployer, network, addresses) {

    await deployer.deploy(LivToken);

    const livToken = await LivToken.deployed();

    await deployer.deploy(StakingLiv, livToken.address);

}