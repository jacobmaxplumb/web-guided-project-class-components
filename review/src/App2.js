import React from 'react';

class App2 extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        const name = "Allison";

        return(<div>
            <h1>Hello {name}.</h1>
        </div>);
    }
}

export default App2;