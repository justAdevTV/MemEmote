import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardTitle, Icon, Modal, Button } from 'react-materialize';

class Posts extends Component {
    render() {
        return (
            <div className="container">
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
                    <Col m={3}></Col>
                    <Col m={6}>
                        <Card  
                            header={<CardTitle image='https://img-9gag-fun.9cache.com/photo/aBx2xpz_460swp.webp'></CardTitle>}
                            actions={[<Modal
                                    header='Confirm Delete'
                                    trigger={<Button style={styles.DeleteButtonStyle}>Delete</Button>}>
                                    <p>Are you sure you would like to delete this post?</p>
                                </Modal>]}>
                            Card Title
                        </Card>
                    </Col>
                    <Col m={3}></Col>
                </Row>
                <Row>
                    <Col m={3}></Col>
                    <Col m={6}>
                        <Card
                            header={<CardTitle image='https://img-9gag-fun.9cache.com/photo/argMbD0_460swp.webp'></CardTitle>}
                            actions={[<Modal
                                    header='Confirm Delete'
                                    trigger={<Button style={styles.DeleteButtonStyle}>Delete</Button>}>
                                    <p>Are you sure you would like to delete this post?</p>
                                </Modal>]}>
                            Card Title
                        </Card>
                    </Col>
                    <Col m={3}></Col>
                </Row>
            </div>
        );
    }
}

const styles = {
    TitleStyle: {
        fontSize: 40
    },
    PostsStyle: {
        textDecoration: 'underline'
    },
    DeleteButtonStyle: {
        backgroundColor: 'red'
    },
    ImgContainer: {
        display: 'block',
        width: 300
    }

}

export default Posts;