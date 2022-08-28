export class TodoList {
  constructor() {
    this.getLocalStorage()
  }

  addTodo(todo) {
    this.todos.push(todo)
    this.updateLocalStorage()
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id.toString() !== id.toString())
    this.updateLocalStorage()
  }

  toggleComplete(id) {
    for (const todo of this.todos) {
      if (todo.id.toString() === id.toString()) {
        todo.complete = !todo.complete
        break
      }
    }
  }

  deleteCompleted() {
    this.todos = this.todos.filter(todo => !todo.complete)
    this.updateLocalStorage()
  }

  updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
    console.log(this.todos)
  }

  getLocalStorage() {
    this.todos = localStorage.getItem('todos')
                  ? JSON.parse(localStorage.getItem('todos'))
                  : []
  }
}