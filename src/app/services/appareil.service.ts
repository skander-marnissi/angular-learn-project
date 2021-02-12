import{Subject} from 'rxjs-compat/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';



@Injectable()
export class AppareilService{
   


  constructor(private httpClient: HttpClient){}
  
  appareilSubject = new Subject<any[]>();
  
  private appareils = [
       
];


emitAppareilSubject(){
  this.appareilSubject.next(this.appareils.slice());
}

powerOnAll(){

    this.appareils.forEach(appareil => {
        appareil.status="ON"
        
    });
    this.emitAppareilSubject();
}

powerOffAll(){
    this.appareils.forEach(appareil => {
        appareil.status="OFF"
        
    });
    this.emitAppareilSubject();
}

getAppareilById(id:number){
  const appareil = this.appareils.find((s)=>{
   return s.id===id;
  });

  return appareil;
}

powerOffOne(i:number){

  this.appareils[i].status='OFF';
  this.emitAppareilSubject();
}

powerOnOne(i:number){
  this.appareils[i].status='ON';

  this.emitAppareilSubject();
}
addAppareil(name: string, status: string){
const appareil = {
    id:0,
    name:'',
    status:''
}

appareil.id = this.appareils[this.appareils.length-1].id + 1
appareil.name = name ;
appareil.status = status;

this.appareils.push(appareil);
this.emitAppareilSubject();


}

saveAppareilToServer(){

  this.httpClient.put('https://http-client-angular-f742f.firebaseio.com/appareil.json',this.appareils).subscribe(
    ()=>{
      console.log("Oppération de sauvegarde réussie ! ");
    },
    (error)=>{
      console.log("Oppération de échouer réussie ! ");
    }
  );
}

fetchAppareilFromServer(){
  this.httpClient.get<any[]>('https://http-client-angular-f742f.firebaseio.com/appareil.json').subscribe(
    (response)=>{
      this.appareils = response;
      this.emitAppareilSubject();
    },
    (error)=>{
      console.log("Oppération de échouer réussie ! ");
    }
  );
}

}

