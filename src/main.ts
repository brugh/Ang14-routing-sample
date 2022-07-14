import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.router';
import { bookReducer } from './app/books/books.reducer';
import { BooksEffect } from './app/books/books.effect';
import { environment } from './environments/environment';

if (environment.production) enableProdMode();

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(APP_ROUTES), 
      BrowserAnimationsModule,
      StoreModule.forRoot({'books': bookReducer}),
      StoreDevtoolsModule.instrument(),
      EffectsModule.forRoot([BooksEffect])
    )
  ]
}).catch(err => console.error(err));