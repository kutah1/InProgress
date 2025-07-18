import './index.css'
import HomePage from './components/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    


<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}>
  
        </Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
