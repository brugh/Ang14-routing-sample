import { Routes } from "@angular/router";
import { AdminhomePageComponent } from "./pages/adminhome-page.component";

export const ADMIN_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: AdminhomePageComponent },
];