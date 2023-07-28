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

const routes:Routes=[
  {
    path:'',component:HomeComponent
  } ,
  {
    path:'home/:id',component:HomeComponent
  },
  {
    path:'products',component:ProductComponent
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
