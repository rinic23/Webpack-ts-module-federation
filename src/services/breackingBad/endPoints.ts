import axios from 'axios';
import { TBreackingBadСharacter } from './entities';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

export const BreackingBadEndPoints = {
  getСharacters: async (currentOffset: number) =>
    axios.get<TBreackingBadСharacter[]>(`/characters?limit=12&offset=${currentOffset}`),
};
