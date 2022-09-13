import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {

buttonClick(){
  alert("alan")
}

somethingTyped(){
  console.log("Typed something")
}

somethingBlur(){
  console.log("Blurred - out")
}

somethingFocus(){
  console.log("Focused")
}

somethingPress(e: any){
  console.log(e)
}

targetValue(e: any){
  console.log(e.target.value);
  
}

  constructor() { }

  ngOnInit(): void {
  }

}
