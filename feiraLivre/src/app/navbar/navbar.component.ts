import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { User } from './../model/User';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

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

  cadastrar(){
    if (this.senha === this.user.senha) {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso')
      })

    } else {
      alert('Suas Senhas Não Conferem')
    }
   
  }

  conferirSenha(event:any){
    this.senha = event.target.value
  }

}
