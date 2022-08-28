import './styles.css'
import { Todo, TodoList } from './js/classes'
import { createTodo } from './js/components/todo'

export const todoList = new TodoList()
const todo = new Todo('New Todo')

todoList.addTodo(todo)

createTodo(todo)

console.log(todoList)