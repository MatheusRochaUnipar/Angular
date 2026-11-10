import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  novoNome: String = '';

  listaNomes: String[] = [];

  adicionarNome(){
  
    if(this.novoNome.trim()){

      this.listaNomes.push(this.novoNome);
      
      this.novoNome = '';
    }

  }
  
  removerNome(index: number){
    this.listaNomes.splice(index, 1);
  
  }

}
