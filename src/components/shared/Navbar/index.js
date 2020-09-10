import React, { Component } from 'react';
import './Navbar.css'
import { NavLink} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <nav className="align-items-end bg-dark d-flex navbar navbar-dark navbar-expand-lg fixed-top">
                <div className="navbar-brand d-flex align-items-end">
                    <img className="nav-icon" src={require('../../../assets/icons/video-camera.svg')} alt="" />
                    <NavLink to="/" className="ml-2 nav-logo">MovieGram</NavLink>
                </div>
            </nav >
        );
    }
}
export default Navbar;