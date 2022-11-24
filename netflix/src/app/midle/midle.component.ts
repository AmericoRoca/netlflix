import { Component, OnInit } from '@angular/core';
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-midle',
  templateUrl: './midle.component.html',
  styleUrls: ['./midle.component.css']
})
export class MidleComponent implements OnInit {
  login: boolean = false;
  faCirclePlus=faCirclePlus;

  constructor() { }

  ngOnInit(): void {
  }

}
