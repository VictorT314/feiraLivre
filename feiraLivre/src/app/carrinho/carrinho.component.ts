import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  total: number = 0
  
  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute
    
  ) { }

  ngOnInit() {

  }

  


}
