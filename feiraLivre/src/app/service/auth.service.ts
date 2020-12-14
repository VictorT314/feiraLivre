import { UserLogin } from './../model/UserLogin';
import { User } from './../model/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  logar(userLogin : UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuario/logar', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/usuario/cadastrar', user)
  }

  btnSair() {
    let ok = false 
    let token = localStorage.getItem('token')

    if (token != null){
      ok = true
    }

    return ok
  }

  btnLogin() {
    let ok = false 
    let token = localStorage.getItem('token')

    if (token == null){
      ok = true
    }

    return ok

  }

  RemoveNavEFooter(){
    let ok = false
    let token = localStorage.getItem('token')
    
    if (token == null) {
      ok = true
    }

    return ok
  }
}
