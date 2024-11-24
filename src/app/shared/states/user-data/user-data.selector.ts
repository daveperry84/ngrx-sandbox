import { createSelector } from "@ngrx/store";
import { AppState } from "../../../app.state";

export const selectUserDataState = (state: AppState) => state.userData;

export const selectUserData = createSelector(
    selectUserDataState,
    (state) => state
)