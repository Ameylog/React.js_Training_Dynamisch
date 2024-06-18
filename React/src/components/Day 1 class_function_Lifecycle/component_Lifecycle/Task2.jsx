import React, { Component } from 'react'


export class Task2 extends Component {

    constructor(props) {
        console.log("Inside Const");
        super(props)

        this.state = {
            count: 0,
            toggle: false
        };

    }

    // API calls, initialize state, or set up subscriptions.
    componentDidMount() {
        console.log("componentDidMount");
    }

    // method is called after the component is updated.
    // compare the previous props and state to the current props and state, and make any necessary changes.

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        // console.log("Previous count:", prevState.count);
        // console.log("Current count:", this.state.count);
    }

    // called before the component is unmounted from the DOM.
    // You can use this method to clean up any subscriptions or timers.
    componentWillUnmount() {  
            console.log("componentWillUnmount");
        
    }

    toggleInput = () => {
        
        (this.state.toggle) ? this.setState({ toggle: false }) : this.setState({ toggle: true })
    }

    render() {
        return (
            <div>
                <h3>Component Lifecycle</h3>
                
                <p>Count:{this.state.count}</p>

                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
                <br /> <br />

                <button onClick={() => this.state.count > 0 ? this.setState({ count: this.state.count - 1 }) : ({ count: 0 })}>Decrement</button>
                <br /><br />

                <button onClick={() => this.setState({ count: 0 })}>Reset</button> <br /> <br />


                <button onClick={this.toggleInput}>Toggle</button>
                {this.state.toggle ? <Childs /> : ""}

                <p>Check the console</p>


            </div>
        )
    }
}

export default Task2;

function Childs() {
    return (
        <div>
            <h3>Child </h3>
            <p>This is child</p>
        </div>
    )
}