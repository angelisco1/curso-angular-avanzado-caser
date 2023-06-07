import { createReducer, on } from "@ngrx/store";
import { actualizarContador, decrementar, incrementar } from "../actions/contador.actions";


const initialState = {
  cuenta: 0
}


export const ContadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => {
    return { cuenta: state.cuenta + 1 }
  }),
  on(decrementar, (state) => {
    return { cuenta: state.cuenta - 1 }
  }),
  on(actualizarContador, (state, payload) => {
    return { cuenta: payload.cuenta }
  }),
)