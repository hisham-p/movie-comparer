import React from 'react';
import './moviecard.css'

export const MovieCards = (props) => {
    const vote = (id) => {
        props.vote(id)
    }
    return (
        <div className="card movie-card shadow">
            <img className="card-img-top card-image" src={props.movie.posterurl} alt="" />
            <div className="card-img-overlay">
                <h5 className="card-title movie-title">{props.movie.title}</h5>
            </div>
            <div className="card-body">
                <button className="btn btn-primary btn-vote" onClick={() => vote(props.movie.id)}>Vote</button>
            </div>
        </div>
    )
}