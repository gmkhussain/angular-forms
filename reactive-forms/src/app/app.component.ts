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
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      zipcode: new FormControl('')
    })

  })
  
  constructor(
    
  ) {}



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
  
}
