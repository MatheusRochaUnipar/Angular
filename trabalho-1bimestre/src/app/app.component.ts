import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Filme {
  titulo: string;
  imagem: string;
  generos: string;
  nota: number;
  assistido: boolean;
}

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  estrelas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  indiceAtual = 0;
  busca = '';

  filmes: Filme[] = [
    { titulo: 'O Hobbit: Uma Jornada Inesperada (2012)', imagem: 'Uma_jornada_inesperada.jpg', generos: 'Fantasia, aventura, ação', nota: 0, assistido: false },
    { titulo: 'O Hobbit: A Desolação de Smaug (2013)', imagem: 'A_desolacao_de_smaug.jpg', generos: 'Fantasia, aventura, ação', nota: 0, assistido: false },
    { titulo: 'O Hobbit: A Batalha dos Cinco Exércitos (2014)', imagem: 'A_batalha_dos_cinco_exercitos.jpg', generos: 'Fantasia, aventura, ação, guerra', nota: 0, assistido: false },
    { titulo: 'O Senhor dos Anéis: A Sociedade do Anel (2001)', imagem: 'A_sociedade_do_anel.jpg', generos: 'Fantasia, aventura, drama, ação', nota: 0, assistido: false },
    { titulo: 'O Senhor dos Anéis: As Duas Torres (2002)', imagem: 'As_duas_torres.jpg', generos: 'Fantasia, aventura, ação, drama, guerra', nota: 0, assistido: false },
    { titulo: 'O Senhor dos Anéis: O Retorno do Rei (2003)', imagem: 'O_retorno_do_rei.jpg', generos: 'Fantasia, aventura, ação, drama, guerra', nota: 0, assistido: false },
    { titulo: 'Scott Pilgrim Contra o Mundo (2010)', imagem: 'Scott_Pilgrim_contra_o_mundo.jpg', generos: 'Ação, comédia, romance, fantasia', nota: 0, assistido: false },
    { titulo: 'Pulp Fiction: Tempo de Violência (1994)', imagem: 'Pulp_fiction_tempo_de_violencia.jpg', generos: 'Crime, drama, suspense', nota: 0, assistido: false },
    { titulo: 'Kick-Ass: Quebrando Tudo (2010)', imagem: 'Kick_ass_quebrando_tudo.jpg', generos: 'Ação, comédia, crime', nota: 0, assistido: false },
    { titulo: 'Kick-Ass 2 (2013)', imagem: 'Kick_ass_2.jpg', generos: 'Ação, comédia, crime', nota: 0, assistido: false },
    { titulo: 'Clube da Luta (1999)', imagem: 'Clube_da_luta.jpg', generos: 'Drama, suspense', nota: 0, assistido: false },
    { titulo: 'Jumanji: Próxima Fase (2019)', imagem: 'Jumanji_proxima_fase.jpg', generos: 'Aventura, fantasia, comédia', nota: 0, assistido: false },
  ];

  get buscando(): boolean {
    return this.busca.trim().length > 0;
  }

  get sugestoes(): Filme[] {
    if (!this.buscando) return [];
    const termo = this.semAcento(this.busca.trim());
    return this.filmes
      .filter(filme => this.semAcento(filme.titulo).includes(termo))
      .slice(0, 5);
  }

  get filmeAnterior(): Filme {
    return this.filmes[(this.indiceAtual - 1 + this.filmes.length) % this.filmes.length];
  }

  get filmeProximo(): Filme {
    return this.filmes[(this.indiceAtual + 1) % this.filmes.length];
  }

  semAcento(texto: string): string {
    return texto
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  irParaFilme(filme: Filme) {
    this.indiceAtual = this.filmes.indexOf(filme);
    this.busca = '';
  }

  proximo() {
    this.indiceAtual = (this.indiceAtual + 1) % this.filmes.length;
  }

  anterior() {
    this.indiceAtual = (this.indiceAtual - 1 + this.filmes.length) % this.filmes.length;
  }

  selecionarNota(filme: Filme, nota: number) {
    filme.nota = filme.nota === nota ? 0 : nota;
  }

  alternarFilmeAssistido(filme: Filme) {
    filme.assistido = !filme.assistido;
  }
}