import './styles.css'
import './js/components/theme'
import { handleDragAndDrop } from './js/components/d&d'
import { TodoList } from './js/classes'
import { createTodo, showCounter } from './js/components/todo'

export const todoList = new TodoList()

// todoList.todos.forEach((todo) => { createTodo(todo)})
todoList.todos.forEach( createTodo )
showCounter()
handleDragAndDrop()