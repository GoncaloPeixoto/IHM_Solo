import { Component } from '@angular/core';
import { RESTAURANTES } from '../json/restaurantes';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  restaurantesData:any[] = RESTAURANTES;
  constructor() {}

}
