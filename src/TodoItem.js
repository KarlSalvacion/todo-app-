import React, { useState } from 'react';
import './TodoItem.css'

function TodoItem({ todo, updateTodo, removeTodo }) {
  const [editValue, setEditValue] = useState(todo.text);

  const handleComplete = () => {
    updateTodo({ ...todo, isComplete: !todo.isComplete });
  };

  const handleEdit = () => {
    updateTodo({ ...todo, isEditing: true });
    const todoItem = document.querySelector(`.todo-item[data-id="${todo.id}"]`);
    if (todoItem) {
      todoItem.classList.add('isEditing');
      const completeButton = todoItem.querySelector('.circle-button');
      completeButton.disabled = true; // disable the complete button
      completeButton.style.display = 'none'; // hide the complete button
    }
  };
  
  const handleSave = () => {
    updateTodo({ ...todo, text: editValue, isEditing: false });
    const todoItem = document.querySelector(`.todo-item[data-id="${todo.id}"]`);
    if (todoItem) {
      todoItem.classList.remove('isEditing');
      const completeButton = todoItem.querySelector('.circle-button');
      completeButton.disabled = false; // enable the complete button
      completeButton.style.display = 'block'; // show the complete button
    }
  };

  return (
    <li className={`todo-item ${todo.isComplete ? "completed" : ""}`}>
      <button
        className={`circle-button ${todo.isComplete ? "checked" : ""}`}
        onClick={handleComplete}
        disabled={todo.isEditing} // add this line
        style={{ display: todo.isEditing ? 'none' : 'block' }} // add this line
      >
      </button>
      <div className="todo-text">
        {todo.isEditing ? (
          <input
            className="editTextBar"
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        ) : (
          <span style={{ wordBreak: 'break-word' }}>{todo.text}</span>
        )}
      </div>
      <div className="todo-actions">
        {!todo.isEditing && (
          <>
            <button onClick={handleEdit} disabled={todo.isComplete} className="editBtn">
              Edit
            </button>
            <button onClick={() => removeTodo(todo.id)} className="removeBtn">Remove</button>
          </>
        )}
        {todo.isEditing && (
          <button onClick={handleSave} disabled={editValue.trim() === ""} className="saveBtn">
            Save
          </button>
        )}
      </div>
    </li>
  );
}

export default TodoItem;