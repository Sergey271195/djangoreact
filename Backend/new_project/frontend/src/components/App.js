import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from './layout/header';
import MyInfo, { ToDoItem } from './layout/content';
import Footer from './layout/footer.js'
import RegisterForm from './layout/register'

class App extends Component {

    constructor() {
        super()
        this.state = {
            logged_in: false,
            register: false,
            user: null
        }
        this.logIn = this.logIn.bind(this)
        this.register = this.register.bind(this)
    }

    logIn(event) {
            this.setState(prevState => {
                return {
                    logged_in: !prevState.logged_in
                }
            })
    }

    register(event, values) {
        console.log(values)
        const name = event.target.name
        this.setState(prevState => {
            const reg = name == 'register'
            return {
                register: reg,
                user: values
            }
        })
    }

    render() {
        return (<div>
            <Header logged_in = {this.state.logged_in} login = {this.logIn} register = {this.register}/>
            {this.state.register ? <RegisterForm submit = {this.register}/>: <MyInfo user = {this.state.user}/>}
            {/* <Footer /> */}
        </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('app'))