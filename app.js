init = async () => {
    var web3 = new Web3("http://localhost:7545");
    var response = await fetch('../build/contracts/Structregistry.json');
    var MyContract = await response.json()
    const id = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[id];
    contract = new web3.eth.Contract(MyContract.abi, deployedNetwork.address);
    return contract
}

//mongodb+srv://king:4yAi9Ex7yfpQrDbz@cluster0.8p0viun.mongodb.net/?retryWrites=true&w=majority