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