import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [
                    <li key="login"><a href="/auth/google">Login</a></li>,
                    <li key="signup"><Link to="/SignUp">Sign Up</Link></li>
                ];
            default:
                return [
                    <li key="lists"><Link to="/MyMemeMotes">My MemeMotes</Link></li>,
                    <li key="createList"><Link to="/Upload">Upload</Link></li>,
                    <li key="logout"><a href="/api/logout">Logout</a></li>
                ];
        }
    }

    render () {
        return (
            <nav className="blue">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">MemeMote</Link>
                        <a href="" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {this.renderContent()}
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            {this.renderContent()}
                        </ul>
                    </div>
                </div>    
            </nav>        
        );
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);