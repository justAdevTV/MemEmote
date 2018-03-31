import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-materialize';

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
                    <li key="posts"><Link to="/Posts">My Posts</Link></li>,
                    <li key="reactedmemes"><Link to="/ReactedMemes">My Reacted Memes</Link></li>,
                    <li key="createList">
                        <Modal
                            header='Modal Header'
                            trigger={<Button>Upload</Button>}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </Modal>
                    </li>,
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