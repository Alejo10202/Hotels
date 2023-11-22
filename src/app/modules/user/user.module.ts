import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user-routing.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule { }
