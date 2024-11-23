export interface UserData {
    name: string;
    emailAddress: string;
    phoneNumber: string;
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