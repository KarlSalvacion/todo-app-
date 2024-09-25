import React, { useState } from "react";
import TodoList from "./TodoList";
import "./App.css"; 

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app-container air">
      
      <TodoList
        todos={todos}
        addTodo={addTodo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />

        <div class='air air1'></div>
        <div class='air air2'></div>
        <div class='air air3'></div>
        <div class='air air4'></div>  
      
    </div>
  );
}

export default App;
