import { createAction, props } from "@ngrx/store";
import { UserData } from "../../models/user-data.model";

export const updateUser = createAction('[UserData] Update User', props<{ user: UserData }>());