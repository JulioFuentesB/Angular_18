import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearCineComponent } from './cines/crear-cine/crear-cine.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarGenerosComponent } from './generos/editar-generos/editar-generos.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EditarCinesComponent } from './cines/editar-cines/editar-cines.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    {path:'generos', component:IndiceGenerosComponent},
    {path:'generos/crear', component:CrearGenerosComponent},
    {path:'generos/editar/:id', component:EditarGenerosComponent},
    {path:'actores',component:IndiceActoresComponent},
    {path:'actores/crear', component:CrearActorComponent},
    {path:'actores/editar/:id', component:EditarActorComponent},
    {path:'cines', component:IndiceCinesComponent},
    {path:'cines/crear',component:CrearCineComponent},
    {path:'cines/editar/:id',component:EditarCinesComponent},
    {path:'peliculas/crear', component:CrearPeliculaComponent},
    {path:'**', redirectTo:''}//atrapalo todo  un componente no enconrado

];
