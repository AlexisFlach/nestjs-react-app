import { useState, useContext } from 'react'
import AuthContext from '../../../context/auth/AuthContext';
import { signinUser } from '../../../context/auth/AuthActions'
// import {registerNewUser, loginCredentials} from '../../../shared/interface'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { state, dispatch } = useContext(AuthContext)
  console.log(dispatch)
  const login = async (e: any) => {
    e.preventDefault();
    dispatch({ type: 'REQUEST_LOGIN' })
    try {
      const res = await signinUser({ username, password })
      res.data.username = username;
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <>
        <div>
          <h1>Login</h1>
          <form onSubmit={login}>
            <input placeholder="username" onChange={(e) => setUsername(e.target.value)} /> <br />
            <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button>Login</button>
          </form>
        </div>
      </>
    </>
  )
}

export default Login
