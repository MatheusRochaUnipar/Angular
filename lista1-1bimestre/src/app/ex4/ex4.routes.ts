import { Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produto', component: DetalheProdutoComponent },
];