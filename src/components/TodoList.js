
import React from "react";
import { Checkbox } from "./checkbox";

export const TodoList = ({ todos, onToggleTodo }) => (
  <React.Fragment>
    {todos.map((todo, idx) => (
      <div className='todo-item' key={idx}  >
        <Checkbox
          tabIndex={idx}
          checked={todo?.completed}
          text={todo?.content}
          onChange={() => onToggleTodo(todo?.id)}
        />
      </div>
    ))}
  </React.Fragment>
);
