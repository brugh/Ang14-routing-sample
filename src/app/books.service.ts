import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './books/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  get(): Observable<Books> {
    return new Observable<Books>(ob => ob.next(JSON.parse(`
      {
        "list": [
          {
            "id": 1,
            "name": "My first book",
            "author": "Me Myself and I",
            "cost": 400
          }
        ]
      }
    `)
    ));
  }
}
