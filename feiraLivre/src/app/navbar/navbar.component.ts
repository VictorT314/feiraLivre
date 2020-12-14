import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  userLogin: UserLogin = new UserLogin()

  constructor(
    private router: Router,
    private authService: AuthService,
    public auth: AuthService
  ) { }

  ngOnInit() {
  } 

  sair() {
    localStorage.clear()
    //this.router.navigate(['/login'])
    alert('Você foi deslogado!')
  }

  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      localStorage.setItem('token', this.userLogin.token)
      this.router.navigate(['/home'])
    })

  }
}
