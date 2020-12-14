import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { NgxMaskModule } from 'ngx-mask';
import { ProdutosComponent } from './produtos/produtos.component';
import { FiltroComponent } from './filtro/filtro.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SobreNosComponent,
    ContatosComponent,
    PoliticasComponent,
    CadastroComponent,
    LoginComponent,
    ProdutosComponent,
    FiltroComponent,
    CarrinhoComponent


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
