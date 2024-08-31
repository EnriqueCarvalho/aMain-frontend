export type ILogin = {
  email: string | undefined;
  password: string | undefined;
};

export type EsqueciMinhaSenha = {
  email: string;
};

export type ResetarSenha = {
  token: string;
  novaSenha: string;
  confirmaSenha: string;
};

export type AtualizarToken = {
  token: string;
};
