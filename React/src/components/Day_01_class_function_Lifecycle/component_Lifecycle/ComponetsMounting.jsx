
import React from 'react'

class ComponetsMounting extends React.Component {
    
    //1 constructor 
    constructor(props) {
        super(props);    //write otherwise constructor give this.props => undefined

        this.state = { 
            favoritcolor: "red",
            car: "BMW", 
            apiData:[]

        }; // store value of compoenent

        this.data=this.data.bind(this)
        // console.log("state:- ", this.state)
        // console.log("props:-", props);
        console.log("This is constructor!");
    }

    //2 getDerivedStateFromProps()
    static getDerivedStateFromProps(props,state){
        
        // console.log("getDerivedStateFromProps:- ",props.favcol);
        console.log("This is getDerivedStateFromProps!");
        return {favoritcolor:props.favcol}
    }

    //4 componentsDidMount()
    componentDidMount(){
        console.log("This ",this);

        this.data();
        
        console.log("This is componentDidMount!");
    }

    data=async function(){
        console.log("Async")
        try {
            const res=await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const demoData=await res.json();

            this.setState({apiData:[demoData]})

            // console.log("Data is :-",demoData);
            
        } catch (error) {
            console.log(error);
        }
    }

    //3 render() component
    render() {
        console.log("Reander Methods!");
    // console.log("The updated state apidata:- ",this.state.apiData);

        return (
            <>
                <h3>Class Component Lifecycle</h3>
                <h5> This is Heading</h5>
                <p>My favoritcolor is: {this.state.favoritcolor}</p>
                <p>My favorite car is : {this.state.car}</p>

                <p>{this.state.apiData.map((val)=>{
                    return <div>
                                <li>{val.title}</li> 
                                <br/> 
                                <li>{val.id}</li> 
                             </div> ;
                })}
                </p>
           
            </>
        )
    }
}

export default ComponetsMounting;

//* Mounting

// constructor()    => call before anything else and  It lets you declare state and bind your class methods to the class instance

// getDerivedStateFromProps()  => It takes state as an argument, and returns an object with changes to the state. [ used to transfer props]

//  render()    => method is required other methods are optional.the method that actually outputs the HTML to the DOM.
  
// componentDidMount()  => method is called after the component is rendered