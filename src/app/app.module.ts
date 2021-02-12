import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PostComponent } from './post/post.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import {AppareilService} from './services/appareil.service';
import { AppareilListComponentComponent } from './appareil-list-component/appareil-list-component.component';
import{Routes,RouterModule} from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AppareilDetailsComponent } from './appareil-details/appareil-details.component';
import { AuthService } from './services/auth.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import{AuthGuard} from './services/authguard.service';
import{PostService} from './services/post.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import{UserService} from './services/user.service';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes :Routes = [
  {path:'appareils',canActivate:[AuthGuard],component:AppareilListComponentComponent},
  {path:'appareils/:id',canActivate:[AuthGuard], component:AppareilDetailsComponent},
  {path:'addAppareil', canActivate:[AuthGuard], component:EditAppareilComponent},
  {path:'auth',component:AuthComponent},
  {path:'posts',canActivate:[AuthGuard],component:PostListComponentComponent},
  {path:'users', canActivate:[AuthGuard], component:UserListComponent},
  {path:'new-user', canActivate:[AuthGuard], component:NewUserComponent},  
  {path:'', component:AppareilComponent},
  {path:'Undifined', component:FourOhFourComponent},
  {path:'**',redirectTo:'Undifined'}
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    PostComponent,
    PostListComponentComponent,
    AppareilListComponentComponent,
    AuthComponent,
    PostDetailsComponent,
    AppareilDetailsComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    EditPostComponent,
    UserListComponent,
    NewUserComponent,
    UserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    
  ],
  providers: [AppareilService,
              AuthService,
              AuthGuard,
              PostService,
              UserService
            ],

  bootstrap: [AppComponent]
})
export class AppModule { }
