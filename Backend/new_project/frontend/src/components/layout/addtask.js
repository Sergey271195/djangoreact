import React, {Component} from 'react'

class AddTask extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: ''
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
                    <label>Title</label>
                    <input type="text" onChange = {(event) => {this.fillForm(event)}} className="form-control" name = 'title' placeholder="Title" value = {this.state.title}/>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea  onChange = {(event) => {this.fillForm(event)}} className="form-control outline-succsess" name = 'content' placeholder="Content" value = {this.state.content}/>
                </div>

                <div className="form-group">
                    <button className="btn btn-success" type = 'submit' onClick = {(event) => {this.props.submit(this.state); console.log(event)}} name = 'submit'>Submit</button>
                </div>
                
            </form>
        </div>
        )
    }

}

export default AddTask