import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const Todos = ({ todos, markComplete }) => {
  return todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} markComplete={markComplete} />
  ));
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
};

export default Todos;
