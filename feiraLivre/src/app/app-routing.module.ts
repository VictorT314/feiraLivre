import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'home'},
  {path:'home', component: HomeComponent},
  {path:'sobre-nos', component: SobreNosComponent},
  {path: 'contatos', component: ContatosComponent},
  {path: 'catalogo', component: ProdutosComponent},
  {path: 'carrinho', component: CarrinhoComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }