import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Row, Col } from 'react-materialize';

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
                            className='medium'
                            header={<CardTitle style={styles.HeaderStyle} image='https://img-9gag-fun.9cache.com/photo/aBx2xpz_460swp.webp'></CardTitle>}
                            actions={[<a href='#'>This is a Link</a>]}>
                            Card Title
                        </Card>
                    </Col>
                </Row>
                
                {/* TODO: Make */}
            </div>
        );
    }
}

const styles = {
    HeaderStyle: {
        height: 300,
        width: 300
    }
}

export default Landing;