import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-details',
  templateUrl: './appareil-details.component.html',
  styleUrls: ['./appareil-details.component.scss']
})
export class AppareilDetailsComponent implements OnInit {


  appareilStatus : string ='Rien';
  appareilName : string ='Rien';

  constructor(private route:ActivatedRoute, private appareilService:AppareilService) {
    
   }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.appareilName= this.appareilService.getAppareilById(+id).name;
    this.appareilStatus= this.appareilService.getAppareilById(+id).status;
  }

}
