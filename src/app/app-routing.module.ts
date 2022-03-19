import { componentFactoryName } from '@angular/compiler';
import { OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ClientPageComponent } from './client-page/client-page.component';
import { HomeComponent } from './home/home.component';
import { PictureTakerComponent } from './picture-taker/picture-taker.component';


const routes: Routes = [
  {path : "",component : ClientPageComponent},
  {path : "Home", component : HomeComponent},
  {path : "ClientPage", component : ClientPageComponent},
  {path : "PictureTaker", component : PictureTakerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
  
  constructor() {}

}



