import React from "react";

class CompoenentUpdating extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }

    // 2
    shouldComponentUpdate() {
        return true;
    }

    // 1
    // static getDerivedStateFromProps(props, state) {
    //     return { favoritecolor: props.favcol };
    // }

    changeColor = () => {
        this.setState({ favoritecolor: "blue" });
    }

    render() {
        return (
            <div>
                <p>My Favorite Color is {this.state.favoritecolor}</p>

                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}


export default CompoenentUpdating;

//* updating

// getDerivedStateFromProps()  => first method the component get updated set the state object based on the initial props.

// shouldComponentUpdate() =>set the state object based on the initial props.The defualt value is true

// render()

// getSnapshotBeforeUpdate()

// componentDidUpdate()