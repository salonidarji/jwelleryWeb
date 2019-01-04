import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: '', redirectTo: '/Jwellary', pathMatch: 'full'},

  {path: 'Jwellary', component: DashboardComponent },
  {path: 'Category', component: CategoryComponent },
  {path: 'Login', component: LoginComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
