import { Component, Input, numberAttribute, OnInit } from '@angular/core';
import { peliculaCreacionDto, peliculaDto } from '../peliculas';
import { idText } from 'typescript';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";

@Component({
  selector: 'app-editar-peliculas',
  standalone: true,
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-peliculas.component.html',
  styleUrl: './editar-peliculas.component.css'
})
export class EditarPeliculasComponent implements OnInit {
  ngOnInit(): void {


  }


  @Input({ transform: numberAttribute })
  id!: number;

  pelicula: peliculaDto = { id: 1, titulo: 'Spider-man', trailer: 'Abc', fechaLanzamiento: new Date('2024-07-25'), poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832' }

  guardarCambios(pelicula: peliculaCreacionDto) {
    console.log('Editando pelicula', pelicula)
  }

}
