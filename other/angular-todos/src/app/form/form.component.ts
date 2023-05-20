import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Todo } from '../../interfaces/types'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  inputText: string = ''
  isStrong: boolean = false

  @Output() onAdd = new EventEmitter<Todo>()

  ngOnInit(): void {}

  buttonHandler(): void {
    if (this.inputText?.trim() !== '') {
      this.onAdd.emit({
        text: this.inputText,
        isStrong: this.isStrong,
        isCompleted: false,
      })

      this.inputText = ''
      this.isStrong = false
    }
  }

  keyDownHandler(key: string) {
    if (key === 'Enter') this.buttonHandler()
  }
}
