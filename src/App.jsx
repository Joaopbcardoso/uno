import { BrowserRouter as Routes, Router, Route } from 'react-router-dom'
import './App.css'
import Home from './screens/Home'

function App() {

  return (
      <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>
      </Router>
  )
}

export default App
