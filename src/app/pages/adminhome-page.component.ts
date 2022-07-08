import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminhome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      adminhome-page works!
    </p>
  `,
  styles: [
  ]
})
export class AdminhomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
