export interface Trilhas {
  id: number;
  titulo: string;
  created_at: Date | null;
  updated_at: Date | null;
  criador_nome: string;
  duracao_total: number;
  jcoins: number;
}

export interface NovaTrilha {
  titulo: string;
  descricao?: string | null;
  icone?: null;
  created_at: string;
  updated_at: string;
  duracao_total: number,
  jcoins: number,
}