import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { TeamsProvider } from './context/teams/TeamsContext';
import Layout from './components/Layout/mainpage/Layout'
import Header from "./components/Layout/header/Header";
import HomePage from "./views/home/homePage/HomePage";
import LoginPage from "./views/login/loginPage/LoginPage";

const App = () => {
  return (
    <>
      <TeamsProvider>
        <Router>
          <Layout>
            <Header />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
            </Routes>
          </Layout>
        </Router>
      </TeamsProvider>
    </>
  )
}

export default App