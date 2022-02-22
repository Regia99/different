import React from "react";

import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos, onDelete, onToggleDone, onToggleImportant }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          onDelete={() => onDelete(id)}
          {...itemProps}
          onToggleDone={() => {
            onToggleDone(id);
          }}
          onToggleImportant={() => {
            onToggleImportant(id);
          }}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
