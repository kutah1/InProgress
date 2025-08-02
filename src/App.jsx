import './index.css'
import SignUp from './components/MainPage/AuthPages/SignUp'
import HomePage from './components/HomePage'
import Login from './components/MainPage/AuthPages/Login'
import ChangePWord from './components/MainPage/AuthPages/ChangePWord'
import ForgotPWord from './components/MainPage/AuthPages/ForgotPWord'
import EmailVerification from './components/MainPage/AuthPages/EmailVerification'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FilterSearch from './components/Dashboard/FilterSearch'



function App() {

  return (
    


<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}>
        
        </Route>
        <Route path="/login" element={<Login/>}/>
     
         <Route path="/signup" element={<SignUp/>}/>
       
           <Route path="/password" element={<ForgotPWord/>}/>
        
        <Route path='/changepassword' element={<ChangePWord/>}/>
        <Route path='/emailverification' element={<EmailVerification/>}/>

         <Route path='/filter' element={<FilterSearch/>}/>

      </Routes>
    </BrowserRouter>
   
  )
}

export default App
