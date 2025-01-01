const{ethers}=require('hardhat');
const{assert,expect}=require('chai');
describe("SimpleStorage",function(){
  let simpleStorageFactory,simpleStorage;

  beforeEach(
    async function(){
       simpleStorageFactory=await ethers.getContractFactory("SimpleStorage");

        simpleStorage= await simpleStorageFactory.deploy();

    }




  );



  it("should retrieve the favourite number as 0", async function(
  ){
    const currentValue=await simpleStorage.retrieve();
    const expected="0";

    assert.equal(currentValue.toString(), expected)
  })

  it("should update the current value",async function(){
    const expectedValue="7";
    const transactionResponse=await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1);


    const currentValue=await simpleStorage.retrieve();
    assert.equal(currentValue.toString(), expectedValue)



  })

})