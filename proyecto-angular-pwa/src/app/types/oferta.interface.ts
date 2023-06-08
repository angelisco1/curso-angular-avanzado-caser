export interface Oferta {
  id?: string,
  titulo: string,
  descripcion: string,
  salario: number,
  ciudad: string,
  empresa: string,
}

export type Ofertas = Array<Oferta>