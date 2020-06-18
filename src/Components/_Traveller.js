import React from 'react';
import { message, Form, Input, InputNumber, Button, Popover, Radio, Space } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

import './Styles/Traveller.css';

class TravellerDetails extends React.Component {
    constructor(props){
        super(props);
        this.onFinish = this.onFinish.bind(this);
        this.removeThis = this.removeThis.bind(this);
        this.state = {
            travellers: []
        }
    }
    
    componentDidMount(){
        this.setState(JSON.parse(localStorage.getItem('travellers')));
    }
    
    storeLocal(state){
        localStorage.setItem('travellers', JSON.stringify(state));
        this.forceUpdate();
    }
    
    addThis(values){
        this.setState({travellers: [...this.state.travellers, values.user]});
        setTimeout(()=>{this.storeLocal(this.state);console.log(this.state.travellers);}, 1000);
    }
    
    onFinish(values){
        const key = values;
        const currentState = this.state;
        message.loading({content: 'Verifying the form entry.', key});
        if(this.verifyEntry(values)){
            setTimeout(() => {message.success({ content: 'Entry Successfully Stored!', key});this.addThis(values)}, 2000);
        } else {
            message.error({ content: 'Entry with similar details already present.', key});
        }
    };
    
    verifyEntry(value){
        const travellers = this.state.travellers;
        const entry = value.user;
        const isPresent = {
            aadharId: [],
            name: []
        }
        isPresent.aadharId = travellers.filter(user => user.aadharId == entry.aadharId);
        isPresent.name = travellers.filter(user => user.name == entry.name);
        if(isPresent.aadharId.length > 0 || isPresent.name.length > 0){
            console.log('present', isPresent);
            return false;
        } else {
            return true;
        }
    }
    
    removeThis(e){
        const currentState = this.state;
        const newState = {
            travellers: []
        }
        newState.travellers = currentState.travellers.filter( user => e!= user.name );
        this.setState(newState);
        message.success('Entry Deleted Succesfully', 1);
        setTimeout(()=>{this.storeLocal(this.state)}, 1000);
    }
        
    
    render(){
        const travellers = this.state.travellers;
        let display;
        if(travellers.length > 0){display=<DisplayTab travellers={travellers} onDelete={this.removeThis} />}
        else{display=<h6>enter details to see change here.</h6>}
        return(
            <div className='responsiveBox'>
                <div className='tab'>
                    <InputTab travellers={travellers} onChange={this.onFinish}/>
                </div>
                <div className='tab'>
                    {display}
                </div>
            </div>
        );
    }
}

const InputTab = (props) =>  {
    
    const [form] = Form.useForm();
    
    const onFinish = (e) => {
        props.onChange(e);
        form.resetFields();
    }
    
    const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
    
    return(
            <div>
                <Form {...layout} form={form} onFinish={onFinish}>
                    <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true  }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'contact']} label="Contact No" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="Age" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'aadharId']} label="Aadhar Id" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
};       

const DisplayTab = (props) => {
    
    const onDelete = (e) => {
        props.onDelete(e);
    }

    
    return(
            <div className="Traveldisplay">
                {
                    props.travellers.map((user,index) => {
                                const content = (
                                    <div>
                                        <p>Mail ID : {user.email}</p>
                                        <p>Age : {user.age}</p>
                                    </div>
                                );
                                return(
                                    <Popover content={content} title={index+1} trigger="hover">
                                        <Button><Space>{user.name} <CloseCircleOutlined onClick={()=>{onDelete(user.name)}}/></Space></Button>
                                    </Popover>
                                )
                            })
                }
                
            </div>
        );
};

export default TravellerDetails;
