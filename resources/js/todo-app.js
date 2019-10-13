'use strict'

const todos = [{
  'text': 'Study JS',
  'completed': true
}, {
  'text': 'Work in HTML/CSS practices',
  'completed': true
}, {
  'text': 'Go fitness',
  'completed': false
}, {
  'text': 'Feed and cure the dog',
  'completed': true
}, {
  'text': 'Keep looking for some relax activity',
  'completed': false
}, {
  'text': 'Practice guitar',
  'completed': false
}];

const filters = {
  'searchText': '',
  'hideCompleted': false
};


// Render Todos & Todos left.
const renderTodos = function (todos, filters) {

  // Todos list.
    const filteredTodos = todos.filter(todo => {
      const textFiltering = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
      const completedFiltering = !filters.hideCompleted || !todo.completed;
      return textFiltering && completedFiltering;
    });

  // Clean the container.
  document.querySelector('#todos').innerHTML = '';

  // Todos left.
  const incompletedTodos = filteredTodos.filter(todo => {
    return !todo.completed;
  });

  // Render Todos left.
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompletedTodos.length} todos left.`;
  document.querySelector('#todos').appendChild(summary);

  // Render Todos list.
  filteredTodos.forEach(todo => {
    let todoElement = document.createElement('p');
    todoElement.textContent = `${todo.text} -  ${todo.completed ? 'Completed' : 'TODO!'}`;
    document.querySelector('#todos').appendChild(todoElement);
  });

};


// Filter Todos Inputs.
document.querySelector('#filter-todos').addEventListener('input', e => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector('#hide-completed').addEventListener('change', e => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});


// New todo form.
document.querySelector('#new-todo-form').addEventListener('submit', e => {
  e.preventDefault();
  const newTodo = {
    text: e.target.elements.newTodo.value,
    completed: false
  };
  todos.push(newTodo);
  e.target.elements.newTodo.value = '';
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