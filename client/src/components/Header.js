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
                            header='Upload a Meme'
                            trigger={<Button>Upload</Button>}>
                            <p>Insert a URL</p>
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