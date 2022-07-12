import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FooDirective } from './foo.directive';

@Component({
  standalone: true,
  imports: [CommonModule, FooDirective, RouterModule, MatRadioModule, MatToolbarModule],
  selector: 'app-root',
  template: `
    <mat-toolbar>
        <a [highlight]="color" routerLink="/home">Home</a> | 
        <a [highlight]="color" routerLink="/todos">Todos</a> | 
        <a [highlight]="color" routerLink="/admin">Admin</a>
    </mat-toolbar>   
    <div>
      <mat-radio-group value='yellow'>
        <mat-radio-button value='green' (click)="color='lightgreen'">Green</mat-radio-button><br/>
        <mat-radio-button value='yellow' (click)="color='yellow'">Yellow</mat-radio-button><br/>
        <mat-radio-button value='cyan' (click)="color='cyan'">Cyan</mat-radio-button>
      </mat-radio-group>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    a { color: white; text-decoration: none}
  `]
})
export class AppComponent {
  color = 'yellow'
}
