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
  if (e.target.elements.newTodoInput.value.length) {
    const newTodo = {
      id: uuidv4(),
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
