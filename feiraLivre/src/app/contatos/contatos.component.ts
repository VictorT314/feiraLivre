import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt
  faPhoneAlt = faPhoneAlt
  faEnvelope = faEnvelope

  constructor() { }

  ngOnInit(): void {
  }

}
