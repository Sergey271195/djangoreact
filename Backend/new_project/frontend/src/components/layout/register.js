import React, { Component, Fragment } from 'react'


class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            password: '',
            confirm_password: ''
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
        <div className = 'container'>
        <div className = 'row justify-content-center'>
        <div className = 'col-7 d-flex flex-column border-left border-success my-3 p-3 '>
            <h3 className = 'mb-3'>Register Form</h3>
            <form onSubmit = {this.onSubmit}>
                <div className="form-group">
                    <label className = 'h5'>Firstname</label>
                    <input type="text" onChange = {(event) => {this.fillForm(event)}} className="form-control" name = 'firstname' placeholder="Firstname" value = {this.state.firstname}/>
                </div>
                <div className="form-group">
                    <label className = 'h5'>Lastname</label>
                    <input type="text" onChange = {(event) => {this.fillForm(event)}} className="form-control outline-succsess" name = 'lastname' placeholder="Lastname" value = {this.state.lastname}/>
                </div>
                <div className="form-group">
                    <label className = 'h5'>Username</label>
                    <input type="text" onChange = {(event) => {this.fillForm(event)}} className="form-control outline-succsess" name = 'username' placeholder="Username" value = {this.state.username}/>
                </div>
                <div className="form-group">
                    <label className = 'h5'>E-mail</label>
                    <input type="text" onChange = {(event) => {this.fillForm(event)}} className="form-control outline-succsess" name = 'email' placeholder="E-mail" value = {this.state.email}/>
                </div>
                <div className="form-group">
                    <label className = 'h5'>Password</label>
                    <input type="text" onChange = {(event) => {this.fillForm(event)}} className="form-control outline-succsess" name = 'password' placeholder="Password" value = {this.state.password}/>
                </div>
                <div className="form-group">
                    <label className = 'h5'>Confirm Password</label>
                    <input type="text" onChange = {(event) => {this.fillForm(event)}} className="form-control outline-succsess" name = 'confirm_password' placeholder="Confirm Password" value = {this.state.confirm_password}/>
                </div>
                <div className="form-group mb-auto mt-2">
                    <button className="btn btn-success" type = 'submit' name = 'submit'>Submit</button>
                </div>    
            </form>
                </div>
            </div>
        </div>
        )
    }

}

export default RegisterForm