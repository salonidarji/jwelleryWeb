import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [

  {path: '', redirectTo: '/Jwellary', pathMatch: 'full'},

  {path: 'Jwellary', component: DashboardComponent },
  {path: 'Category', component: CategoryComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
