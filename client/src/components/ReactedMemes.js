import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-materialize';

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
            </div>
            
        );
    }
}

const styles = {
    TitleStyle: {
        fontSize: 40
    },
    ReactedMemesStyle: {
        textDecoration: 'underline'
    }
}

export default ReactedMemes;