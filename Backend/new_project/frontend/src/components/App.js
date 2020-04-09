import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from './layout/header';
import MyInfo, { ToDoItem } from './layout/content';
import Footer from './layout/footer.js'
import RegisterForm from './layout/register'
import { Provider } from 'react-redux'
import store from '../store'
import ToDoList from './layout/todolist'
import {Switch, HashRouter as Router, Route, Link} from 'react-router-dom'


class App extends Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            logged_in: false,
            register: false,
            user: {
                firstname: 'Anonymus',
                lastname: '',
                email: ''
            }
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


    componentDidMount() {
        fetch('/api/')
            .then(response => response.json())
                .then(data => {this.setState({tasks_data: data})})       
    }

    render() {
        return (
            <div>
            <Provider store = {store}>
        <Fragment>
            <Router>
                <Switch>
                    <Route exact path = '/' component = {ToDoList}/>

                </Switch>
            </Router>
        </Fragment>
        </Provider>
        </div>     
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'))

{/* <Header logged_in = {this.state.logged_in} login = {this.logIn} register = {this.register}/>
            {this.state.register ? <RegisterForm submit = {this.register}/>: <MyInfo user = {this.state.user}/>}
            <ToDoList data = {this.state.tasks_data} /> */}