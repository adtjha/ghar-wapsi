import React  from 'react';

import { Popover, Button } from 'antd';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import '../Styles/Journey.css';
import '../../App.css';
                   
class GetAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const link = 'https://api.postalpincode.in/pincode/' + this.props.pin;
    fetch(link)
      .then(res => res.json())
      .then(
        (result) => {
          if(result[0].Status === 'Success')    
            {
              var data = result[0].PostOffice.find(e => (e.DeliveryStatus === 'Delivery'));
              this.setState({
                    isLoaded: true,
                    items: data
                });
            } else {
                this.setState({
                    isLoaded: true,
                    error : {
                        message: result[0].Message
                    }
                });
            }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    const content = (
        <div>
            <p>State : {items.State}</p>
            <p>Circle : {items.Circle}</p>
            <p>District : {items.District}</p>
            <p>Division : {items.Division}</p>
            <p>Region : {items.Region}</p>
            <p>Block : {items.Block}</p>
        </div>
    );
    if (error) {
      return <Button>Error: {error.message}</Button>;
    } else if (!isLoaded) {
      return <Spin indicator={antIcon} />;
    } else {
      return (
        <Popover content={content} title="Location" trigger="hover">
            <Button>{items.District} / {items.State}</Button>
        </Popover>
      );
    }
  }
}

export default GetAddress;

