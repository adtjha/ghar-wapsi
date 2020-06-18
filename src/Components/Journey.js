import React  from 'react';

import { Input } from 'antd';

import { Row, Col } from 'antd';

import 'antd/dist/antd.css';
import './Styles/Journey.css';
import '../App.css';

import GetAddress from './Child_Components/GetAddress'

class Journey extends React.Component {
    constructor(props){
        super(props);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.state = JSON.parse(localStorage.getItem('journey')) || {
            from:'',
            to: ''
        };
    }
    
//    validatePin(e){
//        const num=e/100000;
//        return (num>1&&num<10)?true:false;
//    }
    
    StoreLocal(state){
        localStorage.setItem('journey', JSON.stringify(state));
        this.forceUpdate();
    }
    
    handleFromChange(pin) {
//        if(this.validatePin(pin)){            
            const to = this.state.to;
            this.setState({from: pin, to});
            setTimeout(()=>{this.StoreLocal(this.state)}, 1000);
//        } else { return }
    }
    
    handleToChange(pin) {
//        if(this.validatePin(pin)){         
            const from = this.state.from;
            this.setState({to: pin, from});
            setTimeout(()=>{this.StoreLocal(this.state)}, 1000);
//        } else { return }
    }
    
    render(){
        var i = 0;
        const from = 'From';
        const to = 'To';
//        window.alert(i++);
        return(
         <div className="responsiveBox">
            <div className="tab">
                <InputTab direction={from} pin={this.state.from} onChange={this.handleFromChange} />
                <InputTab direction={to} pin={this.state.to} onChange={this.handleToChange} />
            </div>
            <div className="tab">
                <DisplayTab direction={from} pin={this.state.from} />
                <DisplayTab direction={to} pin={this.state.to} />
            </div>
        </div>
       );
    }
}

export default Journey;

class InputTab extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.props.onChange(e.target.value);
    }
    
    render(){
        const direction = this.props.direction;
        return(
            <div className="entry">
                <h2>{direction}</h2>
                <Input placeholder="Current Area Pincode" name={direction} defaultValue={this.props.pin} onChange={this.handleChange} />
            </div>
        );
    }
}


class DisplayTab extends React.Component {
    constructor(props) {
        super(props);
    }
    
    validatePin(e){
        const num=e/100000;
        return (num>1&&num<10)?true:false;
    }
    
    render(){
        return(
            <div className="display">
                <h2>{this.props.direction}</h2>
                {(this.validatePin(this.props.pin))?(<GetAddress pin={this.props.pin} />):(<h6>enter pincode to see change here.</h6>)} 
            </div>
        );
    }
}
