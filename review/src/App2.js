import React from 'react';

class App2 extends React.Component {
    constructor() {
        super();
        this.state = {
            name:"Warren",
            age: 33
        }
    }

    render() {
        const name = "Allison";
        console.log(this.state);
        return(<div>
            <h1>Hello {name}.</h1>
        </div>);
    }
}

export default App2;