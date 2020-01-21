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
	const text = e.target.elements.newTodoInput.value.trim();

	if (text !== '') {
		const newTodo = {
			id: uuidv4(),
			text,
			completed: false
		};
		todos.push(newTodo);
		saveTodos(todos);
		renderTodos(todos, filters);
	};
	e.target.elements.newTodoInput.value = '';
});
