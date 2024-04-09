import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home/Home'
import FullstackBooks from './FullstackBooks/FullstackBooks'
import SignInSide from './SignInSide/SignInSide'
import Register from './ForgotPassword/Register/Register'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import Download from './Download/Download'
import Feedback from './Feedback/Feedback'
import AboutUs from './Aboutus/Aboutus'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route path='/'element={<Home/>}></Route>
        <Route path='/Login'element={<SignInSide/>}></Route>
        <Route path='/register'element={<Register/>}></Route>
        <Route path='/forgot'element={<ForgotPassword/>}></Route>
        <Route path='/books'element={<FullstackBooks/>}></Route>
        <Route path='/Download'element={<Download/>}></Route>
        <Route path='/Feedback'element={<Feedback/>}></Route>

        <Route path='/About'element={<AboutUs/>}></Route>

          </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App;