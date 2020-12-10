import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'home'},
  {path:'home', component: HomeComponent},
  {path:'sobre-nos', component: SobreNosComponent},
  {path: 'contatos', component: ContatosComponent},
  {path:'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'catalogo', component: ProdutosComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }