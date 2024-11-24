import { createReducer, on } from "@ngrx/store";
import { undoLastUserChange, updateUser } from "./user-data.actions";
import { initialUserData } from "../../constants/initial-user-data.constant";
import { UserData, UserDataState } from "../../models/user-data.model";

const initialUserState: UserDataState = { 
    past: [], 
    present: initialUserData 
};

export const userDataReducer = createReducer(
    initialUserState,
    on(updateUser, (state, props) => {
        const newFirstPast = state.present;
        return { past: [newFirstPast, ...state.past], present: props };
    }),
    on(undoLastUserChange, (state) => {
        let newPresent = state.past[0];
        let newPast = state.past.slice(1);
        return { past: newPast, present: newPresent };
    })
)