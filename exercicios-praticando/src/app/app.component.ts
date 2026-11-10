import { Component } from '@angular/core';
import { FormsModule, NumberValueAccessor } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  exercicioAtual: number = 1;
  totalExercicios: number = 8;
 
  proximo(): void {
    if (this.exercicioAtual < this.totalExercicios) {
      this.exercicioAtual++;
    }
  }
 
  anterior(): void {
    if (this.exercicioAtual > 1) {
      this.exercicioAtual--;
    }
  }

  //Ex1 
  numValorPago: number | null = null;
  numValorPreco: number | null = null;
  resultadoEx1: number | null = null;

  calcularTroco(){
    const num1 = Number(this.numValorPago);
    const num2 = Number(this.numValorPreco);
    this.resultadoEx1 = num1 - num2;
  }

  //Ex2
  numValorQuilo: number | null = null;
  numValorQuantidade: number | null = null;
  resultadoEx2: number | null = null;

  calcularQuilo(){
    const num1 = Number(this.numValorQuilo);
    const num2 = Number(this.numValorQuantidade);
    this.resultadoEx2 = num1 * num2;
  }

  //Ex3

  numValorSaldo: number | null = null;
  resultadoEx3: number | null = null;

  calcularReajuste(){
    const num1 = Number(this.numValorSaldo);
    this.resultadoEx3 = (num1 * 1.01);
  }

  //Ex4

  numValor1: number | null = null; 
  numValor2: number | null = null; 
  numValor3: number | null = null;
  resultadoA: number | null = null;
  resultadoB: number | null = null;
  resultadoC: number | null = null;
  resultadoD: number | null = null;
  
  calcularMediaAritmetica(){
    const num1 = Number(this.numValor1);
    const num2 = Number(this.numValor2);
    const num3 = Number(this.numValor3);
    const mediaAritmetica = (num1 + num2 + num3) / 3;
    const mediaPonderada = ((num1 * 3) + (num2 * 2) + (num3 * 5)) / 10;
    const mediaMedias = (mediaAritmetica + mediaPonderada) / 2;
    const somaMedias = (mediaAritmetica + mediaPonderada + mediaMedias);
    this.resultadoA = Math.round(mediaAritmetica);
    this.resultadoB = Math.round(mediaPonderada);
    this.resultadoC = Math.round(mediaMedias);
    this.resultadoD = Math.round(somaMedias);

  }

  // Ex5

  numValor4: number | null = null;
  numValor5: number | null = null;
  numMaior: number | null = null;

  calcularNumMaior(){
    const num1 = Number(this.numValor4);
    const num2 = Number(this.numValor5);

    if(num1 > num2){
      this.numMaior = num1;
    } else{
      this.numMaior = num2;
    }
  }

  // Ex6

  num1Ex6: number | null = null;
  num2Ex6: number | null = null;
  num3Ex6: number | null = null;
  num4Ex6: number | null = null;

  numMenor: number | null = null;

  calcularNumMenor(){
    this.numMenor = Math.min(
       Number(this.num1Ex6),
       Number(this.num2Ex6),
       Number(this.num3Ex6),
       Number(this.num4Ex6)
    )    
  }

  // Ex7

  num1Ex7: number | null = null;
  resultadoEx7: string = '';

  calcularNumParImpar(){
    const num1 = Number(this.num1Ex7);

    if(num1 % 2 == 0){
      this.resultadoEx7 = `O número ${num1} é Par`;    
    } else {
      this.resultadoEx7 = `O número ${num1} é Ímpar`;  
    }
  }

  // Ex8

  codProduto: string = '';
  resultadoEx8: string = '';

  verificaCod(){

    if(this.codProduto === '001'){
      this.resultadoEx8 = 'Parafuso';
    } else if(this.codProduto === '002'){
      this.resultadoEx8 = 'Porca';
    } else if(this.codProduto === '003'){
      this.resultadoEx8 = 'Prego';
    } else{
      this.resultadoEx8 = 'Produtos Diversos';
    }
  }
}