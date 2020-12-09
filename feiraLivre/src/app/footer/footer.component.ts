import { Component, OnInit } from '@angular/core';
import {faMapMarkerAlt,faPhoneAlt , faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faEnvelope = faEnvelope
  faPhoneAlt = faPhoneAlt
  faMapMarkerAlt = faMapMarkerAlt


  constructor() { }

  ngOnInit(): void {
  }

}
