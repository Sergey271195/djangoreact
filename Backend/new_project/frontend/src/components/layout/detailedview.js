import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class DetailedView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            task: {},
            isLoading: false,
            date: ''
        }

        this.fetchData = this.fetchData.bind(this)
    }

    fetchData(task_id) {
        this.setState({isLoading: true})
        fetch(`/api/${task_id}`)
            .then(response => response.json())
                .then(data => {this.setState({id: task_id, task: data, date: new Date(data.assignment_date)})})
        this.setState({isLoading: false})
    }

    componentDidMount() {
        const task_id = this.props.match.params.id
        this.fetchData(task_id)
    }

    componentDidUpdate(prevProps) {
        this.props.match.params.id !== prevProps.match.params.id && this.fetchData(this.props.match.params.id)
      }

    render() {
        return (
        <div>            
            {this.state.isLoading ? (<div className = 'container'><h1>Loading</h1></div>) : 
            (<div className = 'container'>
                <h3>{this.state.task.title}</h3>
            <div className = 'container border border-success'>
                <p>{this.state.task.content}</p>
                <p>{this.state.date.toLocaleString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})}</p>
                </div>
                <Link to='/'>
                        <button type="button" className="btn btn-dark" style = {{width: '7vw'}} name = 'back'>Back</button>
                </Link>
            </div>)}
        </div>
        )
    }
    
}

export default DetailedView