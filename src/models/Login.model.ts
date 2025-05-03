import { atom } from "jotai";

// export interface Login {
//   id: number;
//   user: string;
// }

// export const StateLogin = {
//   isLogged: false,
// }

// export var TesteLogin: boolean = false;

// export function setIsLogged(isLogged: boolean) {
//   StateLogin.isLogged = isLogged;
// }

// export function setIsLogged(isLogged: boolean | undefined) {
//   StateLogin.isLogged = !StateLogin.isLogged;
//   TesteLogin = !TesteLogin;
// }

export const StateLogin = atom<boolean>(false);