import React, { Component } from 'react'

export class ToDoItem extends Component {
    render() {
    return (
        <div className = 'input-group border-bottom border-success mt-2 ml-2 p-2 w-75'>
            <input type = 'checkbox' className = 'form-check-input' />
                <label className = 'mb-0'>Learn basics of React</label>
                    <div className = 'container'>
                        <p><br />In order to learn basics of React one should first learn basics of Javascript<br />
                        JS is language taht is widely used in web programming.<br />
                        React is JS framework. One of the most ppopular ones<br />
                        Others being Node.js, Vue.js and Angular...</p>
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

function MyInfo()  {
        const firstname = 'Sergey'
        const lastname = 'Makovkin'
        const date = new Date()
        const hours = date.getHours()
        let dayTime
        let styles = {
            justifyContent: 'center'
        }
        if (hours > 12) {
            dayTime = 'Evening'
        }
        else {
            dayTime = 'Morning'
        }
        return(
        <div className = 'container-fluid p-5'>
            <div className = 'row justify-content-center'>
            <div className = 'col-5'>
            <h1 className = 'mt-5'>{`${firstname} ${lastname}`}</h1>
            <div className = 'container mt-3 mb-3' style = {styles}>
                {`Good ${dayTime} to You, ${firstname} ${lastname}`}
            </div>
                <div className = 'container w-75'>
                    <p>Well. What can i say? <br />
                    Trying to learn functional programming is not that simple. Though it is quiet interesting.<br />
                        But i think that i prefer object oriented programming. Thx python. One love
                    </p>
                </div>
            </div>
            <div className = 'col-5'>
            <h1 className ='mt-5'>To-do list</h1>

            <button type="button" className="btn btn-success">Add Task</button>

            <div className = ' d-flex flex-column align-items-center border border-success mt-2 mb-2 py-4 w-100'>
                
                <div className = 'input-group border-bottom border-success mt-2 ml-2 p-2 w-75'>
                    <input type = 'checkbox' className = 'form-check-input' />
                    <label className = 'mb-0'>Learn basics of React</label>
                    <div className = 'container'>
                        <p><br />In order to learn basics of React one should first learn basics of Javascript<br />
                        JS is language taht is widely used in web programming.<br />
                        React is JS framework. One of the most ppopular ones<br />
                        Others being Node.js, Vue.js and Angular...</p>
                    </div>
                </div>

                <div className = 'input-group border-bottom border-success mt-2 ml-2 p-2 w-75'>
                    <input type = 'checkbox' className = 'form-check-input'/>
                        <label className = 'mb-0'>Learn basics of Django</label>
                        <div className = 'container'>
                            <p><br />In order to learn basics of Django one should first learn basics of Python<br />
                            Python is beginners friendly. So don't worry too much.<br />
                            Anything could be achieved with persistance and labour</p>
                        </div>
                </div>

                <div className = 'input-group border-bottom border-success m-2 ml-2 p-2 w-75'>
                    <input type = 'checkbox' className = 'form-check-input'/>
                    <label className = 'mb-0'>Combine both</label>
                    <div className = 'container'>
                            <p><br />So in order to become so called fullstack programmer you should know a lot...<br />
                            But it worth a try, I think.<br />
                            So, let's go for it together to shiny dream of freedom and what not</p>
                    </div>
                </div>

                <ToDoItem />

                </div>
            </div>
            </div>
        </div>)
}

export default MyInfo