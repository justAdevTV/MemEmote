import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Row, Col } from 'react-materialize';
import WebcamCapture from './WebcamCapture';

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <Row>
                    <Col m={7}>
                        <h3>Embrace your Memotions</h3>
                    </Col>
                </Row>
                <Row>
                    <Col m={3}></Col>
                    <Col m={6}>
                        <Card
                            header={<CardTitle image='https://img-9gag-fun.9cache.com/photo/aBx2xpz_460swp.webp'></CardTitle>}
                            actions={[<a href='#'>This is a Link</a>]}>
                            Card Title
                        </Card>
                        <WebcamCapture />
                    </Col>
                </Row>
                <Row>
                    <Col m={3}></Col>
                    <Col m={6}>
                        <Card
                            header={<CardTitle image='https://img-9gag-fun.9cache.com/photo/argMbD0_460swp.webp'></CardTitle>}
                            actions={[<a href='#'>This is a Link</a>]}>
                            Card Title
                        </Card>
                    </Col>
                    <Col m={3}></Col>
                </Row>
            </div>
        );
    }
}



export default Landing;