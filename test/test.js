const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("EpicGame", function () {
    let gameContract;
    before(async () => {
        const gameContractFactory = await ethers.getContractFactory("EpicGame");
        gameContract = await gameContractFactory.deploy(
            ["Sudhan", "Aniruddh", "Wrench"],
            [
                "https://i.pinimg.com/564x/c0/71/2a/c0712a77a01a9364b4dbd7ed02cff564.jpg",
                "https://i.pinimg.com/564x/97/b5/00/97b500946c1de6ac99af6195a3521257.jpg",
                "https://i.pinimg.com/564x/2c/4c/4e/2c4c4e5614a533ce48b42fe74933894f.jpg",
            ],
            [100, 200, 300],
            [100, 50, 25],
            "Krish",
            "https://resources.crayon.dev/suangguosha/lvbu.png", // boss
            1000,
            50
        );
        await gameContract.deployed();
    });
    it("Should have 3 default characters", async () => {
        let characters = await gameContract.getAllDefaultCharacters();
        expect(characters.length).to.equal(3);
    });
    it("Should have a boss", async () => {
        let boss = await gameContract.getBigBoss();
        expect(boss.name).to.equal("Krish");
    });
});
