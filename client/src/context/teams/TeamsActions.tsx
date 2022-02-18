import axios from 'axios';
import { useParams } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_URL
})

export const getTeams = async () => {
  const res = await api.get('/teams')
  return res.data
} 

export const getTeamSquad = async (id: string | undefined) => {
  const res = await api.get(`/teams/${id}/squad`);
  return res.data;
}
