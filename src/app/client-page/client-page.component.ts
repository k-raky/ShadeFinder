import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

  user : any
  username= "";

  constructor(public auth : AuthService) {
    this.user={}
   }

  ngOnInit(): void {
   this.auth.user$.subscribe((success : any)=>{
     this.user=success;
     this.username=this.user.name
   })  
}

}
