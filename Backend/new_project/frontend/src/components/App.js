import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from './layout/header';
import MyInfo, { ToDoItem } from './layout/content';
import Footer from './layout/footer.js'
import RegisterForm from './layout/register'
import LoginForm from './layout/login'
import { Provider } from 'react-redux'
import store from '../store'
import ToDoList from './layout/todolist'
import {Switch, HashRouter as Router, Route, Link} from 'react-router-dom'
import DetailedView from './layout/detailedview'


class App extends Component {

    constructor(props) {
        super(props)
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
        <Provider store = {store}>
            <Fragment>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path = '/' component = {ToDoList}/>
                        <Route exact path = '/register' component = {RegisterForm}/>
                        <Route exact path = '/login' component = {LoginForm}/>
                        <Route exact path = '/:id' component = {DetailedView}/>
                    </Switch>
                </Router>
            </Fragment>
        </Provider>  
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'))

{/* <Header logged_in = {this.state.logged_in} login = {this.logIn} register = {this.register}/>
            {this.state.register ? <RegisterForm submit = {this.register}/>: <MyInfo user = {this.state.user}/>}
            <ToDoList data = {this.state.tasks_data} /> */}