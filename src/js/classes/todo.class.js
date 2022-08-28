export class Todo {

  // Transform localStorage objects into Todo instances
  static fromJSON({ id, title, completed, created }) {
    const obj = new Todo(title)
    obj.id = id
    obj.completed = completed
    obj.created = created

    return obj
  }

  constructor(todo) {
    this.title = todo
    this.id = new Date().getTime()
    this.completed = false
    this.created = new Date()
  }
}