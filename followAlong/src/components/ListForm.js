import React from "react";

class ListForm extends React.Component {
  // Constructor with state

  handleChanges = e => {
    // update state with each keystroke
  };

  // class property to submit form
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddItem();
    console.log(this.props);
  }

  render() {
    return (
      <form>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="item" />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

export default ListForm;