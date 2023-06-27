import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passwordApp';

  buttonClick() {
    console.log("event binding'i öğreniyoruz.")
  }
}
