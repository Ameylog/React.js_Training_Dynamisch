import React, { Component } from 'react';
import img1 from "../../../../images/image1.jpg"


class ClassState extends Component {

  constructor(props) {
    super()

    this.state = {
      fname: "Amey",
      age: 25,
      city: "Pune",
      image: <img alt='nature' src={img1} />
    }
    this.changeData = this.changeData.bind(this)
  }

  changeData = (e) => {
    this.setState({ fname: "Ram" })
    // this.setState({fname:"Wow"})  latest setState consider
  }

  render() {

    return (
      <div>
        <h3>State in Class component</h3> <br />
        <p>Name:- {this.state.fname}</p>
        <p>Age:- {this.state.age}</p>
        <p>city:- {this.state.city}</p>

        <button onClick={this.changeData}>Change Name</button>

        {/* <p>Image</p>

        <img src={this.state.image} alt="Nature" width={400} height={400} /> */}

        {/* set image to src  using state */}

      </div>
    )
  }
}

export default ClassState;