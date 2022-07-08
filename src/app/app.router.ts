import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { path: 'home', component: HomePageComponent },
  {
    path: 'todos', loadComponent: () => import('./pages/todo-page.component')
      .then(m => m.TodoPageComponent)
  },
  {
    path: 'admin', loadChildren: () => import('./admin.route')
      .then(mod => mod.ADMIN_ROUTES)
  },
];