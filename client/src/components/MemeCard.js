import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardTitle } from 'react-materialize';

class MemeCard extends Component {

    

    render() {
        return (
            <Card header={<CardTitle image={"img/office.jpg"} waves='light'/>}
                title="Card Title"
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                <p><a href="#">This is a link</a></p>
            </Card>
        );
    }

}

export default connect()(MemeCard);
