import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class Task extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className = 'input-group border-bottom border-success justify-content-start my-3 p-2'>
                <label className = 'mb-0 checkbox-inline h3 ml-5' >
                    <input type = 'checkbox' id = {this.props.id} className = 'form-check-input'/>  
                    <Link to = {`/${this.props.id+1}`}>{this.props.title}</Link> 
                </label>
                    <div className = 'container w-100 my-2 '>
                            {this.props.content}
                    </div>
        </div>
        )
    }
}

class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks_data: []
        }
    }

    componentDidMount() {
        fetch('/api/')
            .then(response => response.json())
                .then(data => {this.setState({tasks_data: data})})       
    }

    render() {
        const tasks = this.state.tasks_data.map(task =>{
            const keyProp = this.state.tasks_data.indexOf(task)
            return <Task key = {keyProp} id = {keyProp} title={task.title} content = {task.content} completed = {task.completed}  date = {task.assignment_date} />
        })

        return(
        <Fragment>
            <div className = 'container border border-success mt-2 mb-2 p-4'>
                {tasks}
            </div>
        </Fragment>)
    }
}

export default ToDoList