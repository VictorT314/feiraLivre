import { Component, OnInit } from '@angular/core';
//import { userInfo } from 'os';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos!: Produto[]
  nome : string

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllProdutos()
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  findByNome(){
    if (this.nome === ''){
      this.findAllProdutos()
    } else {
      this.produtoService.getProdutosByNome(this.nome).subscribe((resp: Produto[]) => {
        this.listaProdutos = resp
      })
    }
  }

  

}
