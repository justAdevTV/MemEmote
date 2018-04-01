import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchCard } from '../actions';
import MemeCard from './MemeCard';

class Post extends Component {
    
    componentDidMount() {
        const url = this.props.match.params.id;
        this.props.fetchCard(url);
    }

    renderMemeCard() {
        const card = this.props.cards;
        const link = `/posts/${card._id}`;
        <MemeCard
            key={card._id}
            img={card.img}
            date={card.date}
            author={card.author}
            score={card.score}
            numReview={card.numReviews}
            href={link}>
        </MemeCard>
    }

    render() {
        return (
            <div>
                {this.renderMemeCard()}
            </div>
        );  
    }
}

function mapStateToProps({cards}) {
    return {cards};
}

export default connect(mapStateToProps, { fetchCard })(Post);
