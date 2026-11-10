import { Routes } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { DetalheImagemComponent } from './detalhe-imagem/detalhe-imagem.component';

export const routes: Routes = [
  { path: '', redirectTo: 'galeria', pathMatch: 'full' },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'detalhe', component: DetalheImagemComponent },
];