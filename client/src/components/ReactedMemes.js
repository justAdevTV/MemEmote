import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardTitle } from 'react-materialize';

class ReactedMemes extends Component {
    render() {
        return (
            <div class="container">
                <Row>
                    <Col m={7} style={styles.TitleStyle} className='grid-example'>Reacted Memes</Col>
                </Row>
                <Row>
                    <Col m={3}></Col>
                    <Col m={3}>
                        <Link to="/Posts">My Posts</Link>
                    </Col>
                    <Col m={3} style={styles.ReactedMemesStyle}>
                        ReactedMemes                      
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
            </div>
            
        );
    }
}

const styles = {
    HeaderStyle: {
        height: 300,
        width: 300
    },
    TitleStyle: {
        fontSize: 40
    },
    ReactedMemesStyle: {
        textDecoration: 'underline'
    }
}

export default ReactedMemes;