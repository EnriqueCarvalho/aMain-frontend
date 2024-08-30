/* import axios from 'axios';
import * as AuthService from 'src/services/AuthService';
import * as UserService from 'src/services/UserService';
import { getManterConectado, getRefreshToken, getToken, salvarDadosLocalStorage } from '../LocalStorageService';
import { environment } from 'src/environment/environment';
import { notificacaoNegativa } from '../Utils';

const instance = axios.create({
  baseURL: environment.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.config.url.includes('refresh')){
      notificacaoNegativa('Você foi desconectado por ociosidade')
      AuthService.logout()
      return Promise.reject('Refresh Token expired');
    }

    // ERRO ao se conectar com o servidor
    if (error.message.includes('Network Error')) {
      UserService.error()
      return;
    }

    else if(!originalRequest._retry){
      originalRequest._retry = true;
      const refToken = getRefreshToken()
      const manterConectado = getManterConectado()

      if (refToken && error.response.status === 401 && manterConectado === true) {
        await AuthService.AtualizarTokenFunction({ token: refToken }).then(resp => {
          const { accessToken, refreshToken } = resp.data;
          salvarDadosLocalStorage({ token: accessToken, refreshToken, manterConectado: true })
        })

        return instance(originalRequest);
      } else if (!originalRequest.url.includes('login') && getToken() === null) {
          //o user quer acessar uma url sem estar logado.
          //notificacaoNegativa('Acesso indevido!')
          UserService.errorNotAuthorized()
          return;
          //return Promise.reject('Acesso indevido!');
      } else if (error.response.status === 400) {
        return error.response
          //return Promise.reject('Acesso indevido!');
      } else if (error.response.status === 401 && !originalRequest.url.includes('login')) {
          notificacaoNegativa('Você foi desconectado por ociosidade')
          AuthService.logout()
          return;
          //return Promise.reject('Acesso indevido!');
      } else if (error.response.status === 404 && getToken() != null) {
          notificacaoNegativa(error.response.data.error ?? 'Não encontrado');
      } else if (error.response.status === 500 && getToken() != null) {
          if (error.response.data.error)
            notificacaoNegativa(`${error.response.data.error}`)

          UserService.back()
          //AuthService.logout()
          return Promise.reject('Not Found');
      }
      // else if (!error.response.data.path.includes('login')){
      //     notificacaoNegativa('Você foi desconectado por ociosidade')
      //     AuthService.logout()
      //   return Promise.reject('Token expired');
      //  }
    }
    return error;
  }
);

instance.interceptors.request.use(
  config => {
    const token = getToken()

    if (!config.url?.includes('login') && !config.url?.includes('refresh')) {
      config.headers.Authorization = `Bearer ${token}`
    } else {
      delete config.headers.Authorization;
    }
    return config
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
 */
