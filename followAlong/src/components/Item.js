import React from 'react';

const Item = props => {
  const handleClick = ()=> {
    console.log("Clicked item");
  }

  return (
    <div onClick={handleClick}className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;