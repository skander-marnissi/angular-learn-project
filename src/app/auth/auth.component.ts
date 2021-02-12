import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  authStatus: boolean ;

  onSignIn(){
    this.authService.signIn().then(()=>{

      this.authStatus= this.authService.isAuth;

      console.log("je suis Connecter : "+this.authService.isAuth);

      this.router.navigate(['appareils']);
    });
   
   
  }


  onSignOut(){
  this.authService.signOut();

  this.authStatus= this.authService.isAuth;

  console.log("je suis Déconnecter : "+this.authService.isAuth);

  }
  ngOnInit(): void {
    this.authStatus= this.authService.isAuth;
  }

}
