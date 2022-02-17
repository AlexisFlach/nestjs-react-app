import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_URL
})

export const getTeams = async () => {
  const res = await api.get('/teams')
  return res.data
} 