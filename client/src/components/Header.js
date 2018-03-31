import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { NavItem, Navbar } from 'react-materialize';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [
                    <NavItem key="login"><a href="/auth/google">Login</a></NavItem>,
                    <NavItem key="lists"><Link to="/lists">Lists</Link></NavItem>
                ];
            default:
                return [
                    <NavItem key="lists"><Link to="/lists">Lists</Link></NavItem>,
                    <NavItem key="createList"><Link to="lists/create">Create List</Link></NavItem>,
                    <NavItem key="myAccount"><Link to="myAccount">My Account</Link></NavItem>,
                    <NavItem key="logout"><a href="/api/logout">Logout</a></NavItem>
                ];
        }
    }

    render() {
        return (
            <Navbar brand='MemeMote' right>
                {this.renderContent()}
            </Navbar>
        );
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);