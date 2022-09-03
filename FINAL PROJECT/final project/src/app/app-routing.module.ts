import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/blog/add/add.component';
import { EditblogComponent } from './pages/blog/editblog/editblog.component';
import {DeleteblogComponent } from './pages/blog/deleteblog/deleteblog.component';
import { SingleComponent } from './pages/blog/single/single.component';
import { HomeComponent } from './pages/home/home.component';
import { AllusersComponent } from './pages/user/allusers/allusers.component';

import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { SingleuserComponent } from './pages/user/singleuser/singleuser.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"addBlog", component:AddComponent},
  {path:"singleBlog", component:SingleComponent},
  {path:"editBlog", component:EditblogComponent},
  {path:"deleteBlog", component:DeleteblogComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  // {path:"user", children:[
  //   {path:"edit", component:EditComponent},
  //   {path:"all", children:[
  //     {path:"", component:AllusersComponent},
  //     {path:":id", component:SingleuserComponent}  
  //   ]}
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
