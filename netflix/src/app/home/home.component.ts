import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = "House of Dragon";
  description: string = "lorem ipsum"
  constructor() { }

  ngOnInit(): void {
  }

}
