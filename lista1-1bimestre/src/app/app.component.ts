import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { EXERCICIOS, Exercicio } from './Exercicios';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private router = inject(Router);

  exercicios = EXERCICIOS;
  ativo = signal(this.lerSalvo());

  constructor() {
    this.router.resetConfig(this.buscar(this.ativo()).rotas);
  }

  abrir(ex: Exercicio) {
    this.ativo.set(ex.id);
    sessionStorage.setItem('exercicio', String(ex.id));
    this.router.resetConfig(ex.rotas);
    this.router.navigateByUrl(ex.inicio, { onSameUrlNavigation: 'reload' });
  }

  private buscar(id: number): Exercicio {
    return this.exercicios.find(e => e.id === id) ?? this.exercicios[0];
  }

  private lerSalvo(): number {
    return Number(sessionStorage.getItem('exercicio')) || 1;
  }
}