'use strict'

// Fetch existing data from localStorage
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem('todos');

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  };
};


// Save data to localStorage
const saveTodos = function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
};


// Remove todo
const removeTodo = function (id) {
  const todoIndex = todos.findIndex(todo => {
    return todo.id === id;
  });

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  };
};


// Toggle completed status with checkboxes.
const setCompleted = function (id) {
  const todo = todos.find(todo => {
    return todo.id === id;
  });

  if (todo !== undefined) {
    todo.completed = !todo.completed;
  };
};


// Generate DOM elements for an individual note.
const generateTodo = function (todo) {
  const todoElement = document.createElement('div');
  const todoCheck = document.createElement('input');
  const todoText = document.createElement('span');
  const deleteBtn = document.createElement('button');

  todoElement.className = 'h5 text-center my-3 py-2 border rounded border-light';

  // Setup todo checkbox.
  todoCheck.setAttribute('type', 'checkbox');
  todoCheck.checked = todo.completed;
  todoElement.appendChild(todoCheck);
  todoCheck.addEventListener('change', e => {
    setCompleted(todo.id);  // Instead it's better to todo.completed = e.target.checked;*
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  // Setup todo text.
  todoText.textContent = todo.text;
  todoElement.appendChild(todoText);
  
  // Setup delete button.
  deleteBtn.textContent = 'x';
  todoElement.appendChild(deleteBtn);
  deleteBtn.addEventListener('click', e => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoElement;
};


// Generate DOM elements for the summary.
const generateSummary = function (incompletedTodos) {

  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompletedTodos.length} todos left.`;

  return summary;
};


// Render app based on filters.
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(todo => {
    const textFiltering = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    const completedFiltering = !filters.hideCompleted || !todo.completed;

    return textFiltering && completedFiltering;
    });

    const incompletedTodos = filteredTodos.filter(todo => {
      return !todo.completed;
    });

  document.querySelector('#todos').innerHTML = '';
  document.querySelector('#todos').appendChild(generateSummary(incompletedTodos));
  filteredTodos.forEach(todo => {
    document.querySelector('#todos').appendChild(generateTodo(todo));
  });
};


// // Change completed status with checkboxes.
// const setCompleted = function (id) {
//   const todoIndex = todos.findIndex(todo => {
//     return todo.id === id;
//   });

//   if (todoIndex > -1) {
//     todos[todoIndex].completed = !todos[todoIndex].completed;
//   };
// };

// *: I did this way for practicing with array methods.