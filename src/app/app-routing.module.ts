import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanDeactivate } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { exitGuard } from './guards/exit.guard';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path:'login', component: LoginComponent},

  { 
    path:'home', component: HomeComponent,
    canActivate: [authGuard],
    canDeactivate: [exitGuard]
  },

  { path:'**', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
