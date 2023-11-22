import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from 'src/app/guards/auth.guard';
import { exitGuard } from 'src/app/guards/exit.guard';

export const userRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent,
        canActivate: [authGuard],
        canDeactivate: [exitGuard]
    },
]