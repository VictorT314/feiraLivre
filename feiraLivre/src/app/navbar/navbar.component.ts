import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { User } from './../model/User';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';



declare var jQuery: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()
  model: NgbDateStruct;
  user: User = new User()
  senha: string

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
  }

  cadastrarCad() {


    if (this.user.nome == null || this.user.cpf == null || this.user.telefone == null ||
      this.user.dataNascimento == null || this.user.email == null || this.user.senha == null) {
      this.alert.showAlertDanger('Preencha todos os campos!')
    }

    else if (this.senha === this.user.senha) {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        jQuery('#modalCadastro').modal('hide');
        this.alert.showAlertSuccess('Usuário cadastrado com sucesso')
      })

    } else {
      this.alert.showAlertDanger('Suas senhas não conferem')
    }

  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

}
