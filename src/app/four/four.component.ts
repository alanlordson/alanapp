import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

  name = "Spidey"
  num1 = 10;
  dis1:boolean = true;

  strClass = "active para-1";

  objClass = {
    'active' : true,
    'para-2' : true
  }

  arrClass = ['active', 'para-3']




  constructor() { }

  ngOnInit(): void {
  }

}
