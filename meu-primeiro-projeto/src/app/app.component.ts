import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  nome = 'turma';

  mudarNome(){
    this.nome = 'Matheus Rocha';
  }

  num1: number | null = null;
  num2: number | null = null;
  resultado: number | null = null;

  somar(){
    const n1 = Number(this.num1);
    const n2 = Number(this.num2);
    this.resultado = n1 + n2;
  }
  diminuir(){
    const n1 = Number(this.num1);
    const n2 = Number(this.num2);
    this.resultado = n1 - n2;
  }
  multiplicar(){
    const n1 = Number(this.num1);
    const n2 = Number(this.num2);
    this.resultado = n1 * n2;
  }
  dividir(){
    const n1 = Number(this.num1);
    const n2 = Number(this.num2);
    this.resultado = n1 / n2;
  }

}
