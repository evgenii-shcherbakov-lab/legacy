import { Component } from '@angular/core'
import { Todo } from '../interfaces/types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = this.sortTodos(this.loadTodos())
  length = this.todos.length

  loadTodos(): Todo[] {
    return localStorage.getItem('todos')
      ? JSON.parse(<string>localStorage.getItem('todos'))
      : []
  }

  sortTodos(todos: Todo[]): Todo[] {
    return todos.sort((todo) => (todo.isStrong ? -1 : 1))
  }

  getTodosLength(): number {
    return this.todos.length
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
    this.todos = this.sortTodos(this.todos)
    this.saveTodos()
    this.length = this.getTodosLength()
  }

  changeTodo(todo: Todo, index: number) {
    this.todos = this.todos.map((v, i) => (i === index ? todo : v))
    this.todos = this.sortTodos(this.todos)
    this.saveTodos()
  }

  deleteTodo(index: number) {
    this.todos = this.todos.filter((v, i) => i !== index)
    this.length = this.getTodosLength()
    this.saveTodos()
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
