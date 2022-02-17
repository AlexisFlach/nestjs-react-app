import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_URL
})

export const getTeams = async () => {
  console.log("trying")
  const res = await api.get('/teams')
  console.log("res", res)
  return res.data
} 