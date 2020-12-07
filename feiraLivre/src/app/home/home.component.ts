import { Component, OnInit } from '@angular/core';
import { faSeedling, faTractor, faUsers } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faSeedling = faSeedling
  faTractor = faTractor
  faUsers = faUsers

  constructor() { }

  ngOnInit(): void {
  }

}
