import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../service/carrinho.service';
import { FormBuilder } from '@angular/forms';
import { PedidoService } from '../service/pedido.service';
import { Pedido } from '../model/Pedido';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { Item } from '../model/Item';
import { EnderecoService } from '../service/endereco.service';
import { Endereco } from '../model/Endereco';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  items;
  item: Item = new Item();
  itens : Item[]

  total: number = 0;
  checkoutForm;
  pedido: Pedido = new Pedido();
  data = new Date();

  endereco = new Endereco();
  isLoading = false;

  user: User = new User();
  idUser: number = Number(localStorage.getItem('id'))


  constructor(
    private pedidoService: PedidoService,
    private carrinhoService: CarrinhoService,
    private enderecoService: EnderecoService,
    private alert: AlertasService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      numeroCartao: '',
      nomeCartao: '',
      vencimentoCartao: '',
      ccv: '',
      parcelas: '',
      total: ''
    });
    
  }

  ngOnInit() {
    this.items = this.carrinhoService.getItems();
  }

  limparCarrinho(){
    this.items = this.carrinhoService.clearCart();
  }

  totalCarrinho() {
    return this.items.map(item => item.preco*item.quantidade).reduce((a, b) => a + b, 0);
  }

  onSubmit(customerData) {
    // Processamento dos dados de usuário
    this.items = this.carrinhoService.clearCart();
    this.checkoutForm.reset();

    console.warn('Pedido realizado com sucesso!', customerData);
    this.alert.showAlertSuccess("Pedido realizado com sucesso!")
  }

  postPedido() {
    //Populando pedido do usuário
    this.user.id = this.idUser
    this.pedido.usuario = this.user

    this.pedido.valor = this.totalCarrinho()

    this.pedido.data = this.data

    this.pedido.quantidadeItens = this.items.length

    this.pedido.itens = this.itens

    this.pedidoService.postPedido(this.pedido).subscribe((resp: Pedido) => {
      this.pedido = resp

    })

  }

  buscar(){
    this.isLoading = true;
    this.enderecoService.buscar(this.endereco.cep)
      .then((endereco : Endereco) => {
        this.isLoading = false;
        this.endereco = endereco})
      .catch(() => {
        this.isLoading = false;
        let cep = this.endereco.cep;
        this.endereco = new Endereco();
        this.endereco.cep = cep;
        this.alert.showAlertDanger("Não foi possível continuar a busca.")
      })
  }

}
