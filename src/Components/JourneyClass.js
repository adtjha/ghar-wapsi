import React  from 'react';

import { Input } from 'antd';

import { Row, Col } from 'antd';

import 'antd/dist/antd.css';
import './Styles/Journey.css';
import '../App.css';

class Journey extends React.Component {
    constructor(){
        super();
        this.state = {
            from:"",
            to:""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    
    render(){
       return(
         <div className="responsiveBox">
            <div className="from tab">
                <div className="from entry">
                    <h2>From</h2>
                    <Input placeholder="Current Area Pincode" name="from" onChange={this.handleChange} />
                </div>
                <div className="to entry">
                    <h2>To</h2>
                    <Input placeholder="Destination Area Pincode" name="to" onChange={this.handleChange} />
                </div>
            </div>
            <div className="to tab">
                <div className="from display">
                    <h2>From</h2>
                    <h4>{this.state.from}</h4>
                </div>
                <div className="to display">
                    <h2>To</h2>
                    <h4>{this.state.to}</h4>
                </div>
            </div>
        </div>
       );
    }
}

export default Journey;


//                    <getAddress pin={this.state.from}/>
//                    <getAddress pin={this.state.to}/>

//getAddress(e){
//        if(e){
//            return (
//            <h4>Your Pincode is {e.pin}</h4>
//            );
//        }
//        else{
//            return(
//                <h4>Enter Pincode.</h4>
//            );
//        }
//    }    