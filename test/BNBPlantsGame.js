const { expect } = require("chai");

describe("BNBPlantsGame", function () {
let contract;
    it("Deploy", async function () {
      const [owner] = await ethers.getSigners();
      const CONTRACT = await ethers.getContractFactory("BNBPlantsGame");
      contract = await CONTRACT.deploy();
    });

    it("Get Contract balance", async function () {
      const [owner] = await ethers.getSigners();
      const balance0 = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
      console.log(`✓ Balance Owner: ${balance0} BNB`)
      expect( await contract.getContractBalance()).to.equal("0") ;
    });

    it("Register", async function () {
      const [owner,addr1] = await ethers.getSigners();
      const amount = 0.06
      const value= ethers.utils.parseEther(amount.toString())
      await contract.connect(addr1).register({value: value});
      console.log(`✓ Register ${addr1.address}`)
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr1.address))
      console.log(`✓ Balance Addr1: ${balance} BNB`)
    });

    it("Register with referrer", async function () {
      const [owner,addr1,addr2] = await ethers.getSigners();
      const amount = 0.06
      const value= ethers.utils.parseEther(amount.toString())
      const ref=addr1.address
      console.log(`✓ Register ${addr2.address} with referrer ${ref}`)
      await contract.connect(addr2).registerWithReferrer(ref, {value: value});
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr2.address))
      console.log(`✓ Balance Addr2: ${balance} BNB`)

    });

    it("Addr1 buys level 1", async function () {
      const [owner,addr1,addr2] = await ethers.getSigners();
      const amount = 0.05
      const value= ethers.utils.parseEther(amount.toString())
      await contract.connect(addr1).buyLevel(1, {value: value});
      const balance0 = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
      console.log(`✓ Balance Owner: ${balance0} BNB`)
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr1.address))
      console.log(`✓ Balance Addr1: ${balance} BNB`)
    });

    it("Addr2 buys level 1", async function () {
      const [owner,addr1,addr2] = await ethers.getSigners();
      const amount = 0.05
      const value= ethers.utils.parseEther(amount.toString())
      await contract.connect(addr2).buyLevel(1, {value: value});
      const balance0 = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
      console.log(`✓ Balance Owner: ${balance0} BNB`)
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr1.address))
      console.log(`✓ Balance Addr1: ${balance} BNB`)
      const balance2 = ethers.utils.formatEther(await ethers.provider.getBalance(addr2.address))
      console.log(`✓ Balance Addr2: ${balance2} BNB`)
    });

    it("Get Contract balance is zero", async function () {
      expect( await contract.getContractBalance()).to.equal("0") ;
    });


});
