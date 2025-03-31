<<<<<<< Updated upstream
import { Component } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: 'splash.page.html',
  styleUrls: ['splash.page.scss'],
  standalone: false,
})
export class SplashPage {

  constructor() {}
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: false,
})
export class SplashPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
>>>>>>> Stashed changes

}
