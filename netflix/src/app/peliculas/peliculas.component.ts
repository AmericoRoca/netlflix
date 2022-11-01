import { Component, OnInit } from '@angular/core';
import { faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  faLeft= faArrowCircleLeft;
  faRigth= faArrowCircleRight;
  constructor() { }

  ngOnInit(): void {
  }

}
