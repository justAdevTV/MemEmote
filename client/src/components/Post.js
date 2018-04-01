import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchCard } from '../actions';
import MemeCard from './MemeCard';

import { Row, Col } from 'react-materialize';
import WebcamCapture from './WebcamCapture';

class Post extends Component {
    
    componentDidMount() {
        const url = this.props.match.params.id;
        this.props.fetchCard(url);
    }

    renderMemeCard() {
        const card = this.props.cards;
        if (!card) {
            return <div>Loading...</div>;
        } else {
            const link = `/posts/${card._id}`;
            return (
                <MemeCard
                    key={card._id}
                    img={card.img}
                    date={card.date}
                    author={card.author}
                    score={card.score}
                    numReview={card.numReviews}
                    href={link}>
                </MemeCard>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <Row>
                    <Col m={7}>
                        <h3>Rate This Meme</h3>
                        {this.renderMemeCard()}
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

function mapStateToProps({cards}) {
    return {cards};
}

export default connect(mapStateToProps, { fetchCard })(Post);
