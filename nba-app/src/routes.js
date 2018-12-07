import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


/**
 * Components
 */
import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';


export default class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Layout>
        )
    }
}
