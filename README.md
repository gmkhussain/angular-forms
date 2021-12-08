# AngularForms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.












## Tracking state and validity

| State    |            |      |
|----------|------------|------|
| is valid |  valid | invalid |
| has change |  dirty | pristine |
| has been visited |  touched | untouched |


```js
<input type="text" #name class="form-control" [(ngModel)]="userModel.name"
        name="username"
    />
    {{ name.className }} //<-- touched
```

```js
<input type="text" #name="ngModel" class="form-control" [(ngModel)]="userModel.name"
        name="username"
    />
    {{ name.touched }} //<-- false
```








## Validation with Visual Feedback

#### True / False
```js
[ngClass]="userModel.agree ? 'is-invalid' : 'is-valid'"
```

```js
<input  type="text"
        #name="ngModel" //<-- NEW
        [class.is-invalid]="name.invalid && name.touched" //<-- NEW
        class="form-control"
        [(ngModel)]="userModel.name"
        name="name"
        required        
        />
```













## Displaying Error Messages

```html
  <div class="form-group">
    <label>Phone</label>
    <input  #phone="ngModel"
            [class.is-invalid]="phone.invalid"
            type="tel"
            name="phone"  
            pattern="^\d{10}$"
            class="form-control" [(ngModel)]="userModel.phone"
            required />

    <div *ngIf="phone.errors && ( phone.invalid || phone.touched ) ">
      <small *ngIf="phone.errors?.['required']" >Phone number required</small>
      <small *ngIf="phone.errors?.['pattern']" >Min 10 digits required</small>
    </div>
  </div>
```









## Select control validation

#### app.component.html
```html
  <div class="form-group">
    <label>Topic</label>
    <select #topic="ngModel"
            (change)="validTopic(topic.value)"
            [class.is-invalid]="topicHasError || topic.touched"
            class="form-control" [(ngModel)]="userModel.topic"
            name="topic"
            required
            >
      <option value="default">Select Topic</option>
      <option value="angular">Angular</option>
      <option value="react">React</option>
    </select>
    <small class="text-danger" [class.d-none]="!topicHasError">Select Topic</small>
  </div>
```


#### app.component.ts
```js
import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-froms';
  topics = ['Angular', 'React', 'Vue'];
  
  userModel = new User('Amoos', 'inf@now.me', '48787', '', 'morning' , true ) // <-- 


  
  topicHasError: boolean = true; //<-- NEW
 
  validTopic( _value: any ) {
    console.log( "_value", _value )
    if( _value === 'default' ) {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

}
```









## Form validation
- Button keep disabled until all inputs valid

```js
 <button
        [disabled]="userForm.invalid || topicHasError"
        type="submit">Send</button>
```












## Submitting form data

#### app.component.html

- Add ```(submit)="onsubmit()"``` on form tag

```html
<form #userForm="ngForm" (submit)="onsubmit()">
  <h4>form</h4>
//...
```









- Create Enrollment service
- ```ng g s enrollment```


#### enrollment.services.ts
```js
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { User } from './user'

@Injectable({
  providedIn: 'root'
})

export class EnrollmentService {

  constructor(
    private _http: HttpClient
  ) { }

  _url = ''

  enroll( user: User ) {
    return this._http.post<any>(this._url, user)    
  }

}
```










#### app.components.ts
```js
import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service'; // <-- NEW

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-froms';
  topics = ['Angular', 'React', 'Vue'];
  
  userModel = new User('Amoos', 'inf@now.me', '0123456789', '', 'morning' , true ) // <-- 

  topicHasError: boolean = true;

  constructor(
    private _enrollmentService: EnrollmentService // <-- NEW
  ) {}
  
  validTopic( _value: any ) {
    console.log( "_value", _value )
    if( _value === 'default' ) {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  

  onsubmit() { // <-- NEW
    this._enrollmentService.enroll( this.userModel ).subscribe(
      res => console.log("Res", res ),
      err => console.log("Err", err )
    )
  }

}
```







#### app.module.ts
```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http' // <-- NEW
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // <-- NEW
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```