import React, { Component, useState, useEffect } from 'react';

import { Menu, Space, Input, Button, Form, Divider, Upload, message } from 'antd';
import { DollarCircleOutlined, UploadOutlined } from '@ant-design/icons';


import { Typography } from 'antd';

import 'antd/dist/antd.css';
import '../App.css';

import './Admin_Components/admin.css';

const { SubMenu } = Menu;

const FormEntry = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();
  
  useEffect(() => {
    forceUpdate({});
  }, []);
  
  const onFinish = values => {
    console.log('Finish:', values.payment);
  };
  
  return(
    <div>
      <Space>
        <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
          <Form.Item name={['payment', 'transactionID']} >
            <Input placeholder="transaction number" />
          </Form.Item>
          <Form.Item name={['payment','transactionAmt']} >
            <Input placeholder="transaction amount" />
          </Form.Item>
          <Form.Item name={['payment','transactionCount']} >
            <Input placeholder="paid for" />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="primary"
                icon={<DollarCircleOutlined />}
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  form.getFieldsError().filter(({ errors }) => errors.length).length
                }
              >
                Add Transaction
              </Button>
            )}
          </Form.Item>
        </Form>
      </Space>
      <Divider/>
      <Upload>
        <Button>
          <UploadOutlined /> Click to Upload
        </Button>
      </Upload>
    </div>
  );
};

class Admin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current: 'mail'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  
  render(){
    const { Title } = Typography;
    return(
      <div className="admin">
        <Title>Admin's area</Title>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="money" icon={<DollarCircleOutlined />}>
            Transactions
          </Menu.Item>
        </Menu>
        <br/><br/>
        <FormEntry />
      </div>
    );
  }
}

export default Admin;