import { createSelector } from "@ngrx/store";
import { AppStateType, ContadorStateType } from "../app.state";


export const selectCuenta = createSelector(
  (state: AppStateType) => state.contador,
  (state: ContadorStateType) => state.cuenta,
)
