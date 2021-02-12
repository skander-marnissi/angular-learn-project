import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {User} from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm : FormGroup;
  
  
  constructor(private formBuilder: FormBuilder ,private userService:UserService, private router:Router) { }

  ngOnInit(): void {
   this.initForm();
  }


  initForm(){
    this.userForm = this.formBuilder.group({
      firstname : ['',Validators.required],
      lastname : ['',Validators.required],
      email : ['',[Validators.required, Validators.email]],
      preferedDrink : ['',Validators.required],
      hobbies : this.formBuilder.array([])

    });
  }

    getHobbies():FormArray{
      return this.userForm.get('hobbies') as FormArray;
    }

    onSubmitForm(){
      const fromValue = this.userForm.value;
      const user = new User(fromValue['firstname'],
      fromValue['lastname'],
      fromValue['email'],
      fromValue['preferedDrink'],
      fromValue['hobbies'] ? fromValue['hobbies'] : []
      );

      this.userService.addUser(user);
      this.router.navigate(['/users']);


    }

    onAddHobbi(){
      const newHobbi = this.formBuilder.control(null, Validators.required);
      this.getHobbies().push(newHobbi);
    
    }
  


}
