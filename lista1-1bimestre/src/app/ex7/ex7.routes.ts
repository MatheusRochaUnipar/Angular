import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { DetalheCursoComponent } from './detalhe-curso/detalhe-curso.component';
import { ProfessoresComponent } from './professores/professores.component';
import { DetalheProfessorComponent } from './detalhe-professor/detalhe-professor.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cursos',
    component: CursosComponent,
    children: [{ path: 'detalhe', component: DetalheCursoComponent }],
  },
  {
    path: 'professores',
    component: ProfessoresComponent,
    children: [{ path: 'detalhe', component: DetalheProfessorComponent }],
  },
];