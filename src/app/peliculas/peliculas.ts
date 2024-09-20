export interface peliculaDto
{
  id:number;
  titulo: string;
  fechaLanzamiento:Date;
  trailer:string;
  poster?:string;
}


export interface peliculaCreacionDto
{
  titulo: string;
  fechaLanzamiento:Date;
  trailer:string;
  poster?:File;
  generosIds?: number[];
  cinesIds?: number[];
}