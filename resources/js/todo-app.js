'use strict'

// DATA //

// Todos.
let todos = [];

// Filters.
const filters = {
  'searchText': '',
  'hideCompleted': false
};


// Check and retrive existing saved DATA when APP starts//
const todosJSON = localStorage.getItem('todos');

if (todosJSON !== null) {
  todos = JSON.parse(todosJSON);
};


// Render Todos & Todos left heading //
const renderTodos = function (todos, filters) {

  // Todos list.
    const filteredTodos = todos.filter(todo => {
      const textFiltering = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
      const completedFiltering = !filters.hideCompleted || !todo.completed;
      return textFiltering && completedFiltering;
    });

  // Clean the container.
  document.querySelector('#todos').innerHTML = '';

  // Todos left heading calc.
  const incompletedTodos = filteredTodos.filter(todo => {
    return !todo.completed;
  });

  // Render todos left heading.
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompletedTodos.length} todos left.`;
  document.querySelector('#todos').appendChild(summary);

  // Render todos list.
  filteredTodos.forEach(todo => {
    let todoElement = document.createElement('p');
    todoElement.textContent = `${todo.text} -  ${todo.completed ? 'Completed' : 'TODO!'}`;
    document.querySelector('#todos').appendChild(todoElement);
  });

};


// Filter todos inputs //
document.querySelector('#filter-todos').addEventListener('input', e => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector('#hide-completed').addEventListener('change', e => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});


// New todo form //
document.querySelector('#new-todo-form').addEventListener('submit', e => {
  e.preventDefault();
  if (e.target.elements.newTodoInput.value.length > 0) {
    const newTodo = {
      text: e.target.elements.newTodoInput.value,
      completed: false
    };
    todos.push(newTodo);
    e.target.elements.newTodoInput.value = '';
    localStorage.setItem('todos', JSON.stringify(todos));
  } else {
    return false;
  };
  renderTodos(todos, filters);
});


renderTodos(todos, filters);













// let incompletedTodosNum = 0;
// const incompletedTodos = todos.forEach(todo => {
//   !todo.completed ? incompletedTodosNum += 1 : incompletedTodosNum += 0;
// });

// const todos2 = document.querySelectorAll('p');

// const filterPs = function (ps, query) {
//   ps.forEach(p => {
//     if (p.textContent.toLowerCase().includes(query)) {
//       p.remove();
//     };
//   });
// };

// filterPs(todos2, 'the');

// // Add Todo input.
// document.querySelector('#new-todo').addEventListener('input', (e) => console.log(e.target.value));
// document.querySelector('#add-todo').addEventListener('click', (e) => console.log('TODO added!'));