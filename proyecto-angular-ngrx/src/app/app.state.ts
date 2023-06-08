import { ActionReducerMap } from "@ngrx/store";
import { ContadorReducer } from "./reducers/contador.reducers";
import { MaquinaExpReducer } from "./reducers/maquina-exp.reducers";

export type ContadorStateType = {
  cuenta: number,
}

export type AppStateType = {
  contador: ContadorStateType,
  maquinaExp: any,
}

export const AppReducers: ActionReducerMap<AppStateType> = {
  contador: ContadorReducer,
  maquinaExp: MaquinaExpReducer,
}