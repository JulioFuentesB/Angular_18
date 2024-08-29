import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LisadoPeliculasComponent } from './peliculas/lisado-peliculas/lisado-peliculas.component';
//import { AppComponent } from './app/app.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LisadoPeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

  title = 'mi-aplicacion-angular';



  // dubplicarNumero(valor: number): number {
  //   return valor * 2;

  // }



//prueba
}
