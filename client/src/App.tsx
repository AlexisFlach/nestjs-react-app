import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import { TeamsProvider } from './context/teams/TeamsContext';

const App = () => {
  return (
  <>
  <TeamsProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  </TeamsProvider>
  </>
  )
}

export default App