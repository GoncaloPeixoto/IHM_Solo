import { Component } from '@angular/core';
import { POIS } from '../json/pois';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: false,
})
export class Tab4Page {
poisData:any[] = POIS;
  constructor() {}

}
