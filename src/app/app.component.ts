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
}
