const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("EpicGame");
    const gameContract = await gameContractFactory.deploy(
        ["Sudhan", "Aniruddh", "Wrench"],
        [
            "https://i.pinimg.com/564x/c4/b1/69/c4b1694baa07cea37ee490719c7ecd6e.jpg",
            "https://i.pinimg.com/564x/f5/bf/25/f5bf255e8147b199c68c14dfc1d03ab3.jpg",
            "https://i.pinimg.com/564x/6c/c5/d2/6cc5d2faab03a2fadabe296073b28235.jpg",
        ],
        [100, 300, 200],
        [100, 500, 50],
        "Krish",
        "https://i.pinimg.com/736x/6d/9a/82/6d9a827501cf779b9926ee6fce4b3192.jpg", // boss
        1000,
        50
    );
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account: ", deployer.address);

    console.log("Account balance: ", (await deployer.getBalance()).toString());
    await gameContract.deployed();
    console.log("Contract deployed to: ", gameContract.address);
};
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
runMain();
