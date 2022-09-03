import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule
} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';
import { AllusersComponent } from './pages/user/allusers/allusers.component';
import { SingleuserComponent } from './pages/user/singleuser/singleuser.component';
import { AllComponent } from './pages/blog/all/all.component';
import { SingleComponent } from './pages/blog/single/single.component';
import { AddComponent } from './pages/blog/add/add.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { EditblogComponent } from './pages/blog/editblog/editblog.component';
import { DeleteblogComponent } from './pages/blog/deleteblog/deleteblog.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AllusersComponent,
    SingleuserComponent,
    AllComponent,
    SingleComponent,
    AddComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EditblogComponent,
    DeleteblogComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
