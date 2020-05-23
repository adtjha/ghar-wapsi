import React from 'react';

import { Input } from 'antd';

import { Row, Col } from 'antd';

import 'antd/dist/antd.css';
import './Styles/Journey.css';
import '../App.css';

const Journey = () => {
    
    var from="", to="";
    
    return(
        <div className="responsiveBox">
            <div className="from tab">
                <div className="from entry">
                    <h2>From</h2>
                    <Input placeholder="Current Area Pincode" onChange={(e)=>{var size = e.target.value/100000;if(size >= 1 && size < 10){console.log(e.target.value);from = e.target.value;}}} />
                </div>
                <div className="to entry">
                    <h2>To</h2>
                    <Input placeholder="Destination Area Pincode" onChange={(e)=>{var size = e.target.value/100000;if(size >= 1 && size < 10){console.log(e.target.value);to = e.target.value;}}} />
                </div>
            </div>
            <div className="to tab">
                <div className="from display">
                    <h2>From</h2>
                    <getAddress pin={from}/>
                </div>
                <div className="to display">
                    <h2>To</h2>
                    <getAddress pin={to}/>
                </div>
            </div>
        </div>
    );

    
    function getAddress(props){
    return (
        <h4>Your Pincode is {props.pin}</h4>
    );
}

}

export default Journey;