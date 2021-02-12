import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() firstname : string;
  @Input() lastname : string;
  @Input() email : string;
  @Input() preferedDrink : string;
  @Input() hobbies: string[];


  constructor() { }

  ngOnInit(): void {
  }

}
