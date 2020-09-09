import React, { Component } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <nav className="align-items-end bg-dark d-flex navbar navbar-dark navbar-expand-lg">
                <div className="navbar-brand d-flex align-items-end">
                    <img className="nav-icon" src={require('../../../assets/icons/video-camera.svg')} alt="" />
                    <NavLink to="/" className="ml-2 nav-logo">MovieGram</NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ml-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/vote" className="nav-link">Vote</NavLink>
                        <NavLink to="/leaderboard" className="nav-link">Leaderboard</NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar;