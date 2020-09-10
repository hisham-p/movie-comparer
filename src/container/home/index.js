import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from '../../components/shared/Navbar';
import Vote from '../../components/votes';
import Leaderboard from '../../components/leaderboard';
import Preference from '../../components/preferences';
class home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <main>
                    <Switch>
                        <Route path="/preference" component={Preference} />
                        <Route path="/vote" component={Vote} />
                        <Route path="/leaderboard" component={Leaderboard} />
                        <Redirect to="/preference" from="/" />
                    </Switch>
                </main>
            </div>
        );
    }
}
export default home;