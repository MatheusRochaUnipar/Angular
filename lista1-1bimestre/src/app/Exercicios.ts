import { Routes } from '@angular/router';

import { routes as ex1 } from './ex1/ex1.routes';
import { routes as ex2 } from './ex2/ex2.routes';
import { routes as ex3 } from './ex3/ex3.routes';
import { routes as ex4 } from './ex4/ex4.routes';
import { routes as ex5 } from './ex5/ex5.routes';
import { routes as ex6 } from './ex6/ex6.routes';
import { routes as ex7 } from './ex7/ex7.routes';

export interface Exercicio {
  id: number;
  titulo: string;
  inicio: string;
  rotas: Routes;
}

export const EXERCICIOS: Exercicio[] = [
  { id: 1, titulo: 'Home / Sobre / Contato', inicio: '/', rotas: ex1 },
  { id: 2, titulo: 'Galeria', inicio: '/galeria', rotas: ex2 },
  { id: 3, titulo: 'Login', inicio: '/login', rotas: ex3 },
  { id: 4, titulo: 'Produtos', inicio: '/produtos', rotas: ex4 },
  { id: 5, titulo: 'Notícias', inicio: '/noticias', rotas: ex5 },
  { id: 6, titulo: 'Admin', inicio: '/dashboard', rotas: ex6 },
  { id: 7, titulo: 'Cursos', inicio: '/', rotas: ex7 },
];