import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  

  getAllProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>('http://localhost:8080/produto')
  }

  getProdutosById(id: number): Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:8080/produto/titulo/${id}`)
  }

  getProdutosByNome(nome: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`http://localhost:8080/produto/titulo/${nome}`)
  }

}
