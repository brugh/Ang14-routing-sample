import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { booksFetchAPISuccess, invokeBooksAPI } from './books.action';
import { BooksService } from "../books.service";
import { Books } from "./books";

@Injectable()
export class BooksEffect {

  constructor(
    private actions$: Actions,
    private booksService: BooksService,
    private store: Store<{books: Books}>
  ) { }

  loadAllBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeBooksAPI),
      withLatestFrom(this.store),
      mergeMap(([, booksfromStore]) => {
        console.log(booksfromStore);
        if (booksfromStore.books.list.length > 0) {
          return EMPTY;
        }
        return this.booksService
          .get()
          .pipe(map((data:Books) => booksFetchAPISuccess({ allBooks: data })));
      })
    )
  );
}