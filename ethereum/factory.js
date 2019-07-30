import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json';


const factory = web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xBeF64d6efe46AD9931dfEA7C24fE1602f266a9DB'
);

export default factory;
