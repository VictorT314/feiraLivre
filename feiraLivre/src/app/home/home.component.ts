import { Component, OnInit } from '@angular/core';
import { faSeedling, faTractor, faUsers,faMapMarkerAlt,faPhoneAlt , faEnvelope} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faEnvelope = faEnvelope
  faPhoneAlt = faPhoneAlt
  faMapMarkerAlt = faMapMarkerAlt
  faSeedling = faSeedling
  faTractor = faTractor
  faUsers = faUsers

  constructor() { }

  ngOnInit(): void {
  }

}
