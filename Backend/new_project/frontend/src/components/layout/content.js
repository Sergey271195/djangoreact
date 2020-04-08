import React, { Component } from 'react'
import toDoData from './toDoData.js'


export class ToDoItem extends Component {
    constructor(props) {
        super(props)
    }

    render()
    {
    return (
        <div  style = {{display: this.props.showCompleted ? ('inline'): (this.props.completed ? 'none': 'inline')}} 
        
        className = 'input-group border-bottom border-success justify-content-start mt-2 p-2 w-75'>
                <label className = 'mb-0 checkbox-inline' >
                    <input type = 'checkbox' id = {this.props.num} onChange = {(event) => {this.props.func2(this.props.num); this.props.func(!this.props.completed, event)}} className = 'form-check-input' checked = {this.props.completed}/>  
                    {this.props.label} 
                </label>
                    <div className = 'container w-100 my-2 '>
                            {this.props.main}
                    </div>
        </div>
    )}
}

class MyInfo extends Component  {

    constructor(props) {
        super(props)
        this.state = {
            toDoData: toDoData,
            num_finished: toDoData.filter(task => task.completed).length,
            num_unfinished: toDoData.filter(task => !task.completed).length,
            showCompleted: true
        }

        this.count_tasks = this.count_tasks.bind(this)
        this.createTaskComponent = this.createTaskComponent.bind(this)
        this.toggleCompleted = this.toggleCompleted.bind(this)
        this.toggleChecked = this.toggleChecked.bind(this)
    }

    toggleChecked(id) {
        this.setState(prevState => {
            const newData = prevState.toDoData.map(task => {
                if (task.id === id) {
                    task.completed = !task.completed
                }
                return task
                })
            return {
                toDoData: newData
            }
        })
    } 

    toggleCompleted() {
        this.setState(prevState => {
            return {
                showCompleted: !prevState.showCompleted
            }
        })
    }

    count_tasks(value, event) {
        if (value) {
            this.setState(prevState => {
                return {
                num_finished: prevState.num_finished + 1,
                num_unfinished: prevState.num_unfinished - 1
                }
            })
        }
        else {
            this.setState(prevState => {
                return {
                    num_finished: prevState.num_finished - 1,
                    num_unfinished: prevState.num_unfinished + 1
                    }
            })
        }
    }

    createTaskComponent(data) {
        const count = this.count_tasks
        const checked = this.toggleChecked
        const show = this.state.showCompleted
        const tasks = data.filter(task => task.label).map(function(task) {
            return (<ToDoItem key = {task.id} num = {task.id} label={task.label} func2 = {checked} main = {task.main} completed = {task.completed} func = {count} showCompleted = {show}/>)
    })
        return tasks
    }
    

    userInfo() {
        const firstname = 'Sergey'
        const lastname = 'Makovkin'
        let user = {
        imgSrc: 'https://avatars.mds.yandex.net/get-pdb/2836723/a1091df8-4b0f-4b8e-8b7a-7ec9122946e1/s1200?webp=false',
        firstname: firstname,
        lastname: lastname}
        return user
    } 

    render() {

        const TaskComponents = this.createTaskComponent(this.state.toDoData)

        const userinfo = this.userInfo()
        return(
        <div className = 'container-fluid'>
            <div className = 'row justify-content-start'>
            <div className = 'col-3 mx-3'>
            <img src = {userinfo.imgSrc} className = 'w-50 rounded-circle' />
            {this.props.user && <h1 className = 'mt-5'>{`${this.props.user.firstname} ${this.props.user.lastname}`}</h1>}
            <div className = 'container mt-3 mb-5'>
                Well. What can i say? <br />
                Trying to learn functional programming is not that simple. Though it is quiet interesting.<br />
                But i think that i prefer object oriented programming. Thx python. One love
            </div>

            <div className = 'container mt-3 mb-5'>
                <h3>Statistics</h3>
                <p>Completed tasks: {this.state.num_finished}</p>
                <p>Unfinished tasks: {this.state.num_unfinished}</p>
            </div>

                <button type="button" onClick = {() => {console.log(this.userInfo())}} className="btn btn-success mr-2">Add Task</button>
                <button type="button" className="btn btn-success" onClick = {() => {this.toggleCompleted()}}>{this.state.showCompleted ? 'Hide' : 'Show'} done</button>

            </div>
            <div className = 'col-8'>

            <h1 className ='my-5'>To-do list</h1>
                <div className = ' d-flex flex-column align-items-center border border-success mt-2 mb-2 py-4 w-100'>

                    {TaskComponents}

                </div>
            </div>
            </div>
        </div>)
    }
}

export default MyInfo