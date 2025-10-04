import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent },
//   { 
//     path: 'dashboard', 
//     loadChildren: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
//     canActivate: [authGuard]
//   },
  { path: '**', redirectTo: 'login' } // Wildcard route for 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }