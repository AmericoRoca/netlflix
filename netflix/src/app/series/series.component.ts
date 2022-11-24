import { Component, OnInit } from '@angular/core';
import { faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  faLeft= faArrowCircleLeft;
  faRigth= faArrowCircleRight;

  constructor() { }

  ngOnInit(): void {
  }

}
