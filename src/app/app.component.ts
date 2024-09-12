import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LisadoPeliculasComponent } from './peliculas/lisado-peliculas/lisado-peliculas.component';
import { MenuComponent } from "./compartidos/componentes/menu/menu.component";
import { RatingComponent } from "./compartidos/componentes/rating/rating.component";
import { addModuleImportToRootModule } from '@angular/cdk/schematics';
//import { AppComponent } from './app/app.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LisadoPeliculasComponent, MenuComponent, RatingComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
 




  title = 'mi-aplicacion-angular';


  // procesarVoto(voto:number)
  // {
  //   alert(`Calificaion otorgada: ${voto}`)
  // }

  // ClickBoton()
  // {
  //   alert('me has clickeado');
  // }
  
}
