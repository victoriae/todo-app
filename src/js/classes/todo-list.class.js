import { Todo } from './index'
import { showCounter } from '../components/todo'
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
        todo.completed = !todo.completed
        this.updateLocalStorage()
        break
      }
    }
  }

  deleteCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed)
    this.updateLocalStorage()
  }

  countTodos() {
    return this.todos.filter(todo => !todo.completed).length
  }

  updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
    showCounter()
    console.log(this.todos)
  }

  getLocalStorage() {
    this.todos = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : []

    // this.todos.map((todo) => Todo.fromJSON(todo))
    this.todos.map(Todo.fromJSON)
  }
}
