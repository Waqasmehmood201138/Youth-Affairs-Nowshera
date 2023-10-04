import {React , useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import logo from '../Assets/logo_2.png'
import logo2 from '../Assets/Yan_Logo.jpg'
// import { useState } from 'react'

export default function Navbar() {
    const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg custom_bg mobile_view" data-bs-theme="dark">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img style={{ borderRadius: "50%" }} src={logo2} width="50" height="50" alt="logo" /><span className='fw-bold ms-3' style={{fontFamily: 'Poppins'}}>Youth Affairs Nowshera</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item text-dark">
                                <Link class="nav-link custom_nav" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ps-4 pe-4 custom_nav" aria-current="page" to="/events">Events</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ps-4 pe-4 custom_nav" aria-current="page" to="/gallery">Gallery</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link custom_nav" aria-current="page" to="/contact-us">Contact Us</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <div className={`container-fluid custom_bg desktop_view ${isFixed ? 'fixed-top' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-1"><Link className='d-flex justify-content-center align-items-center'><img className='mt-1' src={logo2} width="40" height="40" alt="" style={{ borderRadius: "50%" }} /></Link></div>

                        <div className="col-1 custom_nav home_nav"><Link to="/" className='nav-link'>Home</Link></div>
                        <div className="col-1 custom_nav"><Link to="/events" className='nav-link'>Events</Link></div>
                        <div className="col-1 custom_nav"><Link to="/gallery" className='nav-link'>Gallery</Link></div>
                        <div className="col-2 custom_nav"><Link to="/contact-us" className='nav-link'>Contact Us</Link></div>

                        <div className="col-1 custom_nav buttons"><Link to="/login" className='nav-link custom_button'>Login</Link></div>
                        <div className="col-1 custom_nav "><Link to="/signup" className='nav-link custom_button'>Signup</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}
