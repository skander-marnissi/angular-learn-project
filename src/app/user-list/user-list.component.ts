import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit,OnDestroy {

  users : User[];
  userSubscription : Subscription;
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.userSubscription = this.userService.userSubject.subscribe(
      (users:User[]) => {
        this.users=users;
      }
    );

    this.userService.emitUserSubject();
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

}
