import React, { Component } from 'react';
import { Route, Switch ,Redirect} from 'react-router-dom';
import Navbar from '../../components/shared/Navbar';
import Vote from '../../components/votes';
import Leaderboard from '../../components/leaderboard';
class home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <main>
                    <Switch>
                        <Route path="/vote" component={Vote} />
                        <Route path="/leaderboard" component={Leaderboard} />
                        <Redirect to="/vote" from="/" />
                    </Switch>
                </main>
            </div>
        );
    }
}
export default home;