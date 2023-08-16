import { Component, Input } from '@angular/core';
import { Hotel } from 'src/app/models/hotels.inteface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() public hotels: Hotel | null = null;

}
