import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from './Hero Section/HeroSection';
import LoginForm from './Forms/LoginForm';
import SignupForm from './Forms/SignupForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminEventForm from './Forms/AdminEventForm';
function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
      <Routes>

         <Route path='/' element={<HeroSection/>} />
         <Route path='/login' element={<LoginForm/>} />
         <Route path='/signup' element={<SignupForm/>} />
         <Route path='/add-event' element={<AdminEventForm/>} />


</Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
