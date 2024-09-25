import React, { useState } from "react";
import TodoItem from "./TodoItem";
import './TodoList.css'

function TodoList({ todos, addTodo, updateTodo, removeTodo }) {
  const [inputValue, setInputValue] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        isComplete: false,
        isEditing: false
      };
      addTodo(newTodo);
      setInputValue("");
    }
  };

  return (
    <div className="mainContainer">
      <div className="todo-list-container">
        <h1 className="todoTitle">My To-Do List</h1>
        <div className="add-todo">
          <input
            className={`todoBar ${inputFocused ? 'focused' : ''}`}
            type="text"
            placeholder="Add a new todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <button onClick={handleAddTodo} className="addTodoBtn">Add Todo</button>
        </div>
      
        {todos.length === 0 ? (
          <p className="todoTextBot">No todos available. Add a todo to get started!</p>
        ) : (
          <ul className="todo-items">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                updateTodo={updateTodo}
                removeTodo={removeTodo}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoList;