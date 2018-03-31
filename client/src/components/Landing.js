import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardTitle } from 'react-materialize';

class Landing extends Component {
    render() {
        return (
            <div className="container" >
                <h3>Embrace your Memotions</h3>
                <Card
                    header={<CardTitle reveal image={"https://img-9gag-fun.9cache.com/photo/aBx2xpz_460swp.webp"} waves='light'/>}
                    title="Card Title"
                    reveal={<p>Should be data from shit</p>}>
                    <p><a href="#">Link to person's profile</a></p>
                </Card>
                {/* TODO: Make */}
            </div>
        );

        const styles = {
            CardStyle: {
                height: 100,
                width: 100
            }
        }
    }

}

export default Landing;