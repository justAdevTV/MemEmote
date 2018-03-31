import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardTitle, Icon } from 'react-materialize';

class Posts extends Component {
    render() {
        return (
            <div class="container">
                <Row>
                    <Col m={7} style={styles.TitleStyle} className='grid-example'>My Posts</Col>
                </Row>
                <Row>
                    <Col m={3}></Col>
                    <Col m={3} style={styles.PostsStyle}>
                        My Posts
                    </Col>
                    <Col m={3}>
                        <Link to="/ReactedMemes">Reacted Memes</Link>                        
                    </Col>
                </Row>
                <Row>
                    <Col m={3} ></Col>
                    <Col m={6}>
                        <Card
                            className='medium'
                            header={<CardTitle style={styles.HeaderStyle} image='https://img-9gag-fun.9cache.com/photo/aBx2xpz_460swp.webp'></CardTitle>}
                            actions={[<a href='#'>This is a Link</a>]}>
                            Card Title
                        </Card>
                    </Col>
                    <Col m={1}>
                        <Icon> 
                            insert_delete_forever
                        </Icon>
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
    PostsStyle: {
        textDecoration: 'underline'
    }

}

export default Posts;