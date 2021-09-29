import React from 'react';

const Item = props => {
  return (
    <div className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

// class Item extends React.Component {
//   render() {
//     return (
//       <div className={`item${props.item.purchased ? ' purchased' : ''}`}>
//         <p>{props.item.name}</p>
//       </div>
//     );
//   }
// }

export default Item;

// function main() {
//   const obj = {
//     name: 'jacob',
//     age: 30
//   }

//   const obj2 = changeData(obj);

// }

// function changeData(data) {
//   data.name = 'james'
// }