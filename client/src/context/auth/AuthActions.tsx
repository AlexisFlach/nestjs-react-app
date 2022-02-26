import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_URL
})

export const registerUser = async (data:any) => {
  await api.post('/auth/signup', data)
} 
export const signinUser = async (data:any) => {
  console.log(data)
  const result = await api.post('/auth/signin', data);
  const accessToken = result.data.accessToken;
  localStorage.setItem('accessToken', accessToken);
  return result;
}
