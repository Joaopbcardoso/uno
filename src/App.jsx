import { BrowserRouter as Routes, Router, Route } from 'react-router-dom'
import './App.css'
import Home from './screens/Home'
import Sobre from './screens/Sobre'
import Regras from './screens/Regras'
import ComoJogar from './screens/ComoJogar'

function App() {

  return (
      <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/sobre' element={<Sobre />}/>
            <Route path='/regras' element={<Regras />}/>
            <Route path='/como-jogar' element={<ComoJogar />}/>
        </Routes>
      </Router>
  )
}

export default App
