import { Component } from '@angular/core';
import { FormsModule, NumberValueAccessor } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  estrelas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  notaSelecionada: number = 0;

  selecionarNota(nota: number) {
    this.notaSelecionada = nota;
  }
}
