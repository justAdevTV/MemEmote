import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import WebcamCapture from './WebcamCapture';

class Landing extends Component {
    render() {
        return (
            <div>
                <h1>Landing Page from React</h1>
                <WebcamCapture />
            </div>
        );
    }
}

export default Landing;