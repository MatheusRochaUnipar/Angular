import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { VendasComponent } from './vendas/vendas.component';
import { EstoqueComponent } from './estoque/estoque.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'usuarios',
        component: UsuariosComponent,
        children: [{ path: 'detalhe', component: DetalheUsuarioComponent }],
      },
      {
        path: 'relatorios',
        component: RelatoriosComponent,
        children: [
          { path: 'vendas', component: VendasComponent },
          { path: 'estoque', component: EstoqueComponent },
        ],
      },
    ],
  },
];