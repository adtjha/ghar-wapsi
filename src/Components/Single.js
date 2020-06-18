import React from 'react';

import { Typography } from 'antd';

import { Link } from "react-router-dom";

import { Layout } from 'antd';

import Screens from './Screens';


import 'antd/dist/antd.css';
import '../App.css';

import Login from './Login';
import Journey from './Journey';
import TravellerDetails from './_Traveller';
import Group from './Group';

function Single(){
    const { Title } = Typography;
    const { Header, Footer, Sider, Content } = Layout;
//    const { Step } = Steps;
    const steps = [
          {
            title: 'Journey',
            content: <Journey />,
          },
          {
            title: 'Travellers',
            content: <TravellerDetails />,
          },
          {
            title: 'Pay',
            content: Pay(),
          },
          {
            title: 'Group',
            content: <Group />,
          },
        ];
    
    return (
        <div className="body">
            <Layout>
                <Header>
                    <Title>Single Traveller</Title>
                    <Link to="/">Go to Home.</Link>
                </Header>
                <Content>
                    <Title level={4}>Follow the below process to get your group.</Title>
                        <Screens steps={steps}/>
                </Content>
                <Footer>
                    <Title level={4}>Made with &hearts; by  <a href="https://www.google.com/search?q=adtjha">adtjha</a>.</Title>
                </Footer>
            </Layout>
        </div>
           
    );
}

export default Single;
                        
function Pay(){
    return (
        <div>
            <h3>Add extension from Payment Handler Merchant.</h3>
            <h4>Pay here for the service and the platform being used.</h4>
        </div>
    );
};
            
     