'use strict'


const todos = getSavedTodos();

const filters = {
  'searchText': '',
  'hideCompleted': false
};

renderTodos(todos, filters);

document.querySelector('#filter-todos').addEventListener('input', e => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector('#hide-completed').addEventListener('change', e => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});

document.querySelector('#new-todo-form').addEventListener('submit', e => {
  e.preventDefault();
  if (e.target.elements.newTodoInput.value.length > 0) {
    const newTodo = {
      text: e.target.elements.newTodoInput.value,
      completed: false
    };
    todos.push(newTodo);
    e.target.elements.newTodoInput.value = '';
    saveTodos(todos)
  } else {
    return false;
  };
  renderTodos(todos, filters);
});















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