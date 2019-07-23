import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json';


const factory = web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xd448f5b77076cCbAc3aa9cCa5b5Fc1C6a60E05A3'
);

export default factory;
