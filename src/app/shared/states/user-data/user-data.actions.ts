import { createAction, props } from "@ngrx/store";
import { UserData } from "../../models/user-data.model";

export const updateUser = createAction('[UserDataState] Update User', props<UserData>());
export const undoLastUserChange = createAction('[UserDataState] Undo Last User Change');