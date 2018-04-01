import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Row, Col } from 'react-materialize';
import WebcamCapture from './WebcamCapture';
import MemeCard from './MemeCard';

import { fetchCards } from '../actions';

class Landing extends Component {

    componentDidMount() {
        this.props.fetchCards();
    }

    renderCards(){
        return _.map(this.props.cards, card => {
            const link = `/cards/${card._id}`;
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
        });
    }

    render() {
        return (
            <div className="container">
                <Row>
                    <Col m={7}>
                        <h3>Embrace your Memotions</h3>
                        {this.renderCards()}
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
    console.log({cards});
    return {cards};
}

export default connect(mapStateToProps, {fetchCards})(Landing);