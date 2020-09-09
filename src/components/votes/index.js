import React, { Component } from 'react';
import { getMovies } from '../../store/actions/movies.action';
import { MovieCards } from '../shared/moviecard/moviecard'
import './votes.css'
class Votes extends Component {
    state = {
        allMovies: []
    }
    componentDidMount() {
        getMovies(null, (res) => {
            if (res) {
                this.setState({ allMovies: res.movies })
            }
        });
    }
    render() {
        let cards = (
            <div className="d-flex cards">
                {
                    this.state.allMovies.map((movie, i) =>
                        <MovieCards key={i} movie={movie} />
                    )
                }
            </div>
        )
        return (
            <div className="container">
                {cards}
            </div>
        );
    }
}
export default Votes;