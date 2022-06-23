import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RedirecionamentoComponent } from './componentes/redirecionamento/redirecionamento.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'redirecionamento', component: RedirecionamentoComponent}
];

export const routing : ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }