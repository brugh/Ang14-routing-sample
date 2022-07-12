import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [CommonModule, MatRadioModule],
  template: `
    <p>
      todo-page works!
    </p>
    <mat-radio-group aria-label="Select an option">
      <mat-radio-button select value="1">Option 1</mat-radio-button>
      <mat-radio-button value="2">Option 2</mat-radio-button>
    </mat-radio-group>
  `,
  styles: [
  ]
})
export class TodoPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
