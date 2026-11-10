import { Routes } from '@angular/router';
import { ContatoComponent } from './paginas/contato/contato.component'; 
import { HomeComponent } from './paginas/home/home.component';
import { NaoEncontradoComponent} from './paginas/nao-encontrado/nao-encontrado.component';
import { SobreComponent } from './paginas/sobre/sobre.component';

//Lista de rotas, cada URL aponta para um componente
export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'contato', component: ContatoComponent},
    {path: '**', component: NaoEncontradoComponent},
];

