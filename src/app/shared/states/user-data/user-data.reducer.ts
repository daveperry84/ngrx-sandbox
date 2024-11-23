import { createReducer, on } from "@ngrx/store";
import { UserData } from "../../models/user-data.model";
import { updateUser } from "./user-data.actions";

export const initialUserDataState: UserData = {
    name: '',
    emailAddress: '',
    phoneNumber: '',
    interests: {
      fitness: false,
      reading: false,
      movies: false,
      gaming: false,
      cooking: false,
      travelling: false,
    }
};

export const userDataReducer = createReducer(
    initialUserDataState,
    on(updateUser, (state, props) => ({ ...state, ...props }))
)