import React from "react";

import Item from "./Item";

const GroceryList = props => {
  console.log(props);
  return (
    <div className="shopping-list">
      {props.groceries.map(item => (
        <Item key={item.id} item={item} />
      ))}
      <button className="clear-btn">
        Clear Purchased
      </button>
    </div>
  );
};

export default GroceryList;