import React, { useState } from 'react';

const Item = props => {
  const [item, setItem ] = useState({
    
  });

  const handleClick = ()=> {
    console.log("Clicked item ", props.item.name);
  }

  return (
    <div onClick={handleClick}className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;