import React, { Component, Fragment } from 'react'


class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.fillForm = this.fillForm.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    fillForm(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    onSubmit(event) {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className = 'container mt-5'>
            <div className = 'row justify-content-center'>
            <div className = 'col-7 d-flex flex-column border-left border-success my-3 p-3 '>
            <h3 className = 'mb-3'>Login Form</h3>
            <form onSubmit = {this.onSubmit}>
                <div className="form-group">
                    <label className = 'h5'>Username</label>
                    <input type="text" onChange = {(event) => {this.fillForm(event)}} className="form-control outline-succsess" name = 'username' placeholder="Username" value = {this.state.username}/>
                </div>
                <div className="form-group">
                    <label className = 'h5'>Password</label>
                    <input type="text" onChange = {(event) => {this.fillForm(event)}} className="form-control outline-succsess" name = 'password' placeholder="Password" value = {this.state.password}/>
                </div>
                <div className="form-group mb-auto mt-2">
                    <button className="btn btn-success " type = 'submit' name = 'submit'>Submit</button>
                </div>    
            </form>
                </div>
            </div>
        </div>
        )
    }

}

export default LoginForm