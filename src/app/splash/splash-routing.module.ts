import { NgModule } from '@angular/core';
<<<<<<< Updated upstream
import { RouterModule, Routes } from '@angular/router';
=======
import { Routes, RouterModule } from '@angular/router';

>>>>>>> Stashed changes
import { SplashPage } from './splash.page';

const routes: Routes = [
  {
    path: '',
<<<<<<< Updated upstream
    component: SplashPage,
=======
    component: SplashPage
>>>>>>> Stashed changes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
<<<<<<< Updated upstream
  exports: [RouterModule]
=======
  exports: [RouterModule],
>>>>>>> Stashed changes
})
export class SplashPageRoutingModule {}
