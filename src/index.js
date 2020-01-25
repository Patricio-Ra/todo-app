import "core-js/stable";
import "regenerator-runtime/runtime";
import { setFilters } from "./filters";
import { createTodo } from "./todos"
import { renderTodos } from "./views";

renderTodos();

document.querySelector('#filter-todos').addEventListener('input', e => {
    setFilters({
        searchText: e.target.value
    });
	renderTodos();
});

document.querySelector('#hide-completed').addEventListener('change', e => {
    setFilters({
        hideCompleted: e.target.checked
    });
	renderTodos();
});

document.querySelector('#new-todo-form').addEventListener('submit', e => {
	e.preventDefault();
	const text = e.target.elements.newTodoInput.value.trim();
    createTodo(text);
    renderTodos();
	e.target.elements.newTodoInput.value = '';
});

window.addEventListener('storage', e => {
    if (e.key === 'todos') {
        renderTodos();
    };
});