import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length : number = 0;
  
  includeLetters:boolean = false;
  includeNumbers:boolean = false;
  includeSymbols:boolean = false;

  modifyLength(value: string) {
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  modifyLetters() {
    this.includeLetters = !this.includeLetters;
  }
  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  modifySymbols() {
    this.includeSymbols = !this.includeSymbols; 
  }

  buttonClick() {
    console.log(`Değerlerim:
    Letters: ${this.includeLetters}
    Numbers: ${this.includeNumbers}
    Symbols: ${this.includeSymbols}
    `);
  }
}
