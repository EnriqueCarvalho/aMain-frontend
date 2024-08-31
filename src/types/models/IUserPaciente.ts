interface PublicoAlvo {
  idPublicAlvo: number;
  descrPublico: string;
}

interface Usuario {
  nome: string;
  email: string;
  password: string;
  tipo: string;
  dtNascimento: string;
}

interface Paciente {
  idPaciente: number;
  publicoAlvo: PublicoAlvo;
  observacoes: string;
  reposavel: boolean;
  usuario: Usuario;
}
