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
import imgvideo from '../Assets/yonvideo.mp4'


export default function HeroSection() {
    return (
        <>
            <Navbar />
            <div className="container-fluid hero_bg">
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-lg-5 col-sm-12">
                            <h1 className=' fw-bold custom_hero_title'>District Youth Affairs Nowshera.</h1>
                            <p className="custom_hero_subtitle mt-3 fw-bold">
                                Our Youth <span className='text-dark'>|</span> Our Pride <span className='text-dark'>|</span> Our Future
                            </p>
                            <h3 className='text-white ms-3'>
                                <span className='me-4'><Link to='https://www.facebook.com/YouthNowshera' target='_blank' className='text-primary'><BsFacebook className='icon' /></Link></span>
                                <span className='me-4 icon'><Link to='https://twitter.com/YouthNowshera' target='_blank' className='text-black'><RiTwitterXFill className='icon' /></Link></span>
                                <span className='me-4 icon'><Link to='/' target='_blank' className='text-secondary'><BsInstagram className='icon' /></Link></span>
                                <span className='icon'><Link to='/' target='_blank' className='text-danger'><BsYoutube className='icon' /></Link></span>
                               
                            </h3>

                        </div>
                        <div className="col-5 text-center">
                            {/* <img className='hero_img' src={HeroImg} alt="" /> */}
                            {/* <img className='hero_img' src='https://usagif.com/wp-content/uploads/gifs/pakistan-flag-2.gif' alt="" /> */}

                            {/* <video className='hero_img' controls loop />
                            <source src={imgvideo} type="video/mp4" /> */}
                            <video className='hero_img rounded  border-4 border' autoPlay loop muted>
                                <source src={imgvideo} type="video/mp4" />
                            </video>



                        </div>
                    </div>
                </div>
            </div >
            <SliderSection />
            <ChairPerson />
            <CounterSection />
            <HomeEventSectionPage />
            <Map />
            <FooterPage />

        </>
    )
}
