import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory'
import Layout from '../components/Layout';
import { Link } from '../routes';


class CampaignIndex extends Component{

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    
    return { 
      campaigns: campaigns
     };
  }

  renderCampaigns(){
    const items = this.props.campaigns.map( address => {
      return{
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View campaign</a>
          </Link>
        ),
        fluid: true,
        style: { overflowWrap: 'break-word' }
      };
    });

    return <Card.Group items={items}/>;
  }


  render(){
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <Button
              content="Create campaign"
              icon="add circle"
              primary
              floated="right"
            />
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
