import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantaddService } from '../restaurantadd.service';

@Component({
  selector: 'app-restsaurants',
  templateUrl: './restsaurants.component.html',
  styleUrls: ['./restsaurants.component.css']
})
export class RestsaurantsComponent implements OnInit {
  restaurantnames: any;
  // @ViewChild ('addrestaurant') addre: { addrestaurant: any; };

  displayaddrestaurant:boolean

  constructor(private router:Router,private addres:RestaurantaddService) {
  
   }

  ngOnInit(): void {
    this.restaurantnames=this.addres.restaurantnames
 
  }
deleterestaurant(i:number){
  this.displayaddrestaurant=false
  console.log(i)
this.restaurantnames.splice(i,1)
this.addres.restaurantnames=this.restaurantnames
}
addrestaurant(){
  this.displayaddrestaurant=true
  // this.displayaddrestaurant=this.addres.addrestaurant;

}
}
