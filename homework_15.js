class ToDo {
    constructor(title) {
        this.id = Date.now()
        this.title = title;
        this.completed = false;
        this.dateAdd = new Date();
        this.dateUpdate = new Date();
    }

    toggleCompleted() {
        this.completed = !this.completed;
        this.update = new Date();
    }

    edit(editTitle) {
        if (!title.trim) {
            throw new Error("Empty note!");
        }
        this.title = editTitle;
        this.update = new Date();
    }
}


class TodoList {
    constructor() {
        this.todos = [];
    }

    add(title) {
        const todo = new ToDo(title);
        this.todos.push(todo);
    }

    remove(id) {
        this.todos = this.todos.filter(todo => todo.id === id);
    }

    edit(id, editTitle) {
        const todo = this.todos.find(todo => todo.id === id);

        if (todo) {
            todo.edit(editTile)
        }
    }

    toggleCompleted(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.toggleCompleted();
        }
    }

    getAll() {
        return this.todos;
    }

    getTodo(id) {
        return this.todos.find(todo => todo.id === id);
    }

    getStatistics() {
        return (this.todos.length, this.todos.filter(todo => !todo.completed).length);
    }

    searchByName(title) {
        return this.todos.filter(todo => todo.title.toLowerCase().includes(title.toLowerCase()));
    }

    sortByStatus() {
        return [...this.todos].sort((a, b) => a.completed - b.completed);
    }

    sortByDate(order = "asc") {
        return this.todos.slice().sort((a, b) =>
            Math.sign(a.createdAt - b.createdAt) * (order === "asc" ? 1 : -1)
        );
    }

    searchByDateRange(start, end) {
        return this.todos.filter(todo =>
            todo.createdAt >= new Date(start) && todo.createdAt <= new Date(end)
        );
    }
}

const todos = new TodoList();

todos.add("Зробити домашку №17.1 :)");
todos.add("ходити на уроки онлайн)))");
todos.add("Вчити JS");

console.log(todos.getAll());

todos.toggleCompleted(todos.getAll()[0].id);

console.log(todos.getStatistics());

console.log(todos.sortByStatus());
console.log(todos.sortByDate("desc"));

console.log(todos.searchByName("№17.1"));
console.log(todos.searchByDateRange("2024-01-01", "2025-01-01"));