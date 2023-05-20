import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  appName = 'TodoApp'
  switchLabel = 'Dark mode'
  isDark = this.loadDarkMode()

  ngOnInit() {
    this.applyDarkMode()
  }

  applyDarkMode() {
    document.body.className = `mat-typography ${
      this.isDark ? 'dark-mode' : 'light-mode'
    }`
  }

  loadDarkMode(): boolean {
    return localStorage.getItem('darkMode')
      ? localStorage.getItem('darkMode') === 'true'
      : true
  }

  darkModeHandler(isChecked: boolean) {
    this.isDark = isChecked
    this.applyDarkMode()
    this.saveDarkMode()
  }

  saveDarkMode() {
    localStorage.setItem('darkMode', JSON.stringify(this.isDark))
  }
}
