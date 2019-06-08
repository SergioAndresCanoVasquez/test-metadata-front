import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorPrincipalComponent } from './componentes/contenedor-principal/contenedor-principal.component';
import { GamificacionComponent } from './componentes/gamificacion/gamificacion.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { ContenedorSecundarioComponent } from './componentes/contenedor-secundario/contenedor-secundario.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PaginaComponent } from './componentes/pagina/pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorPrincipalComponent,
    GamificacionComponent,
    NavegadorComponent,
    ContenedorSecundarioComponent,
    EncabezadoComponent,
    PaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
