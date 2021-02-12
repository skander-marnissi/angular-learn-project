import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import {Subscription} from 'rxjs-compat/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appareil-list-component',
  templateUrl: './appareil-list-component.component.html',
  styleUrls: ['./appareil-list-component.component.scss']
})
export class AppareilListComponentComponent implements OnInit,OnDestroy {

  title = 'Ma premierre app';
  isAuth = false;
  lastUpdate = new Promise((resolve,reject)=>{
  const date = new Date();


  setTimeout(
      () =>{
        resolve(date)
      },5000
    );

  })

  appareils : any[];
  appareilSubscription: Subscription;

  

  


  constructor(private appareilService:AppareilService,private router:Router){
    
   
  setTimeout(
    () =>{
      this.isAuth=true;
    },3000
  );



}


ngOnInit(){
  this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
    
    (appareils : any[]) => {

    this.appareils = appareils;
  }
  );
  this.appareilService.emitAppareilSubject();
}
  
onAllumer(){
  this.appareilService.powerOnAll();
}

onEteindre(){
  confirm('Êtes-vous sur de vouloir fermer tous les appareils ? ')?this.appareilService.powerOffAll(): null;
 
}

ngOnDestroy(){
  this.appareilSubscription.unsubscribe();
}

onAjouter(){
  this.router.navigate(['/addAppareil']);
}

onSave(){
  this.appareilService.saveAppareilToServer();
}


onFetch(){
  this.appareilService.fetchAppareilFromServer();
}
}
