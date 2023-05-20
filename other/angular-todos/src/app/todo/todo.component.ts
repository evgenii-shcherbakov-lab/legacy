import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Todo } from '../../interfaces/types'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo = { text: '', isStrong: false, isCompleted: false }
  @Input() index: number = 0
  @Output() onChange = new EventEmitter<Todo>()
  @Output() onDelete = new EventEmitter<number>()

  ngOnInit(): void {}

  completedHandler(isChecked: boolean) {
    this.todo.isCompleted = isChecked
    this.onChange.emit(this.todo)
  }

  strongHandler() {
    this.todo.isStrong = !this.todo.isStrong
    this.onChange.emit(this.todo)
  }

  deleteHandler() {
    this.onDelete.emit(this.index)
  }
}
