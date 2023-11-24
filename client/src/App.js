import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import HeroSection from './Hero Section/HeroSection';
import LoginForm from './Forms/LoginForm';
import SignupForm from './Forms/SignupForm';
import EditForm from './Forms/EditForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import EventsPage from './Events Page/EventsPage';

import AdminEventForm from './Forms/AdminEventForm';
import EventSpecificPage from './Event Specific Page/EventSpecificPage';
import AdminEventTablePage from './Admin Events Table/AdminEventTablePage';
import ContactUsPage from './Contact Us Page/ContactUsPage';
import GalleryPage from './Gallery Page/GalleryPage';


function App() {
  return (
    <>
      <HashRouter>
        <ToastContainer />
        <Routes>

          <Route exact path='/' element={<HeroSection />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignupForm />} />

          <Route path='/events' element={<EventsPage />} />

          <Route path='/add-event' element={<AdminEventForm />} />
          <Route path='/admin-dashboard' element={<AdminEventTablePage />} />

          <Route path='/sep/:id' element={<EventSpecificPage />} />
          <Route path='/test' element={<EditForm />} />

          <Route path='/contact-us' element={<ContactUsPage />} />
          
          <Route path='/gallery' element={<GalleryPage />} />



        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
