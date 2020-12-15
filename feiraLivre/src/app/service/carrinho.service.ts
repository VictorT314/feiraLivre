import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from '../config/storage_keys.config';
import { Item } from '../model/Item';


@Injectable({
  providedIn: 'root'
})

export class CarrinhoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }
/*
  getCarrinho() : Item {
    let str = localStorage.getItem(STORAGE_KEYS.carrinho)
    if (str != null){
      return JSON.parse(str);
    }
    else{
      return null;
    }
  }

  setCarrinho(obj : Item) {
    if (obj != null) {
      localStorage.setItem(STORAGE_KEYS.carrinho, JSON.stringify(obj));
    }
    else {
      localStorage.removeItem(STORAGE_KEYS.carrinho)
    }
  }

*/  
}
