import React, { Component, Fragment } from 'react'
import toDoData from './toDoData.js'
import AddTask from './addtask'


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
                    <input type = 'checkbox' id = {this.props.num} onChange = {(event) => {this.props.func2(event)}} className = 'form-check-input' />  
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
            num_finished: 0,
            num_unfinished: 0,
            showCompleted: true,
            addTask: false,
            tasks: null
        }
        this.createTaskComponent = this.createTaskComponent.bind(this)
        this.toggleCompleted = this.toggleCompleted.bind(this)
        this.toggleChecked = this.toggleChecked.bind(this)
        this.addTask = this.addTask.bind(this)
    }

    toggleChecked(event) {
        console.log(event)
                    event.target.checked 
                    ? (this.setState(prevState => {
                        return{
                        num_finished: prevState.num_finished + 1,
                        num_unfinished: prevState.num_unfinished - 1}}))
                    : (this.setState(prevState => {
                        return{
                        num_finished: prevState.num_finished - 1,
                        num_unfinished: prevState.num_unfinished + 1}}))
                        }

    toggleCompleted() {
        this.setState(prevState => {
            return {
                showCompleted: !prevState.showCompleted
            }
        })
    }

    addTask(state) {
        this.setState(prevState => {return {addTask: !prevState.addTask}})
        const Tasks = this.state.tasks
        const checked = this.toggleChecked
        const show = this.state.showCompleted
        Tasks.push(<ToDoItem key = {Tasks.length+1} num = {Tasks.length+1} label={state.title} func2 = {checked} main = {state.content} completed = {false}  showCompleted = {show}/>)
        this.setState({tasks: Tasks})
    }

    createTaskComponent(data) {
        const checked = this.toggleChecked
        const show = this.state.showCompleted
        const alltasks = data.filter(task => task.label).map(function(task) {
            return (<ToDoItem key = {task.id} num = {task.id} label={task.label} func2 = {checked} main = {task.main} completed = {false}  showCompleted = {show}/>)
    })
        this.setState(prevState => {return {
            tasks: alltasks,
            num_unfinished: alltasks.length
        }})
        return this.state.tasks
    }
    

    userInfo() {
        let user = {
        imgSrc: 'https://avatars.mds.yandex.net/get-pdb/2836723/a1091df8-4b0f-4b8e-8b7a-7ec9122946e1/s1200?webp=false'}
        return user
    }

    componentDidMount() {
        this.createTaskComponent(this.state.toDoData)
    }

    render() {

        const userinfo = this.userInfo()
        return(
        <div className = 'container-fluid'>
            {this.state.addTask ? <AddTask  submit = {this.addTask}/> : 
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

                <button type="button" onClick = {() => {this.setState(prevState => {return {addTask: !prevState.addTask}})}} className="btn btn-success mr-2">Add Task</button>
                <button type="button" className="btn btn-success" onClick = {() => {this.toggleCompleted()}}>{this.state.showCompleted ? 'Hide' : 'Show'} done</button>

            </div>
            <div className = 'col-8'>

            <h1 className ='my-5'>To-do list</h1>
                <div className = ' d-flex flex-column align-items-center border border-success mt-2 mb-2 py-4 w-100'>

                    {this.state.tasks}

                </div>
            </div>
            </div>}
        </div>)
    }
}

export default MyInfo