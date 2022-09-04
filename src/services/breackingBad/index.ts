import axios from 'axios';
import { TBreackingBadСharacter } from './entities';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

export const BreackingBadService = {
  getСharacters: async () => axios.get<TBreackingBadСharacter>('/characters'),
};
