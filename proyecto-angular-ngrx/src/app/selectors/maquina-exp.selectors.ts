import { createSelector } from "@ngrx/store";
import { AppStateType } from "../app.state";
import { MaquinaExpStateType } from "../reducers/maquina-exp.reducers";

export const selectProductos = createSelector(
  (state: AppStateType) => state.maquinaExp,
  (state: MaquinaExpStateType) => state.productos,
)