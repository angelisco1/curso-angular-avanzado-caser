import { createAction, props } from "@ngrx/store";
import { CARGAR_PRODUCTOS, PRODUCTOS_CARGADOS, SACAR_PRODUCTO } from "./actions.types";

export const sacarProducto = createAction(
  SACAR_PRODUCTO,
  props<{ codigo: number }>()
)

export const cargarProductos = createAction(
  CARGAR_PRODUCTOS
)

export const productosCargados = createAction(
  PRODUCTOS_CARGADOS,
  props<{ productos: Array<any> }>()
)