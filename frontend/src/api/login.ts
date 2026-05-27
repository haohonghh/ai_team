import axios from 'axios'

export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  success: boolean
  message: string
}

const request = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000
})

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await request.post<LoginResponse>('/login', data)
  return response.data
}

export default request