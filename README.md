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
```

#### Deploy to Berachain test network

```
npx hardhat run scripts/deploy.js --network berachain
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

### Experience

**Experience address:**[https://web3-game.crayon.dev/](https://web3-game.crayon.dev/)