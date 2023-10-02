import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs'
import { RiTwitterXFill } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import Navbar from '../Navbar/Navbar'
import '../Hero Section/HeroSection.css'
import SliderSection from '../Slider Section/SliderSection'
import CounterSection from '../Counter Section/CounterSection'
import FooterPage from '../Footer Page/FooterPage'
import HomeEventSectionPage from '../Home Event Section/HomeEventSectionPage'
import Map from '../Map Section/Map'
import ChairPerson from '../Chair Person Section/ChairPerson'


export default function HeroSection() {
    return (
        <>
            <Navbar />
            <div className="container-fluid hero_bg">
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-lg-5 col-sm-12">
                            <h1 className='text-warning fw-bold custom_hero_title'>Towards a digital
                                Khyber Pakhtunkhwa.</h1>
                            <p className=" text-light mt-3">
                                We are a team of professionals who are passionate about
                                providing the best services to our customers.
                            </p>
                            <h3 className='text-white ms-3'>
                              <span className='me-4'><Link to='https://www.facebook.com/YouthNowshera' target='_blank' className='text-white'><BsFacebook className='icon'/></Link></span>
                               <span className='me-4 icon'><RiTwitterXFill /></span> 
                               <span className='me-4 icon'><BsInstagram /></span> 
                               <span className='icon'><BsYoutube /></span> 
                            </h3>

                        </div>
                        <div className="col-5 text-center">
                            {/* <img className='hero_img' src={HeroImg} alt="" /> */}
                            <img className='hero_img' src='https://usagif.com/wp-content/uploads/gifs/pakistan-flag-2.gif' alt="" />

                        </div>
                    </div>
                </div>
            </div>
            <SliderSection />
            <ChairPerson/>
            <CounterSection />
            <HomeEventSectionPage/>
            <Map/>
            <FooterPage />

        </>
    )
}
