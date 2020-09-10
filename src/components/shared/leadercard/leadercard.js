import React from 'react';
import './leadercard.css'
export const Leadercard = (props) => {
    return (
        <div className="leader-card shadow">
            <div>
                <div className="d-flex align-items-center">
                    <img className="leader-card-image"
                        src={props.movie.posterurl}
                        alt="" />
                    <div className="d-flex flex-column ml-4 align-items-start">
                        <span>Title : {props.movie.title}</span>
                        <span>Year : {props.movie.year}</span>
                        <div className="d-flex">Actors : {props.movie.actors.map(actor => <span className="mr-2">{actor}</span>,)}</div>
                    </div>
                    <span className="ml-auto">Votes : {props.movie.votes}</span>
                </div>
            </div>
        </div>
    )
}