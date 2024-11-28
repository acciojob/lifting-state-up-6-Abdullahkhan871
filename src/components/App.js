import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", complete: false },
    { id: 2, text: "Build a project", complete: false },
    { id: 3, text: "Review code", complete: false },
  ]);

  const handleComplete = (id) => {
    setTodos(
      todos.map((item) => (item.id == id ? { ...item, complete: true } : item))
    );
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
