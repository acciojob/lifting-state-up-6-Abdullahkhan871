import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Review code", completed: false },
  ]);

  const handleComplete = (id) => {
    // setTodos(
    //   todos.map((item) =>
    //     item.id === id ? { ...item, completed: true } : item
    //   )
    // );
    setTodos(todos.filter((item) => item.id != id));
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
