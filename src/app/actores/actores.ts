export interface ActorDto {
    id: number;
    nombre: string;
    fechaNacimiento: Date;
    foto?: string;
}
export interface ActorCreacionDto {
    nombre: string;
    fechaNacimiento: Date;
    foto?: File;
}

export interface actorAutoCompleteDto {

    id: number;
    nombre: string;
    personaje: string;
    foto: string;
}