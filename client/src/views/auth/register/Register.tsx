import { useState } from 'react'
import { AuthProvider } from '../../../context/auth/AuthContext';
import { registerUser } from '../../../context/auth/AuthActions'
// import {registerNewUser, loginCredentials} from '../../../shared/interface'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const register = async (e: any) => {
    e.preventDefault();
    try {
      await registerUser({ username, password })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <AuthProvider>
        <div>
          <h1>Register</h1>
          <form onSubmit={register}>
            <input placeholder="username" onChange={(e) => setUsername(e.target.value)} /> <br />
            <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button>Register</button>
          </form>
        </div>
      </AuthProvider>
    </>
  )
}

export default LoginPage
