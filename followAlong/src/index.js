import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceries:groceries
    }
  }

  //Toggle Item Purchased
  handleToggle = (id) => {
    //1. have a copy of state.
    //2. set groceries slice of state
    //3. find the item that I clicked on
    //4. flip the value of purchased for that item
    //5. leave all the other items alone.

    this.setState({
      ...this.state,
      groceries: this.state.groceries.map(item=> {
        if (item.id === id) {
          return ({
            ...item,
            purchased: !item.purchased
          });
        } else {
          return item;
        }
      })
    });
  }
  
  //Add Item
  //Clear Purchased Items

  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           <ListForm />
         </div>
        <GroceryList handleToggle={this.handleToggle} groceries={this.state.groceries} />
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);