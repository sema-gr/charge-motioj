
export interface IUser {
    id: string;
    email: string;
    token?: string;
}

export type LoginForm = {
    email: string;
    password: string;
};