import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import{RedirecionamentoComponent} from './componentes/redirecionamento/redirecionamento.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RedirecionamentoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
