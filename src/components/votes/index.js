import React, { Component } from 'react';
import { getMovies, voteMovie } from '../../store/actions/movies.action';
import { MovieCards } from '../shared/moviecard/moviecard'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './votes.css'
class Votes extends Component {
    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        setTimeout(() => this.getPreferenceMovies(), 100);
    }

    getPreferenceMovies() {
        let data = { genres: this.props.genreSelected, language: this.props.languageSelected };
        this.props.getMovies(data);
    }

    vote = (id) => {
        if (this.props.voteEnable) {
            this.props.voteMovie(id);
        }
    }
    redirect = () => {
        this.props.history.push('/leaderboard')
    }

    render() {
        const { compareMovies } = this.props;
        let cards = (
            <div className="d-flex cards">
                {
                    compareMovies.map((movie, i) =>
                        <MovieCards key={i} movie={movie} vote={this.vote} />
                    )
                }
            </div>
        )
        return (
            <div className="container">
                {cards}
                <button className="btn btn-primary btn-finish" onClick={this.redirect}>Finish</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        allMovies: state.movieReducer.allMovies,
        compareMovies: state.movieReducer.compareMovies,
        genreSelected: state.movieReducer.genreSelected,
        languageSelected: state.movieReducer.languageSelected,
        voteEnable: state.movieReducer.voteEnable,
    }
}
const mapDispatchToProps = {
    getMovies,
    voteMovie
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Votes));