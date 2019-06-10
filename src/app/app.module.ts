import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorPrincipalComponent } from './componentes/contenedor-principal/contenedor-principal.component';
import { GamificacionComponent } from './componentes/gamificacion/gamificacion.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';
import { ContenedorSecundarioComponent } from './componentes/contenedor-secundario/contenedor-secundario.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PaginaComponent } from './componentes/pagina/pagina.component';
import { ConstructorWidgetComponent } from './componentes/constructor-widget/constructor-widget.component';
import { WidgetDatoComponent } from './componentes/widgets/widget-dato/widget-dato.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { WidgetMetaComponent } from './componentes/widgets/widget-meta/widget-meta.component';
import { WidgetPodioComponent } from './componentes/widgets/widget-podio/widget-podio.component';
import { WidgetBarraComponent } from './componentes/widgets/widget-barra/widget-barra.component';
import { WidgetProductoComponent } from './componentes/widgets/widget-producto/widget-producto.component';
import { BloqueComponent } from './componentes/bloque/bloque.component';
import { WidgetDonaComponent } from './componentes/widgets/widget-dona/widget-dona.component';
import { WidgetDonaLineaComponent } from './componentes/widgets/widget-dona-linea/widget-dona-linea.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorPrincipalComponent,
    GamificacionComponent,
    NavegadorComponent,
    ContenedorSecundarioComponent,
    EncabezadoComponent,
    PaginaComponent,
    ConstructorWidgetComponent,
    WidgetDatoComponent,
    ModalComponent,
    WidgetMetaComponent,
    WidgetPodioComponent,
    WidgetBarraComponent,
    WidgetProductoComponent,
    BloqueComponent,
    WidgetDonaComponent,
    WidgetDonaLineaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
