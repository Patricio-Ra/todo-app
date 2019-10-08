'use strict'

const todos = [{
  text: 'Study JS',
  completed: true
}, {
  text: 'Work in HTML/CSS practices',
  completed: true
}, {
  text: 'Go fitness',
  completed: false
}, {
  text: 'Feed and cure the dog',
  completed: true
}, {
  text: 'Keep looking for some relax activity',
  completed: false
}, {
  text: 'Practice guitar',
  completed: false
}];

const filters = {
  searchText: ''
}


// Add Todo input.
document.querySelector('#new-todo').addEventListener('input', (e) => console.log(e.target.value));

document.querySelector('#add-todo').addEventListener('click', (e) => console.log('TODO added!'));


// Filter Todos Input.
document.querySelector('#filter-todos').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
})


// Render Todos & Todos left.
const renderTodos = function (todos, filters) {
  // Todos.
  const filteredTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
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

  // Render Todos.
  filteredTodos.forEach(todo => {
    let todoElement = document.createElement('p');
    todoElement.textContent = `${todo.text}: ${todo.completed ? 'Completed' : 'Incompleted'}`;
    document.querySelector('#todos').appendChild(todoElement);
  });
}

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