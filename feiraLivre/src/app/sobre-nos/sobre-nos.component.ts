import { Component, OnInit } from '@angular/core';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithubSquare = faGithubSquare;
  faLinkedinIn = faLinkedinIn;
  faGithubAlt = faGithubAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
