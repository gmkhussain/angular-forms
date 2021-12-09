import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

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
  submitted: boolean = false;
  errorMsg: any = '';

  constructor(
    private _enrollmentService: EnrollmentService
  ) {}
  
  validTopic( _value: any ) {
    console.log( "_value", _value )
    if( _value === 'default' ) {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  

  onsubmit() {
    this._enrollmentService.enroll( this.userModel ).subscribe(
      res => {
        console.log("Res", res )
        this.submitted = true;
      },
      err => this.errorMsg = err.statusText
    )
  }

}
