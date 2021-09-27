import React, { useState } from 'react';

const Item = props => {
  // const [ item, setItem ] = useState({
  //   name: 'Bananas',
  //   id: 123,
  //   purchased: false
  // });

  const handleClick = ()=> {
    // console.log("Clicked item ", item.name);
    //How do we set purchased to true?

    // setItem({
    //   ...item,
    //   purchased: !item.purchased
    // });
    props.handleToggle();
  }

  return (
    <div onClick={handleClick} className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;