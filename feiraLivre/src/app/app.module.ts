import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { NgxMaskModule } from 'ngx-mask';
import { ProdutosComponent } from './produtos/produtos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertasComponent } from './alertas/alertas.component';
import { RouterModule } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EnderecoService } from './service/endereco.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SobreNosComponent,
    ContatosComponent,
    PoliticasComponent,
    ProdutosComponent,
    AlertasComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'sobre-nos', component: SobreNosComponent },
      { path: 'contatos', component: ContatosComponent },
      { path: 'catalogo', component: ProdutosComponent },
      { path: 'catalogo/:produtoId', component: ProdutosComponent },
      { path: 'politicas', component: PoliticasComponent },
      { path: 'carrinho', component: CarrinhoComponent },
    ]),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    NgbModule,
    ModalModule.forRoot(),
    ReactiveFormsModule

  ],
  providers: [EnderecoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
