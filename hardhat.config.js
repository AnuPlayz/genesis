/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");

const config = {
    alchemy: "9aa3d95b3bc440fa88ea12eaa4456161", 
    privateKey: "fa75ccc4dda10508a839d3b1924ffce336fe2053dd5e9078cb791575c1f1337b", 
};

module.exports = {
    solidity: "0.8.4",
    networks: {
        mumbai: {
            url: `https://polygon-mumbai.g.alchemy.com/v2/iF8yHSXHYg-40CtC1u22m45OFvIzKSh7`,
            accounts: [config.privateKey],
        },
        berachain: {
            url: `https://artio.rpc.berachain.com/`,
            accounts: [config.privateKey],
        }
    },
};
