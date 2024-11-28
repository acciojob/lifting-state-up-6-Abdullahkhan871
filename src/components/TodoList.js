import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.text}
            {item.completed == false && (
              <button onClick={() => handleComplete(item.id)}>complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
