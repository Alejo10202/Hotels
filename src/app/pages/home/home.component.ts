import { Component } from '@angular/core';
import { Hotel } from '../../models/hotels.inteface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
  public hotels:Hotel[]

  constructor(){
    this.hotels = [
       { name:'test', description:'the best', score:9, image:'assets/img/hotel.jpg'},
       { name:'test', description:'the best', score:9, image:'assets/img/hotel.jpg'},
       { name:'test', description:'the best', score:9, image:'assets/img/hotel.jpg'}
    ]
  }

}
