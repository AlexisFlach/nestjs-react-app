import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { TeamsProvider } from './context/teams/TeamsContext';
import Layout from './components/Layout/mainpage/Layout'

import HomePage from "./views/home/homePage/HomePage";
import Navbar from "./components/Layout/navbar/Navbar";
import Register from "./views/auth/register/Register";
import Login from "./views/auth/login/Login";
import Teams from "./components/Teams/Teams";
import { AuthProvider } from "./context/auth/AuthContext";

const App = () => {
  return (
    <>
      <TeamsProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
             
              <Route path='/teams' element={<Teams />} />
            </Routes>
          </Layout>
        </Router>
        </AuthProvider>
      </TeamsProvider>
    </>
  )
}

export default App