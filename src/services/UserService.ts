/* import { useUserStore } from 'src/stores/user';
import { environment } from '../environment/environment';
import { Register, RegisterNovo } from 'src/types/interfaces/IUser';
import { ref } from 'vue';
import instance from 'src/services/Interceptor/interceptor';
import UsuarioInfoDto from 'src/types/models/dto/usuario/UsuarioInfoDto';

function getUserInfoLocalStorage() {
  const userInfoJSON = localStorage.getItem('userInfo');
  return userInfoJSON ? JSON.parse(userInfoJSON) : null;
}

export const userInfo = ref<UsuarioInfoDto>(getUserInfoLocalStorage());

export function setUserInfo(user : UsuarioInfoDto) {
  userInfo.value = user;
  localStorage.setItem('userInfo', JSON.stringify(user));
}

export const zeraUserInfo = () => {
  userInfo.value = {};
}

export function GetUserFoto() {
  return instance.get(`${environment.baseUrl}/usuario/foto`);
}

export function CadastroUser(data: Register) {
  return instance.post(`${environment.baseUrl}/usuario`, data);
}

export function CadastroUserNovo(data: RegisterNovo) {
  return instance.post(`${environment.baseUrl}/usuario/novo`, data);
}

export function error(){
  const usuario = useUserStore()
  usuario.userError()
}

export function errorNotFound() {
  const usuario = useUserStore()
  usuario.userErrorNotFound()
}

export function errorNotAuthorized() {
  const usuario = useUserStore()
  usuario.userErrorNotAuthorized()
}

export function back(){
  const usuario = useUserStore()
  usuario.userBack()
}

 */
