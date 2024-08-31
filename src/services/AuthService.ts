import instance from 'src/services/interceptor/interceptor';

import { LocalStorageService } from '../services/LocalStorageService';
import { ILogin } from 'src/types/models/ILogin';

export async function login(data: ILogin, manterConectado: boolean) {
  try {
    const response = await instance.post('/usuario/login', data);
    if (response.data) {
      this.user = response.data;
      this.token = response.data.accessToken;

      if (manterConectado) {
        LocalStorageService.save('user', this.user);
        LocalStorageService.save('token', this.token);
      }

      return this.user;
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return false;
  }
}