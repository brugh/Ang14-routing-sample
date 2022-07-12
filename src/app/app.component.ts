import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { FooDirective } from './foo.directive';

@Component({
  standalone: true,
  imports: [CommonModule, FooDirective, RouterModule, MatRadioModule],
  selector: 'app-root',
  template: `
    <div>
      <a [highlight]="color" routerLink="/home">Home</a> | 
      <a [highlight]="color" routerLink="/todos">Todos</a> | 
      <a [highlight]="color" routerLink="/admin">Admin</a>
    </div>
    <div>
      <mat-radio-group>
        <mat-radio-button (click)="color='lightgreen'">Green</mat-radio-button>
        <mat-radio-button (click)="color='yellow'">Yellow</mat-radio-button>
        <mat-radio-button (click)="color='cyan'">Cyan</mat-radio-button>
      </mat-radio-group>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  color = 'yellow'
}
