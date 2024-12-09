export interface UserDataState {
    past: UserData[];
    present: UserData;
    future: UserData[];
}

export interface UserData {
    name: string;
    emailAddress: string;
    phoneNumbers: string[];
    interests: UserInterests;
}

export interface UserInterests {
    cooking: boolean;
    fitness: boolean;
    gaming: boolean;
    movies: boolean;
    reading: boolean;
    travelling: boolean;
}