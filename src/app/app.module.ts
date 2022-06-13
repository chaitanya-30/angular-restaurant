import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestsaurantsComponent } from './restsaurants/restsaurants.component';
import { LoginComponent } from './login/login.component';
import { AddrestaurantComponent } from './restaurants/addrestaurant/addrestaurant.component';
import { RestaurantaddService } from './restaurantadd.service';
import { FormsModule } from '@angular/forms';
const approutes: Routes= [
  {path:'' , component: HomeComponent},
  {path:'restaurants' , component: RestsaurantsComponent},
  {path:'addrestaurant',component:AddrestaurantComponent},
 {path:'login', component:LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestsaurantsComponent,
    LoginComponent,
    AddrestaurantComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [RestaurantaddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
