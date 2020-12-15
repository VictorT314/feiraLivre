import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';



declare var jQuery:any;

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
    public auth: AuthService,
    private alert: AlertasService
  ) { }

  ngOnInit() {
  } 

  sair() {
    localStorage.clear()
    //this.router.navigate(['/login'])
    this.alert.showAlertInfo('Você foi deslogado!')
  }

  entrar() {
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      localStorage.setItem('token', this.userLogin.token)
      jQuery('#modalLogin').modal('hide');
      this.alert.showAlertSuccess('Você foi logado!')
      this.router.navigate(['/home'])
    })
  }

  cadastrar() {
    jQuery('#modalLogin').modal('hide');
    this.router.navigate(['/cadastro'])
  }
}
