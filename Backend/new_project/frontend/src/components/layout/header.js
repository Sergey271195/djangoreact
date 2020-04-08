import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-success m-0 p-3">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">React</a>
                    <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">News </a>
                        </li>
                    </ul>
                        <div className = 'mr-3'>{this.props.logged_in && 'Sergey'}</div>
                    <button type="button" onClick = {(event) => {this.props.login(event)}} className="btn btn-dark mr-2" style = {{width: '7vw'}} name = {this.props.logged_in ? 'logout': 'login'}>{this.props.logged_in ? 'Log Out': 'Log In'}</button>
                    <button type="button" onClick = {(event) => {this.props.register(event)}} className="btn btn-dark" style = {{width: '7vw'}} name = 'register'>Register</button>
                </div>
            </nav>
        )
    }
}

export default Header