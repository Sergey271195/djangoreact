import React, { Component } from 'react'
import toDoData from './toDoData.js'


export class ToDoItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            completed: this.props.completed
        }
    }

    render()
        {
            if (this.props.label) {
                this.label_style = {display: 'block'}
            }
            else {
                this.label_style = {display: 'none'}
            }
    return (
        <div onMouseOver = {function(event) {event.target.className += ' .bg-succsess'}} className = 'input-group border-bottom border-success justify-content-start mt-2 ml-2 p-2 w-75'>
                <label className = 'mb-0 checkbox-inline' style = {this.label_style}>
                    <input type = 'checkbox' className = 'form-check-input' checked = {this.state.completed}/>  
                    {this.props.label} 
                </label>
                    <div className = 'container w-100 my-2 '>
                            {this.props.main}
                    </div>
        </div>
    )}
}

export class ToDoList extends Component {
    render() {
        return(
        <div>
            <button type="button" className="btn btn-success">Add Task</button>
            <div className = 'container border border-success mt-2'>
                <h1 className = 'm-4'>To-do list</h1>
            </div>
        </div>
            )
    }
}

class MyInfo extends Component  {

    constructor() {
        super()
        this.state = {
            toDoData: toDoData
        }
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

        const TaskComponents = this.state.toDoData.filter(task => task.label).map(function(task) {
                return (<ToDoItem key = {task.id} label={task.label} main = {task.main} completed = {task.completed}/>)
        })
        const userinfo = this.userInfo()
        return(
        <div className = 'container-fluid p-5'>
            <div className = 'row justify-content-center'>
            <div className = 'col-3'>
            <img src = {userinfo.imgSrc} className = 'w-50 rounded-circle' />
            <h1 className = 'mt-5'>{`${userinfo.firstname} ${userinfo.lastname}`}</h1>
            <div className = 'container mt-3 mb-5'>
                Well. What can i say? <br />
                Trying to learn functional programming is not that simple. Though it is quiet interesting.<br />
                But i think that i prefer object oriented programming. Thx python. One love
            </div>

                <button type="button" onClick = {() => {console.log(this.userInfo())}} className="btn btn-success mr-2">Add Task</button>
                <button type="button" className="btn btn-success">Show Completed</button>

            </div>
            <div className = 'col-6'>

            <h1 className ='mt-5'>To-do list</h1>
                <div className = ' d-flex flex-column align-items-center border border-success mt-2 mb-2 py-4 w-100'>

                    {TaskComponents}

                </div>
            </div>
            </div>
        </div>)
    }
}

export default MyInfo