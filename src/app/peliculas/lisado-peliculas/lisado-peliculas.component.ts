import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisado-peliculas',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgFor, NgOptimizedImage, NgIf],
  templateUrl: './lisado-peliculas.component.html',
  styleUrl: './lisado-peliculas.component.css'
})
export class LisadoPeliculasComponent {


  @Input({ required: true })
  peliculas!: any[]


  agregarPelicula() {
    this.peliculas.push({
      titulo: 'Inception',
      fechaLanzamiento: new Date(),
      precio: 1400.99,

    })
  }


  remover(pelicula: any) {

    const indice = this.peliculas.findIndex(
      (peliculasActual: any) => peliculasActual.titulo === pelicula.titulo
    );

    this.peliculas.splice(indice,1);

  }

}
