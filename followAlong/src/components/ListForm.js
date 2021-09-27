import React, { useState }from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor(){
    super();
    this.state = {
      input: ""
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      input:e.target.value
    });
  };

  // class property to submit form
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddItem("Warren");
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input onChange={this.handleChanges}type="text" name="item" />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;