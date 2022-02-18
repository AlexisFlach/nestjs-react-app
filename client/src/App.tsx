import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import { TeamsProvider } from './context/teams/TeamsContext';
import TeamSquad from "./components/Teams/TeamSquad";

const App = () => {
  return (
  <>
  <TeamsProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team/:id/squad' element={<TeamSquad />} />
      </Routes>
    </Router>
  </TeamsProvider>
  </>
  )
}

export default App