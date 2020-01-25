import uuidv4 from 'uuid/v4';

// Setup the empty todos array
let todos = [];

// Fetch existing data from localStorage
const loadTodos = () => {
	const todosJSON = localStorage.getItem('todos');
	try {
		return todosJSON ? JSON.parse(todosJSON) : [];
	} catch (e) {
		return [];
	};
};

// Save data to localStorage
const saveTodos = () => {
	localStorage.setItem('todos', JSON.stringify(todos));
};

// Exporting todos function.
const getTodos = () => {
	const todos = loadTodos();
	return todos;
};

const createTodo = (text) => {
    if (text !== '') {
		todos.push({
			id: uuidv4(),
			text,
			completed: false
		});
		saveTodos();
	};
};

const removeTodo = id => {
	const todoIndex = todos.findIndex(todo => todo.id === id);

	if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
        saveTodos();
	};
};

// Toggle completed status with checkboxes.
const toggleCompleted = id => {
	const todo = todos.find(todo => todo.id === id);

	if (todo) {
		todo.completed = !todo.completed;
		saveTodos();
	};
};

todos = loadTodos();

export { toggleCompleted, removeTodo, createTodo, getTodos, saveTodos };