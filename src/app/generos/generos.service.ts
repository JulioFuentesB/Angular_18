import { inject, Injectable } from '@angular/core';
import { noConflict } from 'leaflet';
import { GeneroDto } from './generos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private http = inject(HttpClient)

  constructor() { }

  public ObtenerTodos(): Observable<GeneroDto[]> {

    return this.http.get<GeneroDto[]>("https://localhost:7256/api/generos?Pagina=1&RecordsPorPagina=10");

  }

}