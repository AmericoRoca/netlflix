import { Component, OnInit } from '@angular/core';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  faCirclePlus=faCirclePlus;
  faPlay=faPlay;
  title: string = "House of Dragon";
  description: string = "House of the Dragon is an American fantasy drama television series. An independent prequel to Game of Thrones (2011–2019), it is the second show in the franchise, created by George R. R. Martin and Ryan Condal for HBO"
  constructor() { }

  ngOnInit(): void {
  }

}
