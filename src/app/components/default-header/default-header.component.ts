import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],
  standalone: false,
})
export class DefaultHeaderComponent implements OnInit {
  @Input() title: string = '';


  constructor(
    
  ) { }

  ngOnInit() {
  }

}
