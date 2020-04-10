import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-success m-0 p-3">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <a className="navbar-brand" href="#">React</a>
                    <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">News </a>
                        </li>
                    </ul>
                    <Link to='/login'>
                        <button type="button" className="btn btn-dark mr-2" style = {{width: '7vw'}}>Login</button>
                    </Link>
                    <Link to='/register'>
                        <button type="button" className="btn btn-dark" style = {{width: '7vw'}} name = 'register'>Register</button>
                    </Link>
                </div>
            </nav>
        )
    }
}

export default Header