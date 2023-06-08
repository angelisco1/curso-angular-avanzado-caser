import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CARGAR_PRODUCTOS } from "../actions/actions.types";
import { map, switchMap } from "rxjs";
import { ProductosService } from "../services/productos.service";
import { productosCargados } from "../actions/maquina-exp.actions";

@Injectable()
export class MaquinaExpEffect {

  cargarProductos = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(CARGAR_PRODUCTOS),
        switchMap(() => {
          return this.productosService.getProductos()
        }),
        map((productos: Array<any>) => {
          return productosCargados({ productos })
        })
      )
  })

  constructor(
    private actions$: Actions,
    private productosService: ProductosService,
  ) { }

}