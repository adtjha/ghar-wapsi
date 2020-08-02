import React from 'react';

import { Steps } from 'antd';

import { message, Input, Popover, Button, Space } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import '../App.css';

class Group extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            paymentID: '',
            loading: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.stepChange = this.stepChange.bind(this);
        this.travellers = JSON.parse(localStorage.getItem('travellers'));
        this.journey = JSON.parse(localStorage.getItem('journey'));
        this.current = 0;
        this.steps = [
            {
                title: 'Check Payment',
                description: 'Checking for payment reception.',
                status: 'process'
            },
            {
                title: 'Generate Group',
                description: 'Creating group and generating group_id.',
                status: 'wait'
            },
            {
                title: 'Portal Login',
                description: 'Login to portal, using your transaction id.',
                status: 'wait'
            }
        ];
    }
  
    componentDidMount(){
      this.steps.map(e => {
        e.status = 'wait'
      });
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
            message.success({content: 'Yeah, we have recieved your payment.'});
            this.current+=2;
            this.forceUpdate();
            this.setState({
            loading: false
        });
        }, 3000);
        
        
    }
    
    stepChange(){
      console.log(this.current);
    }
    
    handleChange(e){
        this.setState({
            paymentID: e.target.value
        });
    }
    
    render(){
        const state = this.state;
        const current = this.current;
        const { Step } = Steps;
        const steps = this.steps;
        const journey = this.journey;
        const travellers = this.travellers.travellers;
        return(
                <div className="responsiveBox">
                    <div className="box">
                        <div className="outline">
                            <h2>Journey</h2>
                            <h4>from: {journey.from}</h4>
                            <h4>to: {journey.to}</h4>
                        </div>
                        <div className="outline">
                            <h2>Travellers</h2>
                            <TravelDetails travellers={travellers}/>
                        </div>
                    </div>
                    <div className="box transact">
                        <h4>Enter Transaction ID to get your group.</h4>
                        <Space>
                            <Input placeholder="transaction number" name="PaymentTransactionID" onChange={this.handleChange} />
                            <Button type="primary" icon={<DollarCircleOutlined />} loading={this.state.loading} onClick={this.onSubmit}>Check</Button>
                        </Space>
                        <Space>
                            <Steps direction="vertical" size="small" current={current} onChange={this.stepChange}>
                                {steps.map(item => (
                                    <Step title={item.title} description={item.description} />
                                ))}
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


