#Game dapp

Create a blockchain game using Solidity, Web3, and Vue.js

### start

Enter the file `hardhat.config.js` and add a wallet private key and network Token.

Install dependencies:

```
npm install
```

Then test the contract

```
npx hardhat test
```

### Contract deployment

```
npx hardhat run scripts/deploy.js --network mumbai
Deployment Address - 0xBfB69Cc23F215d08245422b1B2D3EE2a790443Ef
```

#### Deploy to Berachain test network

```
npx hardhat run scripts/deploy.js --network berachain
Deployment Address - 0xB4dC03DE4e224070713d273E60b8D62457114719
```

### Front-end operation

Enter the front-end directory:

```
cd game
```

Install dependencies

```
yarn install
```

Set contract address

Edit the file `.env` and fill in the deployed contract address.

```
CONTRACT_ADDRESS="0xe"
```

Start the frontend

```
yarn serve
```

It will start normally.