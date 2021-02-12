import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultStatus : string = "OFF";

  constructor(private router:Router, private appareilService:AppareilService) { }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm){
    this.appareilService.addAppareil(form.value['name'],form.value['status']);

    this.router.navigate(['/appareils']);

  }

}
