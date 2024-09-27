import { Component, Input, numberAttribute, OnInit } from '@angular/core';
import { peliculaCreacionDto, peliculaDto } from '../peliculas';
import { idText } from 'typescript';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDto } from '../../compartidos/compnentes/SelectorMultipleModelo';
import { actorAutoCompleteDto } from '../../actores/actores';

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

  generosSeleccionados: SelectorMultipleDto[] = [
    { llave: 1, valor: 'Drama' }
  ];
  generosNoSeleccionados: SelectorMultipleDto[] = [
    { llave: 2, valor: 'Accion' },
    { llave: 3, valor: 'Comedia' },
  ];


  cinesSeleccionados: SelectorMultipleDto[] = [
    { llave: 1, valor: 'Agora mall' },
  ];
  cinesNoSeleccionados: SelectorMultipleDto[] = [

    { llave: 2, valor: 'Blue mall' },
    { llave: 3, valor: 'Acropolis' },
  ];

  pelicula: peliculaDto = { id: 1, titulo: 'Spider-man', trailer: 'Abc', fechaLanzamiento: new Date('2024-07-25'), poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832' }

  actoresSeleccionados: actorAutoCompleteDto[] = [
    { id: 2, nombre: 'Tom Hanks', personaje: 'Forrest Gump', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tom_Hanks_TIFF_2019.jpg/220px-Tom_Hanks_TIFF_2019.jpg' },
  ]

  guardarCambios(pelicula: peliculaCreacionDto) {
    console.log('Editando pelicula', pelicula)
  }

}
