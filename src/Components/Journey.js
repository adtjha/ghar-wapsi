import React from 'react';

import { Row, Col } from 'antd';

import 'antd/dist/antd.css';
import './Styles/Journey.css';
import '../App.css';

const Journey = () => {
    return(
        <div className="responsiveBox">
            <div className="from tab">
                <div className="from entry">
                    <h2>From</h2>
                    <input />
                </div>
                <div className="to entry">
                    <h2>To</h2>
                    <input />
                </div>
            </div>
            <div className="to tab">
                <div className="from display">
                    <h2>From</h2>
                    <h4>fetch and display address over here.</h4>
                </div>
                <div className="to display">
                    <h2>To</h2>
                    <h4>fetch and display destination address here.</h4>
                </div>
            </div>
        </div>
    );
}

export default Journey;
