import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Row, Col } from 'react-materialize';
import WebcamCapture from './WebcamCapture';
import MemeCard from './MemeCard';

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <Row>
                    <Col m={7}>
                        <h3>Embrace your Memotions</h3>
                        <MemeCard />
                    </Col>
                    <Col offset="m1" m={4} className="center">
                        <br/><br/><br/><br/><br/><br/>
                        <WebcamCapture />
                        <br/>
                        <p>Check out your own Memotion by clicking the button above.</p>
                    </Col>
                </Row>
            </div>
        );
    }
}



export default Landing;