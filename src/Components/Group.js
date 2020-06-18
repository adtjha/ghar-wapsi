import React from 'react';

import { Steps } from 'antd';

import { Input, Popover, Button, Space } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import '../App.css';

class Group extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            journey: (JSON.parse(localStorage.getItem('journey'))),
            travellers: (JSON.parse(localStorage.getItem('travellers'))).travellers,
            paymentID: '',
            loading: false
        }
    }
    
    componentDidMount(){
        
    }
    
    onSubmit(value){
        /**
            check PaymentRecievedDatabase [Value not to be present in firebase database.] :
                If (PRESENT),
                    decline the request and clean LOCAL STORAGE.
                elseif (NOT PRESENT),
                    check if (PaymentAcknowledged is TRUE),
                            accept the request, 
                            update PaymentRecievedDatabase,
                            update WaitListed.
                        elseif (PaymentAcknowledged is FALSE)
                            decline the request and clean LOCAL STORAGE.
        */
        this.setState({
            loading: true
        });
        setTimeout(()=>{
            this.setState({
            loading: false
        });
        }, 3000)
    }
    
    handleChange(e){
        this.setState({
            paymentID: e.target.value
        });
    }
    
    render(){
        const state = this.state;
        const { Step } = Steps;
        return(
                <div className="responsiveBox">
                    <div className="box">
                        <div className="outline">
                            <h2>Journey</h2>
                            <h4>from: {state.journey.from}</h4>
                            <h4>to: {state.journey.to}</h4>
                        </div>
                        <div className="outline">
                            <h2>Travellers</h2>
                            <TravelDetails travellers={state.travellers}/>
                        </div>
                    </div>
                    <div className="box">
                        <h4>Enter Transaction ID to get your group.</h4>
                        <Space>
                            <Input placeholder="transaction number" name="PaymentTransactionID" onChange={this.handleChange} />
                            <Button type="primary" icon={<DollarCircleOutlined />} loading={this.state.loading} onClick={()=>{this.onSubmit()}}>Check</Button>
                        </Space>
                        <Space>
                            <Steps direction="vertical" size="small" current={1}>
                                <Step title="Finished" description="Checking for Payment Confirmation" />
                                <Step title="In Progress" description="Generating Group ID." />
                                <Step title="Waiting" description="Click here to login to portal." />
                            </Steps>
                        </Space>
                    </div>
                </div>
        );
    }
}

export default Group;

class TravelDetails extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const travellers = this.props.travellers;
        return(
            <div>
                {
                    travellers.map((user,index) => {
                                const content = (
                                    <div>
                                        <p>Mail ID : {user.email}</p>
                                        <p>Age : {user.age}</p>
                                    </div>
                                );
                                return(
                                    <Popover content={content} title={index+1} trigger="hover">
                                        <h4>{user.name}</h4>
                                    </Popover>
                                )
                            })
                }
            </div>
        )
    }
}


/**
<div>
    <h2>First, check these in the background.</h2>
    <ol>
        <li><a>Check if the payment has been received.</a><h3>{this.state.payment}</h3></li>
        <li><a>Calculate.</a></li>
    </ol>
    <h4>Get to know your group.</h4>
</div>
*/

