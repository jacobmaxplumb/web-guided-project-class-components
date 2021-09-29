import React from "react";

import Item from "./Item";

class GroceryList extends React.Component {
  constructor() {
    super();
  }

  handleClear = () => {
    this.props.clearItems();
  }
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);

  render() {
    return (
      <div className="shopping-list">
        {this.props.groceries.map(item => (
          <Item key={item.id} item={item} />
        ))}
        <button className="clear-btn" onClick={this.handleClear}>
          Clear Purchased
        </button>
      </div>
    );
  }
};

export default GroceryList;