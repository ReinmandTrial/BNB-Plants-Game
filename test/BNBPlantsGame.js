const { expect } = require("chai");

describe("BNBPlantsGame", function () {
let contract;
    it("Deploy", async function () {
      const [owner,marketing,addr1,addr2] = await ethers.getSigners();
      const CONTRACT = await ethers.getContractFactory("BNBPlantsGame");
      contract = await CONTRACT.deploy(marketing.address);
      console.log(`✓ Owner: ${owner.address}`)
      console.log(`✓ Marketing: ${marketing.address}`)
      console.log(`✓ Addr1: ${addr1.address}`)
      console.log(`✓ Addr2: ${addr2.address}`)
      
    });

    it("Get Contract balance", async function () {
      const [owner,marketing] = await ethers.getSigners();
      const balance0 = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
      console.log(`✓ Balance Owner: ${balance0} BNB`)
      expect( await contract.getContractBalance()).to.equal("0") ;
    });

    it("Register", async function () {
      const [owner,marketing,addr1] = await ethers.getSigners();
      const amount = 0.06
      const value= ethers.utils.parseEther(amount.toString())
      await contract.connect(addr1).register({value: value});
      console.log(`✓ Register ${addr1.address}`)
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr1.address))
      console.log(`✓ Balance Addr1: ${balance} BNB`)
    });

    it("Register with referrer", async function () {
      const [owner,marketing,addr1,addr2] = await ethers.getSigners();
      const amount = 0.06
      const value= ethers.utils.parseEther(amount.toString())
      const ref=addr1.address
      console.log(`✓ Register ${addr2.address} with referrer ${ref}`)
      await contract.connect(addr2).registerWithReferrer(ref, {value: value});
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr2.address))
      console.log(`✓ Balance Addr2: ${balance} BNB`)

    });

    it("Addr1 buys level 1 / 0.06BNB", async function () {
      const [owner,marketing,addr1,addr2] = await ethers.getSigners();
      const amount = 0.06
      const value= ethers.utils.parseEther(amount.toString())
      await contract.connect(addr1).buyLevel(1, {value: value});
      const balance0 = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
      console.log(`✓ Balance Owner: ${balance0} BNB`)
      const balance1 = ethers.utils.formatEther(await ethers.provider.getBalance(marketing.address))
      console.log(`✓ Balance Marketing: ${balance1} BNB`)
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr1.address))
      console.log(`✓ Balance Addr1: ${balance} BNB`)
    });

    it("Addr2 buys level 1 / 0.06BNB", async function () {
      const [owner,marketing,addr1,addr2] = await ethers.getSigners();
      const amount = 0.06
      const value= ethers.utils.parseEther(amount.toString())
      await contract.connect(addr2).buyLevel(1, {value: value});
      const balance0 = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
      console.log(`✓ Balance Owner: ${balance0} BNB`)
      const balance1 = ethers.utils.formatEther(await ethers.provider.getBalance(marketing.address))
      console.log(`✓ Balance Marketing: ${balance1} BNB`)
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr1.address))
      console.log(`✓ Balance Addr1: ${balance} BNB`)
      const balance2 = ethers.utils.formatEther(await ethers.provider.getBalance(addr2.address))
      console.log(`✓ Balance Addr2: ${balance2} BNB`)
    });

    it("Addr1 buys level 2 / 0.09BNB", async function () {
      const [owner,marketing,addr1,addr2] = await ethers.getSigners();
      const amount = 0.09
      const value= ethers.utils.parseEther(amount.toString())
      await contract.connect(addr1).buyLevel(2, {value: value});
      const balance0 = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
      console.log(`✓ Balance Owner: ${balance0} BNB`)
      const balance1 = ethers.utils.formatEther(await ethers.provider.getBalance(marketing.address))
      console.log(`✓ Balance Marketing: ${balance1} BNB`)
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr1.address))
      console.log(`✓ Balance Addr1: ${balance} BNB`)
    });

    it("Addr1 buys level 3 / 0.13BNB", async function () {
      const [owner,marketing,addr1,addr2] = await ethers.getSigners();
      const amount = 0.13
      const value= ethers.utils.parseEther(amount.toString())
      await contract.connect(addr1).buyLevel(3, {value: value});
      const balance0 = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
      console.log(`✓ Balance Owner: ${balance0} BNB`)
      const balance1 = ethers.utils.formatEther(await ethers.provider.getBalance(marketing.address))
      console.log(`✓ Balance Marketing: ${balance1} BNB`)
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr1.address))
      console.log(`✓ Balance Addr1: ${balance} BNB`)
    });

    it("Addr1 buys level 4 / 0.19BNB", async function () {
      const [owner,marketing,addr1,addr2] = await ethers.getSigners();
      const amount = 0.19
      const value= ethers.utils.parseEther(amount.toString())
      await contract.connect(addr1).buyLevel(4, {value: value});
      const balance0 = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
      console.log(`✓ Balance Owner: ${balance0} BNB`)
      const balance1 = ethers.utils.formatEther(await ethers.provider.getBalance(marketing.address))
      console.log(`✓ Balance Marketing: ${balance1} BNB`)
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr1.address))
      console.log(`✓ Balance Addr1: ${balance} BNB`)
    });

    it("Addr1 buys level 5 / 0.23BNB", async function () {
      const [owner,marketing,addr1,addr2] = await ethers.getSigners();
      const amount = 0.23
      const value= ethers.utils.parseEther(amount.toString())
      await contract.connect(addr1).buyLevel(5, {value: value});
      const balance0 = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
      console.log(`✓ Balance Owner: ${balance0} BNB`)
      const balance1 = ethers.utils.formatEther(await ethers.provider.getBalance(marketing.address))
      console.log(`✓ Balance Marketing: ${balance1} BNB`)
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr1.address))
      console.log(`✓ Balance Addr1: ${balance} BNB`)
    });

    it("Addr1 buys level 6 / 0.3BNB", async function () {
      const [owner,marketing,addr1,addr2] = await ethers.getSigners();
      const amount = 0.3
      const value= ethers.utils.parseEther(amount.toString())
      await contract.connect(addr1).buyLevel(6, {value: value});
      const balance0 = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
      console.log(`✓ Balance Owner: ${balance0} BNB`)
      const balance1 = ethers.utils.formatEther(await ethers.provider.getBalance(marketing.address))
      console.log(`✓ Balance Marketing: ${balance1} BNB`)
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr1.address))
      console.log(`✓ Balance Addr1: ${balance} BNB`)
    });

    it("Addr1 buys level 7 / 0.4BNB", async function () {
      const [owner,marketing,addr1,addr2] = await ethers.getSigners();
      const amount = 0.4
      const value= ethers.utils.parseEther(amount.toString())
      await contract.connect(addr1).buyLevel(7, {value: value});
      const balance0 = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
      console.log(`✓ Balance Owner: ${balance0} BNB`)
      const balance1 = ethers.utils.formatEther(await ethers.provider.getBalance(marketing.address))
      console.log(`✓ Balance Marketing: ${balance1} BNB`)
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr1.address))
      console.log(`✓ Balance Addr1: ${balance} BNB`)
    });

    it("Addr1 buys level 8 / 0.55BNB", async function () {
      const [owner,marketing,addr1,addr2] = await ethers.getSigners();
      const amount = 0.55
      const value= ethers.utils.parseEther(amount.toString())
      await contract.connect(addr1).buyLevel(8, {value: value});
      const balance0 = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
      console.log(`✓ Balance Owner: ${balance0} BNB`)
      const balance1 = ethers.utils.formatEther(await ethers.provider.getBalance(marketing.address))
      console.log(`✓ Balance Marketing: ${balance1} BNB`)
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr1.address))
      console.log(`✓ Balance Addr1: ${balance} BNB`)
    });

    it("Addr1 buys level 9 / 0.8BNB", async function () {
      const [owner,marketing,addr1,addr2] = await ethers.getSigners();
      const amount = 0.8
      const value= ethers.utils.parseEther(amount.toString())
      await contract.connect(addr1).buyLevel(9, {value: value});
      const balance0 = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
      console.log(`✓ Balance Owner: ${balance0} BNB`)
      const balance1 = ethers.utils.formatEther(await ethers.provider.getBalance(marketing.address))
      console.log(`✓ Balance Marketing: ${balance1} BNB`)
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr1.address))
      console.log(`✓ Balance Addr1: ${balance} BNB`)
    });

    it("Addr1 buys level 10 / 1.3BNB", async function () {
      const [owner,marketing,addr1,addr2] = await ethers.getSigners();
      const amount = 1.3
      const value= ethers.utils.parseEther(amount.toString())
      await contract.connect(addr1).buyLevel(10, {value: value});
      const balance0 = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
      console.log(`✓ Balance Owner: ${balance0} BNB`)
      const balance1 = ethers.utils.formatEther(await ethers.provider.getBalance(marketing.address))
      console.log(`✓ Balance Marketing: ${balance1} BNB`)
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr1.address))
      console.log(`✓ Balance Addr1: ${balance} BNB`)
    });

    it("Addr1 buys level 11 / 1.8BNB", async function () {
      const [owner,marketing,addr1,addr2] = await ethers.getSigners();
      const amount = 1.8
      const value= ethers.utils.parseEther(amount.toString())
      await contract.connect(addr1).buyLevel(11, {value: value});
      const balance0 = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address))
      console.log(`✓ Balance Owner: ${balance0} BNB`)
      const balance1 = ethers.utils.formatEther(await ethers.provider.getBalance(marketing.address))
      console.log(`✓ Balance Marketing: ${balance1} BNB`)
      const balance = ethers.utils.formatEther(await ethers.provider.getBalance(addr1.address))
      console.log(`✓ Balance Addr1: ${balance} BNB`)
    });

    it("Get Contract balance is zero", async function () {
      expect( await contract.getContractBalance()).to.equal("0") ;
    });


});
