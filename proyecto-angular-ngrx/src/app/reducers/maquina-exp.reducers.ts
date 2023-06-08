import { createReducer, on } from "@ngrx/store";
import { productosCargados, sacarProducto } from "../actions/maquina-exp.actions";

export type MaquinaExpStateType = {
  productos: Array<any>
}

const initialState: MaquinaExpStateType = {
  productos: []
}

export const MaquinaExpReducer = createReducer(
  initialState,
  on(sacarProducto, (state, payload) => {

    const productosActualizados = state.productos.map((producto: any) => {
      if (producto.codigo === payload.codigo) {
        return { ...producto, stock: producto.stock - 1 }
      }
      return producto
    })

    return { productos: productosActualizados }
  }),
  on(productosCargados, (_, payload) => {
    return { productos: payload.productos }
  }),
)