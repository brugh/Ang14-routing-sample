import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      todo-page works!
    </p>
  `,
  styles: [
  ]
})
export class TodoPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
