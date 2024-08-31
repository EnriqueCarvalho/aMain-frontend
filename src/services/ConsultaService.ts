import axios from 'axios';

const instance = axios.create({
  baseURL: '/',
  timeout: 1000, // Simula um tempo de resposta de 1 segundo
});

export const fetchConsultas = async () => {
  try {
    const response = await instance.get('consultas.json');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar consultas');
  }
};
