import React from 'react';

import { Typography } from 'antd';

import { Link } from "react-router-dom";

import { Layout } from 'antd';

import Screens from './Screens';


import 'antd/dist/antd.css';
import '../App.css';

function Multiple(){
    const { Title } = Typography;
    const { Header, Footer, Sider, Content } = Layout;
//    const { Step } = Steps;
        const steps = [
          {
            title: 'Login',
            content: 'Login here, and confirm your group.',
          },
          {
            title: 'Location',
            content: 'Enter your current Location. Starting point of your journey.',
          },
          {
            title: 'Details',
            content: 'Details of all the Passengers that are travelling with you.',
          },
          {
            title: 'Destination',
            content: 'Enter your destination, place where you want to travel to, end point of your journey.',
          },
          {
            title: 'Pay',
            content: 'Pay here for the service and the platform being used.',
          },
          {
            title: 'Group',
            content: 'Get to know your group.',
          },
        ];
    
    return (
        <div className="body">
            <Layout>
                <Header>
                    <Title>Multiple Travellers</Title>
                    <Link to="/">Go to Home.</Link>
                </Header>
                <Content>
                    <Title level={4}>Follow the below process to get your group.</Title>
                        <Screens steps={steps}/>
                </Content>
                <Footer>
                    <Title level={4}>Made with &hearts; by  <a href="https://www.google.com/search?q=adtjha">chacha</a>.</Title>
                </Footer>
            </Layout>
        </div>
           
    );
}

export default Multiple;


