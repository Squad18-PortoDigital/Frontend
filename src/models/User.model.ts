export interface UserModel {
  id: number;
  nome: string;
  matricula?: number;
  email?: string;
  perfil: number;
}

export interface InstrutorModel {
  refresh: string;
  access: string;
  id_usuario: number;
  nome: string;
  nivel: string;
}

export interface AlunoModel {
  refresh: string;
  access: string;
  id_usuario: number;
  nome: string;
  nivel: string;
}