# Reactive Forms

- ```ng new reactive-form```
- ```ng serve```





## Creating the Form Model

#### app.component.html
```json
 <form [formGroup]="registrationForm">
  <div class="form-group">
    <label for="">Name</label>
    <input type="text"
          formControlName="userName"
          class="form-control"
          name="username" />
  </div>
  
  <div class="form-group">
    <label for="">Password</label>
    <input type="password"
          formControlName="password"
          class="form-control"
          name="password"
          >
  </div>
  
  <div class="form-group">
    <label for="">Confirm Password</label>
    <input type="password"
          formControlName="confrimPassword"
          class="form-control"
          name="confirm_password"
          >
  </div>
  <button class="btn btn-primary">Sign Up</button>
  
 {{ registrationForm.value | json }}
  
 </form>
 <router-outlet></router-outlet>
```










#### app.components.ts
```js
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // registerationFrom : FormGroup;
  registrationForm = new FormGroup({
    userName: new FormControl('Amoos'),
    password: new FormControl(''),
    confrimPassword: new FormControl('')
  })
  
  constructor(
    
  ) {}
  
}
```







#### app.module.ts
```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms'; // <-- NEW


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
```






