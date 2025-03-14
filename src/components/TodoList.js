import React, { useState } from 'react';

const TodoList = () => {
  // State to store all todos
  const [todos, setTodos] = useState([]);
  
  // State to track the input value for the new or edited todo
  const [inputValue, setInputValue] = useState('');
  
  // State to track the ID of the todo being edited
  const [editId, setEditId] = useState(''); 
  
  // Handle the form submission to add a new todo
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing on submit
    if (inputValue.trim() === '') return; // Do nothing if input is empty

    // Create a new todo object with a unique ID
    const newTodo = {
      id: Date.now(), // Use the current timestamp as a unique ID
      text: inputValue, // Use the current input value for the todo's text
      completed: false // Set the initial status of the todo as not completed
    };

    // Add the new todo to the list and clear the input field
    setTodos([...todos, newTodo]);
    setInputValue('');
  }

  // Toggle the completion status of a todo (completed or not)
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo // Flip the completed status of the matched todo
      )
    );
  };

  // Delete a todo by its ID
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id)); // Remove the todo that matches the ID
  }

  // Start the editing process for a todo
  const startEditing = (id, text) => {
    setEditId(id); // Set the current todo as the one being edited
    setInputValue(text); // Set the input value to the text of the todo
  }

  // Update the todo after editing
  const updateTodo = () => {
    if (inputValue.trim()) { // Ensure the input is not empty
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: inputValue } : todo // Update the text of the todo being edited
        )
      );
      setEditId(null); // Clear the edit mode after updating
      setInputValue(''); // Clear the input field
    }
  };

  
  return (
    <div>
      <div className="d-flex mb-3">
        <input 
        type="text"
        className="form-control me-2"
        value={inputValue || ""}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add or edit a task..."
        />
         <button
          className="btn btn-primary mt-2"
          onClick={editId ? updateTodo : handleSubmit}
        >
          {editId ? "Update Task" : "Add Task"}
        </button>
      </div>

      <ul className="list-group">
        {todos.length === 0 && (
          <li className="list-group-item text-muted">No tasks yet. Add some!</li>
        )}

        {todos.map((todo, index) => (
          <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
             {index + 1}. {todo.text}
            </span>
            <div>
              <button 
              className="btn btn-sm btn-outline-success me-2"
              onClick={() => toggleComplete(todo.id)}
              >
                {todo.completed ? '↩' :'✓'}
              </button>
              <button 
              className="btn btn-sm btn-outline-warning me-2"
              onClick={() => startEditing(todo.id, todo.text)}
              >
                ✎
              </button>
              <button 
              className="btn btn-sm btn-outline-danger"
              onClick={() => deleteTodo(todo.id)}
              >
                &times;
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
