import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent implements OnInit {

name = "Alan Lordson";
activeBox: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
