import React, { Component } from 'react'

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: ''
        }
        this.fillForm = this.fillForm.bind(this)
    }

    fillForm(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
        <div className = 'container w-50 m-3 p-3'>
            <form>
                <div className="form-group">
                    <label>Firstname</label>
                    <input type="text" onChange = {(event) => {this.fillForm(event)}} className="form-control" name = 'firstname' placeholder="Firstname" value = {this.state.firstname}/>
                </div>
                <div className="form-group">
                    <label>Lastname</label>
                    <input type="text" onChange = {(event) => {this.fillForm(event)}} className="form-control outline-succsess" name = 'lastname' placeholder="Lastname" value = {this.state.lastname}/>
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="text" onChange = {(event) => {this.fillForm(event)}} className="form-control outline-succsess" name = 'email' placeholder="E-mail" value = {this.state.email}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-success" type = 'submit' onClick = {(event) => {this.props.submit(event, this.state)}} name = 'submit'>Submit</button>
                </div>
                
            </form>
        </div>
        )
    }

}

export default RegisterForm