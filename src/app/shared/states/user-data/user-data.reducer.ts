import { createReducer, on } from "@ngrx/store";
import { updateUser } from "./user-data.actions";
import { initialUserDataState } from "../../constants/initial-user-data.constant";

export const userDataReducer = createReducer(
    initialUserDataState,
    on(updateUser, (state, props) => ({ ...state, ...props }))
)