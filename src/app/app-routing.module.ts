import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './view/blog/blog-list/blog-list.component';
import { UserListComponent } from './view/user/user-list/user-list.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';


const routes: Routes=[
  {path:'dashboard',component:DashboardComponent},
  {path:'blogs', component:BlogListComponent},
  {path:'users',component:UserListComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
