import { UserData } from "../models/user-data.model";

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