import React, { Component } from 'react'

class Footer extends Component {
    render() {
        let style = {
            position: 'absolute',
            bottom: '0',
            height: '5vh',
            width: '100vw'
        }
        return (
            <footer className = 'footer bg-light navbar-fixed-bottom mt-5'>
                <div className = 'container-fluid'>
                    Just standart Bootstrap footer
                </div>
            </footer>
        )
    }
}

export default Footer