import { defineStore } from 'pinia';
import { LocalStorageService } from '../services/LocalStorageService';
import { ILogin } from 'src/types/models/ILogin';
import instance from 'src/services/interceptor/interceptor';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    loadFromLocalStorage() {
      const user = LocalStorageService.get('user');
      const token = LocalStorageService.get('token');

      if (user && token) {
        this.user = user;
        this.token = token;
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      LocalStorageService.remove('user');
      LocalStorageService.remove('token');
    },
    async register(data) {
      try {
        const response = await instance.post('/usuario/cadastro/paciente', data);
        return response.data;
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        throw error;
      }
    },
  }
});
