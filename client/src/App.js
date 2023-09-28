import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import HeroSection from './Hero Section/HeroSection';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<HeroSection/>} />
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
