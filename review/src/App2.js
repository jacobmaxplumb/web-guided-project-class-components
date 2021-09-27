import React from 'react';


// const Person = (props)=> {
//     return(<div>
//         <h1>Hello {props.name}. You are {props.age} years old.</h1>
//         <p>{props.name} is a great name!</p>
//     </div>);
// }

class Person extends React.Component {
    render() {
        console.log(this.state);
        return(<div>
            <h1>Hello {this.props.name}. You are {this.props.age} years old.</h1>
            <p>{this.props.name} is a great name!</p>
        </div>);
    }
}

class App2 extends React.Component {
    constructor() {
        super();
        this.state = {
            name:"Warren",
            age: 33
        }
    }

    handleClick = ()=> {
        this.setState({
            ...this.state,
            name:"Allison",
            age:12
        });
    }

    render() {
        return(<div>
            <Person name={this.state.name} age={this.state.age}/>
            <Person name={"asdfasdfas"} age={23}/>
            <button onClick={this.handleClick}>Change Name</button>
        </div>);
    }
}

export default App2;