import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MatSliderModule],
  template: `
    <p>
      home-page works!
    </p>
    <mat-slider min="1" max="100" step="1" value="50"></mat-slider>
  `,
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
