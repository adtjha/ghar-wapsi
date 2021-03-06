import React from 'react';

import 'antd/dist/antd.css';
import './Styles/Screens.css';
import '../App.css';

import { Steps, Button, message } from 'antd';

const { Step } = Steps;


class Screens extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }
    
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    const steps = this.props.steps;
    return (
      <div>
        <Steps current={current} status={"process"} >
          {steps.map(item => (
            <Step title={item.title} icon={item.icon}  />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default Screens;