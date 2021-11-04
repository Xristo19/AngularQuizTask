import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ibsu-test-project';

  num1 = 2;
  num2 = 3;

  str1 = 'hello';
  str2 = 'ibsu';

  cond = true;

  arr = ['sd', 'dfdfdf', 'dfdsd', 'dfdsd', 'sdsd', 'dfdf'];

  toggleUsers() {
    this.cond = !this.cond;
  }

  myNumber = 4;

  name: string = '';

  setValue() {
    this.name = 'Nancy';
  }

  sendToServer() {
    console.log("&&&", this.name)
  }

}
