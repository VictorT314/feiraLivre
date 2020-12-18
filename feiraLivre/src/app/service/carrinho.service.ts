import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { STORAGE_KEYS } from '../config/storage_keys.config';
import { Item } from '../model/Item';
import { Pedido } from '../model/Pedido';
import { Produto } from '../model/Produto';


@Injectable({
  providedIn: 'root'
})

export class CarrinhoService {

  

  constructor() { }

  ngOnInit(): void {}
  
}
