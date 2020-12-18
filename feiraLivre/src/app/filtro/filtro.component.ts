import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos!: Produto[]
  nome : string

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
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
