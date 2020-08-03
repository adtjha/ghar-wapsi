import React from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import './Styles/home.css';

import { Link } from "react-router-dom";

import { Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

function Home() {
  return (
    <React.Fragment>
      <Menu />
      <Typography className="body">
        <h1>Ghar <span>Wapsi</span>.</h1>
        <h3>Back to our homes.</h3>
        <Paragraph>
          We at Chacha Labs, are working towards a goal, that is to help the stranded migrant travel to their home place, by the mode of long route buses. We are building a platform to connect the stranded migrants and dividing them into groups of 20, and then they can connect with each other, and arrange their own travel.
        </Paragraph>
      </Typography>
    </React.Fragment>
  );
}

export default Home;


const Menu = () => {
  var menus = ['Register', 'Login', 'Contact', 'FAQ']
  return(
    <ul className="menu">
      {menus.map(item => 
        <MenuItem name={item} />
      )}
    </ul>
  )
}

const MenuItem = (props) => {
  const url = (word) => { return ('/'+word.toLocaleLowerCase().replace(/ /g, '_')+'/')};
  return(
    <li className="menu-item"><a href={url(props.name)}>{props.name}</a></li>
  )
}

/**
      <Typography>
            <Title>What are we ?</Title>
            <Paragraph>
              We at Chacha Labs, are working towards a goal, that is to help the stranded migrant travel to their home place, by the mode of long route buses. We are building a platform to connect the stranded migrants and dividing them into groups of 20, and then they can connect with each other, and arrange their own travel.
            </Paragraph>
            <Paragraph>
              You can register here, and pay the platform fee, and then we will assign you to a group. Group will have the following members,
      <br/>
                <ol>
                    <li><Link to="/manager/Travel">Travel Manager - 2.5% Fee of Total</Link></li>
                    <li><Link to="/manager/Pick-up & Drop-off">Pick-up & Drop-off Manager - 2.5% Fee of Total</Link></li>
                    <li><a> 02 Safety Manager - 5% Fee of Total</a></li>
                    <li><a> 04 Food Manager - 10% Fee of Total</a></li>
                    <li><a> 12 other Passengers - will provide rating.</a></li>
                </ol>
      
        <Text strong>
      Total Commission : 20% + 10% (Platform Fee) of Total = 30% of Total.<br/>
      "Total" here refers to the total cost of travel.<br/>          
      Getting a Confirmed Travel arranged is not Guaranteed.
              </Text>
            </Paragraph>
            <Title level={2}>Connect With Other Migrants.</Title>
            <Paragraph>
              We offer only services to individuals and groups of Passengers. Are you a ?
            </Paragraph>

            <Paragraph>
              <nav>
                  <ul>
                    <li>
                      <Link to="/single">Single Passenger</Link>
                    </li>
                    <li>
                      <Link to="/multiple">Multiple Passengers</Link>
                    </li>
                  </ul>
                </nav>
            </Paragraph>
        </Typography>
**/