# Reactive Forms

- ```ng new reactive-form```
- ```ng serve```





## Creating the Form Model

#### app.component.html
```json
 <form [formGroup]="registrationForm">
  <div class="form-group">
    <label>Name</label>
    <input type="text"
          formControlName="userName"
          class="form-control"
          name="username" />
  </div>
  
  <div class="form-group">
    <label>Password</label>
    <input type="password"
          formControlName="password"
          class="form-control"
          name="password"
          >
  </div>
  
  <div class="form-group">
    <label>Confirm Password</label>
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













## Nesting Form Groups

#### app.component.html
```js
 <form [formGroup]="registrationForm">

  <div class="form-group">
    <label>Name</label>
    <input type="text"
          formControlName="userName"
          class="form-control"
          name="username" />
  </div>
  
  <div class="form-group">
    <label>Password</label>
    <input type="password"
          formControlName="password"
          class="form-control"
          name="password"
          >
  </div>
  
  <div class="form-group">
    <label>Confirm Password</label>
    <input type="password"
          formControlName="confrimPassword"
          class="form-control"
          name="confirm_password"
          >
  </div>

  

    <p>// Note: `formGroupName="address"`, not [formGroup]="address"</p>
    
    <div formGroupName="address">
        <div class="form-group">
          <label>City</label>
          <input type="text"
                formControlName="city"
                class="form-control"
                >
        </div>
        <div class="form-group">
          <label>State</label>
          <input type="text"
                formControlName="state"
                class="form-control"
                >
        </div>
        <div class="form-group">
          <label>Zipcode</label>
          <input type="text"
                formControlName="zipcode"
                class="form-control"
                >
        </div>
    </div>

  <button class="btn btn-primary">Sign Up</button>

  
 {{ registrationForm.value | json }}
  
 </form>

 <router-outlet></router-outlet>
```







#### app.component.ts
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
    confrimPassword: new FormControl(''),
    
    address: new FormGroup({ // <-- NEW
      city: new FormControl(''),
      state: new FormControl(''),
      zipcode: new FormControl('')
    })

  })
  
  constructor(
    
  ) {}
  
}
```













## Managing Control Values

### Set Values

#### app.component.html
```html
//...
  <button class="btn btn-default"
        (click)="loadApiData()">
    Load Data
  </button>
  
 {{ registrationForm.value | json }}
  //..
```





#### app.component.ts
```js
  loadApiData() {
    this.registrationForm.setValue({
      userName: 'New Amoos',
      password: '***',
      confrimPassword: '***',
      address: {
        city: 'New York City',
        state: 'New York',
        zipcode: '1001'
      }
    })
  }
```





### Patch Values
- If we want update only specific inputs

#### app.component.ts
```js
//...

    loadApiData() {
    this.registrationForm.patchValue({
      userName: 'New Amoos',
      password: '***',
      confrimPassword: '***',
      /*
       Load few values, without address fields
       */
      // address: {
      //   city: 'New York City',
      //   state: 'New York',
      //   zipcode: '1001'
      // }
    })
  }
//...
```