import { Todo } from "../classes"
import { todoList } from "../../index"

// HTML references
const todoListElement = document.querySelector('.todo-list')
const todoInput = document.getElementById('add-todo-field')
const addTodoButton = document.getElementById('add-todo-check')
const deleteCompletedButton = document.getElementById('clear-completed')

export const createTodo = (todo) => {
  const liContent = `<input
                      type="checkbox"
                      class="todo-check flex-shrink-0"
                      name="complete-todo-check"
                      id="complete-todo-check"
                    />
                    <label
                      class="todo-text
                      align-self-center flex-grow">
                      ${todo.title}
                    </label>
                    <button class="delete-todo flex-shrink-0">
                      <img
                        src="./assets/img/icon-cross.svg"
                        alt="delete todo" />
                    </button>`

  const li = document.createElement('li')
  li.setAttribute('data-id', todo.id)
  li.classList.add('todo-item', 'flex', 'align-items-center', 'gap')
  if (todo.completed) li.classList.add('todo-completed')
  li.innerHTML = liContent

  todoListElement.append(li)

  return li
}

//events
todoInput.addEventListener('keyup', (e) => {
  if (e.code === 'Enter' && todoInput.value.length > 0) {
    addTodo(todoInput.value)
  }
})

addTodoButton.addEventListener('click', (e) => {
  if (todoInput.value.length > 0) {
    addTodo(todoInput.value)
  }
})

todoListElement.addEventListener('click', (e) => {
  const elementName = e.target.localName // input, label, button
  const todoElement = e.target.parentElement
  const todoId = todoElement.getAttribute('data-id')

  if (elementName === 'input') {
    todoList.toggleComplete(todoId)
    todoElement.classList.toggle('todo-completed')
  }else if (elementName === 'button') {
    todoList.deleteTodo(todoId)
    todoElement.remove()
  }
})

deleteCompletedButton.addEventListener('click', (e) => {
  todoList.deleteCompleted()
  const completedElements = document.querySelectorAll('.todo-completed')
  completedElements.forEach( element => element.remove())
})

// functions
const addTodo = (todo) => {
  const newTodo = new Todo(todo)
  todoList.addTodo(newTodo)
  createTodo(newTodo)
  todoInput.value = ''
}
