import React, { Component } from 'react';
import { Leadercard } from '../shared/leadercard/leadercard';
import { getLeaderBoard } from '../../store/actions/movies.action'
import { connect } from 'react-redux';
import './leaderboard.css'
class Leaderboard extends Component {
    componentDidMount() {
        this.getLeaderBoardData();
    }

    getLeaderBoardData() {
        let data = {
            genres: this.props.genreSelected,
            language: this.props.languageSelected
        }
        this.props.getLeaderBoard(data);
    }
    render() {
        const { leaderboard } = this.props;
        return (
            <div className="container leader-board">
                <div className="leader-head-text text-left">Leaderboard</div>
                {
                    leaderboard.map((lead, i) => < Leadercard key={i} movie={lead} />)
                }
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        allMovies: state.movieReducer.allMovies,
        leaderboard: state.movieReducer.leaderboard,
        genreSelected: state.movieReducer.genreSelected,
        languageSelected: state.movieReducer.languageSelected,
        voteEnable: state.movieReducer.voteEnable,
    }
}
const mapDispatchToProps = {
    getLeaderBoard
}
export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);