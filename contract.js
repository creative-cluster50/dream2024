const { ethers } = require('ethers');

function generatePrivateKey() {
    const wallet = ethers.Wallet.createRandom();
    const privateKey = wallet.privateKey;
    const address = wallet.address;

    console.log('Private Key:', privateKey);
    console.log('Address:', address);

    return privateKey; // Return the generated private key
}

async function deployContract() {
    // Connect to Binance Smart Chain
    const provider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/');

    // Generate the private key
    const privateKey = generatePrivateKey();

    // Load your wallet using your private key
    const wallet = new ethers.Wallet(privateKey, provider);

    // Define your contract source code
    const contractSource = `
        contract MyContract {
            uint256 public myVariable;

            constructor() {
                myVariable = 0;
            }

            function setVariable(uint256 newValue) public {
                myVariable = newValue;
            }
        }
    `;

    // Compile the contract
    const compiledContract = new ethers.ContractFactory(contractSource, [], wallet);

    // Deploy the contract
    const contract = await compiledContract.deploy();

    // Wait for the contract to be mined
    await contract.deployed();

    // Output the contract address
    console.log('Contract deployed at:', contract.address);
}

deployContract();
