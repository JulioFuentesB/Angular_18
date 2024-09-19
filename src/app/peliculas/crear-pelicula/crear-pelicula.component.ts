import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { peliculaCreacionDto } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";

@Component({
  selector: 'app-crear-pelicula',
  standalone: true,
  imports: [RouterLink, MatButtonModule, FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

  guardarCambios(pelicula: peliculaCreacionDto) {
    console.log('Creando pelicula', pelicula);
  }


}
