import { Component } from '@angular/core';
import { Hotel } from '../../models/hotels.inteface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
  public hotels:Hotel[]

  constructor(private router:Router){
    this.hotels = [
       { name:'test', description:'the best', score:9, image:'assets/img/hotel.jpg', button:'Ver'},
       { name:'test', description:'the best', score:9, image:'assets/img/hotel.jpg', button:'Ver'},
       { name:'test', description:'the best', score:9, image:'assets/img/hotel.jpg', button:'Ver'}
    ]
  }

  logOut(){
    this.router.navigate(['/login'])
    localStorage.removeItem('token');
  }

}
