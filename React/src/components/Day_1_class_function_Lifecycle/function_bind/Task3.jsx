import React, { Component } from 'react'

class Task3 extends Component {

    constructor(props) {
        super(props)

        //set intial state
        this.state = {
            username: null,
            password: 15151,
            email: "abc@gmail.com"
        }
        // console.log(this.state)

        // bind function with this keyword [ to access pf this kwyward in function]
        this.updateState = this.updateState.bind(this)
    }

    // update state
    updateState() {
        // changing state
        this.setState({
            username: "Amey",
            password: "Amey@12345",
            email: "amey@gmail.com"
        })
    }

    render() {
        return (
            <div>
                <h3>Function bind in class component</h3> <br />
                <p>Username:- {this.state?.username}</p> 
                <p>Password:- {this.state?.password}</p>

                <p>Email:- {this.state.email}</p>

                <button onClick={this.updateState}>Click me </button>
            </div>
        )
    }
}
export default Task3;