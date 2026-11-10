import { Routes } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component';
import { DetalheNoticiaComponent } from './detalhe-noticia/detalhe-noticia.component';

export const routes: Routes = [
  { path: '', redirectTo: 'noticias', pathMatch: 'full' },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'detalhe-noticia', component: DetalheNoticiaComponent },
];