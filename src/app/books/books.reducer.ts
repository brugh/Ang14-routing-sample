import { createReducer, on } from "@ngrx/store";
import { Books } from "./books";
import { booksFetchAPISuccess } from './books.action';
 
export const initialState: Books = { list: []};
 
export const bookReducer = createReducer(
    initialState,
    on(booksFetchAPISuccess, (state: Books, { allBooks }) => { console.log(allBooks); return allBooks } )
  );