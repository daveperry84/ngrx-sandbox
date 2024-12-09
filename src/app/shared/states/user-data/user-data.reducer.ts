import { createReducer, on } from "@ngrx/store";
import { redoLastUserChange, resetUser, undoLastUserChange, updateUser } from "./user-data.actions";
import { initialUserData } from "../../constants/initial-user-data.constant";
import { UserDataState } from "../../models/user-data.model";

const initialUserState: UserDataState = { 
    past: [], 
    present: initialUserData,
    future: [],
};

export const userDataReducer = createReducer(
    initialUserState,
    on(updateUser, (state, props) => {
        const newFirstPast = state.present;
        return { past: [newFirstPast, ...state.past], present: props, future: [] };
    }),
    on(undoLastUserChange, (state) => {
        let newFirstFuture = state.present;
        let newPresent = state.past[0];
        let newPast = state.past.slice(1);
        return { past: newPast, present: newPresent, future: [newFirstFuture, ...state.future] };
    }),
    on(redoLastUserChange, (state) => {
        let newPresent = state.future[0];
        let newFirstPast = state.present;
        let newFuture = state.future.slice(1);
        return { past: [newFirstPast, ...state.past], present: newPresent, future: newFuture };
    }),
    on(resetUser, () => {
        return initialUserState;
    }),
)