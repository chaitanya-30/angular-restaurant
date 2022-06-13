import { asNativeElements, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantaddService } from 'src/app/restaurantadd.service';

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent implements OnInit {
  numr:number
  namerestaurant:string
  place:string
  city:string
  addrestaurant:boolean;
   @ViewChild ('number') num;
@ViewChild ('nameres') names;
@ViewChild ('place') pl;
@ViewChild ('city') ci;
@ViewChild('addform') addf;

restaurantnames:any
  constructor(private restadd:RestaurantaddService,private router:Router,private elref:ElementRef) { 
    this.restaurantnames=restadd.restaurantnames;
 
 
  }

  ngOnInit(): void {
   
  this.addrestaurant=true;
    console.log("init")
  }
  ngOnDoCheck(){
    console.log("docheck")
   
  }
  ngAfterContentInit(){

    console.log("after init")
    // this.addrestaurant=this.restadd.addrestaurant
  }

  ngAfterContentChecked(){
    console.log("after conten checked")
    this.addrestaurant=!this.addrestaurant

  }
  ngAFterViewInit(){
    console.log("after view init")
   
  }
  ngAfterViewChecked(){

    console.log("after view checked")
  
 
    console.log(this.addf)

    if(this.addrestaurant){     
      this.addf.nativeElement.className='hideaddrestaurant'

     }else{
      this.addf.nativeElement.className='showaddrestaurant'
   
   
     }
  }
  ngAfterDestroy(){
    console.log("destroy")
  }
  addToRestaurants(){

    // this.numr=this.num.nativeElement.value;
    this.namerestaurant=this.names.nativeElement.value;
    this.place=this.pl.nativeElement.value;
    this.city=this.ci.nativeElement.value;
    this.restadd.addrestaurant=!this.restadd.addrestaurant
  //  length:number=this.restaurantnames+1
    this.restaurantnames.push({no:(this.restaurantnames.length)+1,name:this.namerestaurant,place:this.place,city:this.city});
    console.log(this.restadd.addrestaurant)
     this.addrestaurant=this.restadd.addrestaurant
     if(this.addrestaurant){     
      this.addf.nativeElement.className='hideaddrestaurant'
     
      this.restadd.addrestaurant=false
     }else{
      this.addf.nativeElement.className='showaddrestaurant'
   
      this.restadd.addrestaurant=true
     }
        
  }


}
