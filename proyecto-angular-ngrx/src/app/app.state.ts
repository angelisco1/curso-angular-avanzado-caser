import { ActionReducerMap } from "@ngrx/store";
import { ContadorReducer } from "./reducers/contador.reducers";

export type ContadorStateType = {
  cuenta: number
}

export type AppStateType = {
  contador: ContadorStateType
}

export const AppReducers: ActionReducerMap<AppStateType> = {
  contador: ContadorReducer,
}