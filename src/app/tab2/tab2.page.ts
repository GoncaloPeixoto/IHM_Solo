import { Component } from '@angular/core';
import { PRODUTOS } from '../json/produtos';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  produtosData:any[] = PRODUTOS;
  constructor() {}

}
