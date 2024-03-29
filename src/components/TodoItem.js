import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  render() {
    return (
      <div
        style={{
          background: "#f4f4f4",
          padding: "10px",
          borderBottom: "1px #ccc dotted",
          textDecoration: this.props.todo.completed ? "line-through" : "none",
        }}
      >
        <p>
          <input type="checkbox" onChange={this.props.markComplete} />{" "}
          {this.props.todo.title}
        </p>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
};

export default TodoItem;
