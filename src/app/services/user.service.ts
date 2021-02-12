import {Subject} from 'rxjs-compat/Subject';
import {User} from '../models/user.model';

export class UserService{

    userSubject = new Subject <User []>() ;
    users : any[] = [
    {
        firstname:'Skander',
        lastname:'Marnissi',
        email:'skander.marnissi@gmail.com',
        preferedDrink:'coca',
        hobbies:['foot','musique']
    }
    
    ] ;

    
    emitUserSubject(){
        this.userSubject.next(this.users.slice());
    }
    
    addUser(user : User){
        this.users.push(user);
        this.emitUserSubject();
    }


}