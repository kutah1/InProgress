import './index.css'
import SignUp from './components/MainPage/AuthPages/SignUp'
import HomePage from './components/HomePage'
import Login from './components/MainPage/AuthPages/Login'
import ChangePWord from './components/MainPage/AuthPages/ChangePWord'
import ForgotPWord from './components/MainPage/AuthPages/ForgotPWord'
import EmailVerification from './components/MainPage/AuthPages/EmailVerification'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/Dashboard/NotFound'
import Dashboard from './components/Dashboard/Dashboard'
import Tracker from './components/Dashboard/Tracker'
import HelpPage from './components/Dashboard/HelpPage'
function App() {

  return (
    


<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        
      
        <Route path="/login" element={<Login/>}/>
     
         <Route path="/signup" element={<SignUp/>}/>
       
           <Route path="/password" element={<ForgotPWord/>}/>
        
        <Route path='/changepassword' element={<ChangePWord/>}/>
        <Route path='/emailverification' element={<EmailVerification/>}/>

         <Route path='/filter' element={<NotFound/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/tracker' element={<Tracker/>}/>
         <Route path='/help' element={<HelpPage/>}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
