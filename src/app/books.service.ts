import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Books } from './books/books';

const getData = (url: string) => {
  return inject(HttpClient).get(url);
}

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  constructor() { }

  // get() { return getData('http://localhost:3000'); }
  get(): Observable<Books> {
    return new Observable<Books>(ob => ob.next(JSON.parse(`
      {
        "list": [
          {
            "id": 1,
            "name": "My first book",
            "author": "Me Myself and I",
            "cost": 400
          },         
          {
            "id": 2,
            "name": "My 2nd book",
            "author": "The other person",
            "cost": 500
          }
        ]
      }
    `)
    ));
  }
}
