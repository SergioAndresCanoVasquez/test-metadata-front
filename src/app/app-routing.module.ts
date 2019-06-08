import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenedorPrincipalComponent } from './componentes/contenedor-principal/contenedor-principal.component';

const routes: Routes = [
  {path: '', component: ContenedorPrincipalComponent},
  {path: 'main', component: ContenedorPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
