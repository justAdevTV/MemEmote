import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Card, CardTitle, Icon } from 'react-materialize';

class MemeCard extends Component {

    render() {

        if (this.props.score === undefined) {
            return 'Loading...'
        }

        const {suprise, sorrow, neutral,anger,joy} = this.props.score;

        let author = 'Uploaded by '
        if (this.props.author !== undefined ) {
            author +=  this.props.author;
        } else {
            author += ' Anon';
        }

        return (
            <div>
                <Card header={<CardTitle image={this.props.img} waves='light'/>}
                    title={author}>
                    <div className="right">
                        <span><Icon small>sentiment_very_satisfied</Icon>{suprise}</span>
                        <span><Icon small>sentiment_satisfied</Icon>{joy}</span>
                        <span><Icon small>sentiment_neutral</Icon>{neutral}</span>
                        <span><Icon small>sentiment_dissatisfied</Icon>{sorrow}</span>
                        <span><Icon small>sentiment_very_dissatisfied</Icon>{anger}</span>
                    </div>
                    <p><Link to={this.props.href}>View Meme</Link></p>
                </Card>
                <br/>
            </div>
        );
    }

}

export default MemeCard;
