import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { select, Store } from '@ngrx/store';

import { selectBooks } from '../books/books.selector';
import { invokeBooksAPI } from '../books/books.action';
import { Books } from '../books/books';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MatSliderModule],
  template: `
    <p>
      home-page works!
    </p>
    <mat-slider min="1" max="100" step="1" value="50"></mat-slider>
    <div class="card" *ngFor="let b of books$|async">
      <ul>
        <li>Title: <b>{{b.name}}</b></li>
        <li>Author: {{b.author}}</li>
        <li>Cost: &euro;{{b.cost}}</li>
      </ul>
    </div>
  `,
  styles: [`
    ul { list-style-type: none }
    .card { border: 1px solid #ccc; border-radius:1em; margin: 1em}
  `]
})
export class HomePageComponent implements OnInit {
  books$ = this.store.select(s => s.books.list);

  constructor(private store: Store<{books: Books}>) {
    this.books$.subscribe(b => console.log(b));
  }
  
  ngOnInit(): void {
    this.store.dispatch(invokeBooksAPI());
    this.store.select(s => console.log(s));
  }
}
