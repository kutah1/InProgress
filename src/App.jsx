import './index.css'
import SignUp from './components/MainPage/SignUp'
import HomePage from './components/HomePage'
import Login from './components/MainPage/Login'
import ForgotPWord from './components/MainPage/ForgotPWord'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    


<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}>
        
        </Route>
        <Route path="/login" element={<Login/>}>
        </Route>
         <Route path="/signup" element={<SignUp/>}>
        </Route>
           <Route path="/password" element={<ForgotPWord/>}>
        </Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
