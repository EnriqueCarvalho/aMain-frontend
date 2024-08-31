import axios from 'axios';
import { LocalStorageService } from 'src/services/LocalStorageService';
import { environment } from 'src/environment/environment';
import { triggerNegative } from 'src/utils/NotificacaoUtil';
import { useAuthStore } from 'src/stores/authstore';

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
    const authstore = useAuthStore(); // Mova a inicialização para dentro do interceptor

    if (error.config.url.includes('refresh')) {
      triggerNegative('Você foi desconectado por ociosidade');
      authstore.logout();
      return Promise.reject('Refresh Token expired');
    }

    if (!originalRequest._retry) {
      originalRequest._retry = true;

      if (!originalRequest.url.includes('login') && LocalStorageService.get("token") === null) {
        triggerNegative("Acesso não autorizado");
        return;
      } else if (error.response.status !== 200) {
        triggerNegative(error.response);
      } else if (error.response.status === 401 && !originalRequest.url.includes('login')) {
        triggerNegative('Você foi desconectado por ociosidade');
        authstore.logout();
        return;
      }
    }
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  (config) => {
    const token = LocalStorageService.get('token');

    console.log('URL -> ', config.url)

    if (!config.url?.includes('/usuario') && !config.url?.includes('refresh')) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
