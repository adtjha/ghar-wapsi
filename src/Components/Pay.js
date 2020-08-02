import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../App.css';

import src from './Child_Components/QRCode';

import { message, Input, Button, Space } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';

class Pay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            charge: 0
        }
        this.serviceCharge = '';
        this.travellers = {};
    }
    
    componentDidMount(){
        console.log(this.props.charge);
        this.serviceCharge = this.props.charge;
        this.travellers = JSON.parse(localStorage.getItem('travellers'));
        const count = this.travellers.travellers.length;
        const charge = count * this.serviceCharge;
        this.setState({charge});
    }
    
    render(){
        return(
            <div className="responsiveBox">
                <div className="box">
                    <img src={src} />
                </div>
                <div className="box">
                    <h3>Total Service Charge Payable : {this.state.charge}</h3>
                    <code>Pay the above amount and wait for 24 hours, before proceeding to the next page. Do not worry, your data has been saved to your local storage. The next time you visit this page, the data will still be there.</code>
                    <br />
                    <h4><code>JUST DON'T CLEAR YOUR LOCAL STORAGE.</code></h4>
                </div>
            </div>
        );
    }
}

export default Pay