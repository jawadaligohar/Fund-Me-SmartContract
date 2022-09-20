const {deployments,ethers, getNamedAccounts} = require("hardhat")


describe("FundME",async function(){
   let fundMe
   let deployer
    beforeEach(async function(){
        
       await deployments.fixture(["all"])
       deployer =(await getNamedAccounts()).deployer
       fundMe= await ethers.getContract("FundMe",deployer)
       
    })
    describe("constructor", async function(){
        it("sets the aggregator addresses correctly")
    })

})