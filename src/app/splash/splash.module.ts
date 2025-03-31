<<<<<<< Updated upstream
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SplashPage } from './splash.page';


import { SplashPageRoutingModule } from './splash-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashPageRoutingModule } from './splash-routing.module';

import { SplashPage } from './splash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
>>>>>>> Stashed changes
    SplashPageRoutingModule
  ],
  declarations: [SplashPage]
})
export class SplashPageModule {}
