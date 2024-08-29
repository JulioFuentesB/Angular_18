import { CurrencyPipe, DatePipe, NgFor, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { AppComponent } from './app/app.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgFor, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    setTimeout(() => {

      this.peliculas = this.DevolverPeliculas()
    }, 2000);


  }
  title = 'mi-aplicacion-angular';
  peliculas!: any[]


  dubplicarNumero(valor: number): number {
    return valor * 2;

  }

  DevolverPeliculas(): any {
    return [{
      titulo: 'Inside Out 2',
      fechaLanzamiento: new Date(),
      precio: 1400.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'
    },
    {
      titulo: 'Moana 2',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
    },
    {
      titulo: 'Bad Boys: Ride or Die',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
    },
    {
      titulo: 'Deadpool & Wolverine',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg'
    },
    {
      titulo: 'Oppenheimer',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg'
    },
    {
      titulo: 'The Flash',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg'
    }];
  }

}
