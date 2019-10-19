'use strict'


const getSavedTodos = function () {
  const todosJSON = localStorage.getItem('todos');

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  };
};


const saveTodos = function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
};


const generateTodo = function (todo) {
  const todoElement = document.createElement('p');
  todoElement.className = 'h5 text-center my-3 py-2 border rounded border-light';
  todoElement.textContent = `${todo.text} -  ${todo.completed ? 'Completed' : 'Todo!'}`;

  return todoElement;
};


const generateSummary = function (filteredTodos) {
  const incompletedTodos = filteredTodos.filter(todo => {
    return !todo.completed;
  });

  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompletedTodos.length} todos left.`;

  return summary;
};


const renderTodos = function (todos, filters) {

  const filteredTodos = todos.filter(todo => {
    const textFiltering = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    const completedFiltering = !filters.hideCompleted || !todo.completed;
    return textFiltering && completedFiltering;
    });

  document.querySelector('#todos').innerHTML = '';
  document.querySelector('#todos').appendChild(generateSummary(filteredTodos));
  filteredTodos.forEach(todo => {
    document.querySelector('#todos').appendChild(generateTodo(todo));
  });
};