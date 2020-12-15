import { AuthService } from './../service/auth.service';
import { User } from './../model/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  model: NgbDateStruct;

  user: User = new User()
  senha: string
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit(): void {
  }
  cadastrar(){



    if (this.user.nome == null || this.user.cpf == null || this.user.telefone == null ||
        this.user.dataNascimento == null || this.user.email == null || this.user.senha == null ) {
          this.alert.showAlertDanger('Preencha todos os campos!')
        }

    else if (this.senha === this.user.senha) {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        this.alert.showAlertSuccess('Usuário cadastrado com sucesso')
      })

    } else {
      this.alert.showAlertDanger('Suas senhas não conferem')
    }
   
  }

  conferirSenha(event:any){
    this.senha = event.target.value
  }

}
