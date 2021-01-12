import { Component, OnInit } from '@angular/core';
//import { userInfo } from 'os';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutoService } from '../service/produto.service';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  faMinus = faMinus
  faPlus = faPlus

  products = Produto;
  produto: Produto = new Produto()
  listaProdutos!: Produto[]
  nome : string

  item;

  quantidade= 1;

  constructor(
    private produtoService: ProdutoService,
    private carrinhoService : CarrinhoService,
    private alert: AlertasService
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

  addToCart(product) {
    this.carrinhoService.addToCart(product);
    this.alert.showAlertSuccess('Seu produto foi adicionado ao carrinho!');
  }

  plus(){
    this.quantidade += 1;
    return this.quantidade;
  }

  minus(){
    if(this.quantidade > 1){
      this.quantidade -= 1;
      return this.quantidade;
    }
    
  }
  

}
