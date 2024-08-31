import instance from 'src/services/interceptor/interceptor';

import { LocalStorageService } from '../services/LocalStorageService';
import { ILogin } from 'src/types/models/ILogin';

export async function login(data: ILogin, manterConectado: boolean) {
  try {
    const response = await instance.post('/usuario/login', data);
    if (response.data) {
      const user = response.data;
      const token = response.data.accessToken;

      LocalStorageService.save('user', user);
      LocalStorageService.save('token', token);

      return user;
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return false;
  }
}