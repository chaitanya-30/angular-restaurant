import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantaddService {
  addrestaurant:boolean=true;

restaurantnames=[{no:1, name:"Barbie", place:"Hadapsar",city:"pune"},
             {no:2,name:"cocoon",place:"MargarPattaCity",city:"pune"},
            {no:3,name:"DeccanHarvest",place:"MargarPattaCity",city:"pune"}]
  constructor() { }
}
