import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../home';

class routes extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path="/" component={HomePage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default routes;