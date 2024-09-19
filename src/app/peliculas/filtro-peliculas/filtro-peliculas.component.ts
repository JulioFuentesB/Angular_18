import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LisadoPeliculasComponent } from "../lisado-peliculas/lisado-peliculas.component";



import {Location} from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { FiltroPeliculas } from './filtroPeliculas';

@Component({
  selector: 'app-filtro-peliculas',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, LisadoPeliculasComponent],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent implements OnInit {

  ngOnInit(): void {
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value as FiltroPeliculas);
    this.form.valueChanges.subscribe(valores => {
      console.log(valores);
      this.peliculas = this.peliculasOriginal
      this.buscarPeliculas(valores as FiltroPeliculas)
      this.escribirParametrosBusquedaEnURL(valores as FiltroPeliculas);

    });
  }

  buscarPeliculas(valores: FiltroPeliculas) {

    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(peliculas => peliculas.titulo.indexOf(valores.titulo) !== -1);
    }

    if (valores.generoId !== 0) {

      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1)

    }

    if (valores.proximosEstrenos) {

      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosExtrenos)
    }

    if (valores.enCines) {

      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines)
    }

  }


  escribirParametrosBusquedaEnURL(valores: FiltroPeliculas) {
    let queryStrings = [];

    if (valores.titulo) {
      queryStrings.push(`titulo=${encodeURIComponent(valores.titulo)}`);
    }

    if (valores.generoId !== 0) {
      queryStrings.push(`generoId=${valores.generoId}`);
    }

    if (valores.proximosEstrenos) {
      queryStrings.push(`proximosExtrenos=${valores.proximosEstrenos}`);
    }

    if (valores.enCines) {
      queryStrings.push(`enCines=${valores.enCines}`);
    }

    this.location.replaceState('peliculas/filtrar', queryStrings.join('&'));

  }

  leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params: any) => {
      var objeto: any = {};

      if (params.titulo){
        objeto.titulo = params.titulo;
      }

      if (params.generoId){
        objeto.generoId = Number(params.generoId);
      }

      if (params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }

      if (params.enCines){
        objeto.enCines = params.enCines;
      }

      this.form.patchValue(objeto);

    });
  }

  limpiar() {
    this.form.patchValue({ titulo: '', generoId: 0, enCines: false, proximosExtrenos: false })
  }


  private formBuilder = inject(FormBuilder);
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);

  form = this.formBuilder.group(
    {
      titulo: '',
      generoId: 0,
      proximosExtrenos: false,
      enCines: false,
    }
  );

  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Accion' },
    { id: 3, nombre: 'Comedia' },
  ]

  peliculasOriginal = [{
    titulo: 'Inside Out 2',
    fechaLanzamiento: new Date(),
    precio: 1400.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
    generos: [1, 2, 3],
    enCines: true,
    proximosExtrenos: false


  },
  {
    titulo: 'Moana 2',
    fechaLanzamiento: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg',
    generos: [1],
    enCines: true,
    proximosExtrenos: false
  },
  {
    titulo: 'Bad Boys: Ride or Die',
    fechaLanzamiento: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
    generos: [2, 3],
    enCines: true,
    proximosExtrenos: false
  },
  {
    titulo: 'Deadpool & Wolverine',
    fechaLanzamiento: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg',
    generos: [3],
    enCines: true,
    proximosExtrenos: false
  },
  {
    titulo: 'Oppenheimer',
    fechaLanzamiento: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg',
    generos: [2, 3],
    enCines: true,
    proximosExtrenos: false
  },
  {
    titulo: 'The Flash',
    fechaLanzamiento: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg',
    generos: [1],
    enCines: false,
    proximosExtrenos: true
  }];

  peliculas = this.peliculasOriginal;

}
