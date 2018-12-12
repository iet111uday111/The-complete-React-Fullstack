import React, { Component } from 'react';


import './layout.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';


export default class Layout extends Component {

    state = {
        showNav: false
    }

    toggleSidenav = (action) => {
        this.setState({
            showNav: action
        })
    }

    render() {
        return (
            <div>
                <Header
                    user={this.props.user}
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleSidenav(false)}
                    onOpenNav={() => this.toggleSidenav(true)}
                />
                <div style={{
                    minHeight: "calc(185vh - 70px)"
                }}>{this.props.children}</div>
                <Footer />
            </div>
        )
    }
}
