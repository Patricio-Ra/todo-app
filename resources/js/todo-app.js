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

const incompletedTodos = todos.filter(todo => {
  return !todo.completed;
});
const summary = document.createElement('h2');
summary.textContent = `You have ${incompletedTodos.length} todos left to complete.`;
document.querySelector('body').appendChild(summary);

// let incompletedTodosNum = 0;
// const incompletedTodos = todos.forEach(todo => {
//   !todo.completed ? incompletedTodosNum += 1 : incompletedTodosNum += 0;
// });

todos.forEach(todo => {
  let todoP = document.createElement('p');
  todoP.textContent = todo.text;
  document.querySelector('body').appendChild(todoP);
});



















// const todos2 = document.querySelectorAll('p');

// const filterPs = function (ps, query) {
//   ps.forEach(p => {
//     if (p.textContent.toLowerCase().includes(query)) {
//       p.remove();
//     };
//   });
// };

// filterPs(todos2, 'the');