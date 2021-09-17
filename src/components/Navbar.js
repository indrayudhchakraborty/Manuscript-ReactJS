import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light ${props.mode} sticky-top`}>
                <div className="container-fluid">
                    <div className={`navbar-brand ${props.titleColor}`}>{props.title}</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <BrowserRouter>
                            <Link className={`nav-link ${props.titleColor}`} to="/">Home</Link>
                            <Link className={`nav-link ${props.titleColor}`} to="/about">About</Link>
                    </BrowserRouter>
                        <div class="form-check form-switch nav-link" style={{marginLeft: '40px'}}>
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                            <label class={`form-check-label ${props.titleColor}`} for="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title:  PropTypes.string.isRequired,
    newNote: PropTypes.string.isRequired
}
