import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passwordApp';
  password:string = 'Guney';

  buttonClick() {
    console.log("event binding'i öğreniyoruz.")
    this.password = "Guney Kilicel";
  }

  getPassword() {
    return this.password;
  }
}
