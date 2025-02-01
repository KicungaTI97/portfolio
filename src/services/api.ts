import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const getPortfolioData = async () => {
  const { data } = await api.get('/portfolio');
  return data;
};