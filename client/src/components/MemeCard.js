import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Card, CardTitle } from 'react-materialize';

class MemeCard extends Component {

    render() {

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
                    <p><Link to={this.props.href}>View Meme</Link></p>
                </Card>
                <br/>
            </div>
        );
    }

}

export default connect()(MemeCard);
