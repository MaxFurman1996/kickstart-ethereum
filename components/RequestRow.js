import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';


class RequestRow extends Component{

    onApprove = async () => {
        const campaign = Campaign(this.props.address);

        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        });
    };


    onFinilize = async() =>{
        const campaign = Campaign(this.props.address);

        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(this.props.id).send({
            from: accounts[0]
        });
    };


    render(){
        const { Row, Cell } = Table;
        const { id, request, approversCount } = this.props;
        const requestValue = web3.utils.toBN(request.value._hex);
        const approvalCountConverted = parseInt(web3.utils.toBN(request.approvalCount._hex));
        const approversCountConverted = parseInt(web3.utils.toBN(approversCount._hex));
        const readyToFinalize = approvalCountConverted > approversCountConverted / 2;

        return(
            <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
                <Cell>{id.toString()}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(requestValue, 'ether')}</Cell>
                <Cell>{request.recipient.toString()}</Cell>
                <Cell>
                    {approvalCountConverted}/{approversCountConverted}
                </Cell>
                <Cell>
                    {request.complete ? null : (
                    <Button color="green" basic onClick={this.onApprove}>
                        Approve
                    </Button>
                    )}
                </Cell>
                <Cell>
                    {request.complete ? null : (
                    <Button color="teal" basic onClick={this.onFinilize}>
                        Finilize
                    </Button>
                    )}
                </Cell>
            </Row>
        );
    }
}


export default RequestRow;
