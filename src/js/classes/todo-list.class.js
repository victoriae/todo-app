export class TodoList {
  constructor() {
    this.todos = []
  }

  addTodo(todo) {
    this.todos.push(todo)
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id.toString() !== id.toString())
    console.log(this.todos)
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

    console.log(this.todos)
  }
}