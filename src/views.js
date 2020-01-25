import { removeTodo, getTodos, saveTodos, toggleCompleted } from './todos';
import { getFilters } from './filters';

// Render app based on filters.
const renderTodos = () => {
    const todosEl = document.getElementById('todos');
    const filters = getFilters();
	const filteredTodos = getTodos().filter(todo => {
		const textFiltering = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
		const completedFiltering = !filters.hideCompleted || !todo.completed;
		return textFiltering && completedFiltering;
		});

	const incompletedTodos = filteredTodos.filter(todo => !todo.completed);

	todosEl.innerHTML = '';
	todosEl.appendChild(generateSummary(incompletedTodos));

	if (filteredTodos.length > 0) {
		filteredTodos.forEach(todo => {
			todosEl.appendChild(generateTodo(todo));
		});
	} else {
		const emptyEl = document.createElement('p');
		emptyEl.classList.add('empty-message');
		emptyEl.textContent = 'No to-dos to show';
		todosEl.appendChild(emptyEl);
	};
};

// Generate DOM elements for an individual note.
const generateTodo = todo => {
	const todoElement = document.createElement('label');
	const containerEl = document.createElement('div');
	const todoCheck = document.createElement('input');
	const todoText = document.createElement('span');
	const deleteBtn = document.createElement('button');

  	// Setup todo checkbox.
	todoCheck.setAttribute('type', 'checkbox');
	todoCheck.checked = todo.completed;
	containerEl.appendChild(todoCheck);
	todoCheck.addEventListener('change', e => {
		toggleCompleted(todo.id);
		renderTodos();
	});

  	// Setup todo text.
	todoText.textContent = todo.text;
	containerEl.appendChild(todoText);

	// Setup container
	todoElement.classList.add('list-item');
	containerEl.classList.add('list-item__container');
	todoElement.appendChild(containerEl);

  	// Setup delete button.
	deleteBtn.textContent = 'remove';
	deleteBtn.classList.add('button', 'button--text');
	todoElement.appendChild(deleteBtn);
	deleteBtn.addEventListener('click', e => {
		removeTodo(todo.id);
		renderTodos();
	});

	return todoElement;
};

// Generate DOM elements for the summary.
const generateSummary = incompletedTodos => {
	const summary = document.createElement('h2');
	const plural = incompletedTodos.length === 1 ? '' : 's';
	summary.classList.add('list-title');
	summary.textContent = `You have ${incompletedTodos.length} todo${plural} left.`;

	return summary;
};

export { renderTodos };