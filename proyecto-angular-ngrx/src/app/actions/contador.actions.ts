import { createAction, props } from "@ngrx/store";
import { ACTUALIZAR_CONTADOR, DECREMENTAR, INCREMENTAR } from "./actions.types";

export const incrementar = createAction(INCREMENTAR)
export const decrementar = createAction(DECREMENTAR)
export const actualizarContador = createAction(ACTUALIZAR_CONTADOR, props<{ cuenta: number }>())