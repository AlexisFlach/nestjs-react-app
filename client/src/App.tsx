import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import { TeamsProvider } from './context/teams/TeamsContext';
import Layout from './components/Layout/mainpage/Mainpage'
import Header from "./components/Layout/header/Header";

const App = () => {
  return (
    <>
      <TeamsProvider>
        <Router>
          <Layout>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Layout>
        </Router>

      </TeamsProvider>
    </>
  )
}

export default App