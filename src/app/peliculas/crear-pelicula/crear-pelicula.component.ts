import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { peliculaCreacionDto } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDto } from '../../compartidos/compnentes/SelectorMultipleModelo';

@Component({
  selector: 'app-crear-pelicula',
  standalone: true,
  imports: [RouterLink, MatButtonModule, FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {


  generosSeleccionados: SelectorMultipleDto[] = [];
  generosNoSeleccionados: SelectorMultipleDto[] = [
    { llave: 1, valor: 'Drama' },
    { llave: 2, valor: 'Accion' },
    { llave: 3, valor: 'Comedia' },

  ];

  cinesSeleccionados: SelectorMultipleDto[] = [];
  cinesNoSeleccionados: SelectorMultipleDto[] = [
    { llave: 1, valor: 'Agora mall' },
    { llave: 2, valor: 'Blue mall' },
    { llave: 3, valor: 'Acropolis' },

  ];

  guardarCambios(pelicula: peliculaCreacionDto) {
    console.log('Creando pelicula', pelicula);
  }


}
