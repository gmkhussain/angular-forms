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