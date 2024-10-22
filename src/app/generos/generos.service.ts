import { inject, Injectable } from '@angular/core';
import { noConflict } from 'leaflet';
import { GeneroDto } from './generos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private http = inject(HttpClient);

  private urlBase = environment.apiUrl + '/generos'


  constructor() { }

  public ObtenerTodos(): Observable<GeneroDto[]> {

    return this.http.get<GeneroDto[]>( this.urlBase + "?Pagina=1&RecordsPorPagina=10");

  }

}