import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  valorPago = 0;
  precoProduto = 0;

  calcularTroco(): number {
    const troco = this.valorPago - this.precoProduto;
    return troco > 0 ? troco : 0;
  }

  //Calcular preco por quilo
  precoQuilo = 0;
  quantidadeQuilos = 0;

  calcularValorFinal():number{
    return this.precoQuilo * this.quantidadeQuilos;
  }
}
