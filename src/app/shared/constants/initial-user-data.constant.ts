import { UserData } from "../models/user-data.model";

export const initialUserData: UserData = {
    name: '',
    emailAddress: '',
    phoneNumbers: [''],
    interests: {
      fitness: false,
      reading: false,
      movies: false,
      gaming: false,
      cooking: false,
      travelling: false,
    }
};