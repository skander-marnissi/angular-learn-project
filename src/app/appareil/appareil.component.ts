import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {


  @Input() appareilName : string ;
  @Input() appareilStatus :string ;
  @Input() appareilIndex :number;
  @Input() idAppareil:number;

  constructor(private appareilService:AppareilService, private router:Router) {

   }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus
  }
  getColor(){
    var color;
    this.appareilStatus==="OFF"? color = 'red':color='green';
    return color
  }
 
  onSwitch(){
   if(this.appareilStatus==="ON")
   {
     this.appareilService.powerOffOne(this.appareilIndex);
     console.log("Status acutelle : "+this.appareilStatus);
    }
   else if (this.appareilStatus==="OFF")
  { 
   this.appareilService.powerOnOne(this.appareilIndex);
   console.log("Status acutelle : "+this.appareilStatus);
  }
  }
  
}
