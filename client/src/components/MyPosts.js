import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Row, Col } from 'react-materialize';
import MemeCard from './MemeCard';

import { fetchUserCards } from '../actions';

class MyPosts extends Component {
    componentDidMount() {
        this.props.fetchUserCards();
    }

    renderCards(){
        return _.map(this.props.cards, card => {
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
        });
    }

    render() {
        return (
            <div className="container">
                <Row>
                    <Col offset="m2" m={8}>
                        <h3>My Cards</h3>
                        {this.renderCards()}
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps({cards}) {
    return {cards};
}

export default connect(mapStateToProps, {fetchUserCards})(MyPosts);