import React, { Component } from 'react';

// import React from "react";
// const App = (props) => {
//     return <h1>{props.text}</h1>;
// }
//same as below

class App extends Component {
    constructor() {
        super();

        this.state = {
            text: "hello world!",
            phText: "Im a place holder!",
            input: "",
            hasLoaded: false,
        }
    }

    change = (e) => { //e is event
        return this.setState({input: e.target.value}) //sets it equal to what the user is typing in
    }

    componentDidMount(){ //this already has a definition through react, hover over it to see
        this.setState({hasLoaded: !this.state.hasLoaded})
    }

    changeLoaded = () => {
        // this.setState({hasLoaded: true}) //more simple not as dynamic
        // this.setState({hasLoaded: !this.state.hasLoaded}) //whatever it isnt
        //when we added didmount it made it so that it immediately happened bc its re-rendered
    }

    render() {
        if(this.state.hasLoaded){
        return (
            <React.Fragment>
                <h1>{this.props.text}</h1>
                <h1>{this.state.text}</h1>
                <input value={this.state.input} type="text" placeholder={this.state.phText} onChange={e => this.change(e)}/>
                <button  onClick={this.changeLoaded}>Click me!</button>
            </React.Fragment>
        )
        } else {
            return (
                <React.Fragment>
                <h1>Loading...</h1>
                <button  onClick={this.changeLoaded}>Click me!</button>
                </React.Fragment>
            )
        }
    }
}

export default App;