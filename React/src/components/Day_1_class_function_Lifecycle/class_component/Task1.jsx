import React, { Component } from 'react'

class Task1 extends Component {
    // can not defined variable this placed

    constructor(props) {
        super(props)

        this.state = {
            firstName: "Amey",
            lastName: "Shende",
            age: 23,
            city: "Pune",
            favoriteCar: null,
            arrayData: [1, 2, 3, 45, 75]
        }

        // console.log("state is :", this.state);
        // console.log("Props:- ",props);
    }
    //  we can set the this.state as per we want this.ownName

    updateData = (e) => {
        // console.log("Inside Method");
        this.setState({ age: 25, city: "Nagpur", favoriteCar: "BMW" })
    }

    render() {
        //define variable in between render and return method
        let newVar = "Hello";
        let newVar2 = "Welcome to Pune"

        // console.log("Reload");

        return (
            <div>
                <h3>Class Component</h3> <br />
                <p>{newVar}, {newVar2}</p>

                <p>Introduction</p>

                <p>I am {this.state.firstName} {this.state.lastName} from {this.state.city}  and my age is {this.state.age}</p>

                {/*Ternary operator */}
                {this.state.favoriteCar != null ? <p>My favorite car is {this.state.favoriteCar}</p> : this.state.favoriteCar}

                <p>After 5 year the age will be {this.state.age + 5}</p>
                <button onClick={this.updateData}>Click me </button>

                <p>Multiple with my age is {this.state.age * 10}</p>
                <p>Division with my age is {this.state.age / 10}</p>


                <p>The 2nd element of array:- {this.state.arrayData[2]}</p>

                <p>The sum of array :- {this.state.arrayData.reduce((a, b) => a + b)}</p>

                <p>Multiple Array with 7 :- {this.state.arrayData.map((e) => e * 7) + " "}</p>

                <p>The Element greater 20 :- {this.state.arrayData.filter((e) => e > 20) + " "}</p>

                <p>Fruits:- {this.props.fruit}</p>
            </div>
        )
    }
}

export default Task1;
