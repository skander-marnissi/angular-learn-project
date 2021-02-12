import { Component, OnInit, OnDestroy } from '@angular/core';
import{Observable} from 'rxjs-compat/Observable';
import 'rxjs-compat/add/observable/interval'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  
 seconde:number;
  counterSubscription : Subscription;
ngOnInit(){
  const counter = Observable.interval(1000);
  this.counterSubscription = counter.subscribe(
    (value)=>{
      this.seconde = value;
    }
  )
}
ngOnDestroy(){
  this.counterSubscription.unsubscribe();
}
  
}
