import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { Homechild1Component } from './homechild1/homechild1.component';
import { Homechild2Component } from './homechild2/homechild2.component';

const routes:Routes=[
  {
    path:'',component:HomeComponent
  } ,
  {
    path:'home',component:HomeComponent,
    children:
    [ 
      {
      path:'homechild1',component:Homechild1Component
      },
      {
        path:'homechild2',component:Homechild2Component
        }
    ]
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'about',component:AboutComponent
  } ,
  {
    path:'**',component:NotFoundComponent
  } 

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    NotFoundComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    Homechild2Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
