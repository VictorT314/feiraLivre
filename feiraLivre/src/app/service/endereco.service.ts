import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs'
import { Endereco } from '../model/Endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private httpClient : HttpClient) { }

  buscar(cep:String){
    return this.httpClient.get(`http://viacep.com.br/ws/${cep}/json/`)
    .toPromise()
    .then(response => {
      return this.converterRespostaCep(response)
    })
  }

  converterRespostaCep(enderecoResposta):Endereco{
    let endereco = new Endereco();

    endereco.cep = enderecoResposta.cep;
    endereco.logradouro = enderecoResposta.logradouro;
    endereco.bairro = enderecoResposta.bairro;
    endereco.localidade = enderecoResposta.localidade;
    endereco.uf = enderecoResposta.uf;

    return endereco;
  }

}
