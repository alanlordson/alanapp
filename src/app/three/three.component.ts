import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

//Variable
  num1 = 10;
  num2 = 20;

//Typescript
  val1:number = 5;
  val2:number = 2;


  constructor() { }

  ngOnInit(): void {
    let number = 15;
    console.log(number);
    console.log(this.num1);
  }


alanFunction() {
  return "Alan man"  
}


}
