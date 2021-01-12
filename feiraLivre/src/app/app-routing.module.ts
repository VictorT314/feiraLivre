import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PoliticasComponent } from './politicas/politicas.component'

const routes: Routes = [
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }