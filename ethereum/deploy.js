const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('../ethereum/build/CampaignFactory.json');


const provider = new HDWalletProvider(
  //'grace sunny photo tourist position fantasy image blur aerobic cluster address cherry',
  'chest where ivory bench online change success machine object token damage employ',
  'https://rinkeby.infura.io/v3/2649677d21f149459492da7da8ac971a'
);

const web3 = new Web3(provider);

const deploy = async () =>{
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });


  console.log('Contract deployed to', result.options.address);

};
deploy();
