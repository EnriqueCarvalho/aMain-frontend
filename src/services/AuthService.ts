/* import instance from 'src/services/Interceptor/interceptor';
import { environment } from '../environment/environment';
import { EsqueciMinhaSenha, ResetarSenha, IAtualizarToken } from '../types/interfaces/IAuth';

import Usuario from 'src/types/models/Usuario';
import LocalStorage from 'src/types/models/LocalStorage';
import { salvarDadosLocalStorage } from './LocalStorageService';
import { useUserStore } from 'src/stores/user';
import { turmasGradeMatricula } from './MatriculaService';

export async function Login(data: Usuario, manterConectado: boolean) {
  const dados = await instance.post(`${environment.baseUrl}/aluno/login`, data);
  if (dados) {
    const storage: LocalStorage = new LocalStorage
    storage.token = dados.data.accessToken
    storage.refreshToken = dados.data.refreshToken
    storage.manterConectado = manterConectado
    salvarDadosLocalStorage(storage)
    return dados.data.usuarioInfoDto;
  }
  return false;
}

export function logout(){
  turmasGradeMatricula.value = {
    solicitados: [],
    outros: []
  }

  const usuario = useUserStore()
  usuario.userLogout()
}

export function ResetarSenhaFunction(data: ResetarSenha) {
  return instance.post(`${environment.baseUrl}/password-reset`, data);
}

export function EsqueciMinhaSenhaFunction(data: EsqueciMinhaSenha) {
  return instance.post(`${environment.baseUrl}/password-forgot`, data);
}
export function AtualizarTokenFunction(data: IAtualizarToken) {
  return instance.post(`${environment.baseUrl}/aluno/refresh`, data);
}


 */
