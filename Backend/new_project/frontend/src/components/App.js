import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from './layout/header';
import MyInfo, { ToDoItem } from './layout/content';
import Footer from './layout/footer.js'

class App extends Component {
    render() {
        return (<div>
            <Header />
            <MyInfo />
            <Footer />
        </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('app'))