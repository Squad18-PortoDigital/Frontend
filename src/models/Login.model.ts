// export interface Login {
//   id: number;
//   user: string;
// }

export const StateLogin = {
  isLogged: false,
}

export function setIsLogged(isLogged: boolean) {
  StateLogin.isLogged = isLogged;
}