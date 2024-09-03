import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lisado-peliculas',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgFor, NgOptimizedImage, NgIf, ListadoGenericoComponent, MatButtonModule, MatIconModule],
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
