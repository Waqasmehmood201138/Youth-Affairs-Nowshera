import React from 'react'
// import HeroImg from '../Assets/hero_img.png'
import Navbar from '../Navbar/Navbar'
import '../Hero Section/HeroSection.css'
import SliderSection from '../Slider Section/SliderSection'
import CounterSection from '../Counter Section/CounterSection'

export default function HeroSection() {
    return (
        <>
            <Navbar />
            <div className="container-fluid hero_bg">
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-5">
                            <h1 className='text-warning fw-bold custom-head'>Towards a digital
                                Khyber Pakhtunkhwa.</h1>
                                <p className=" text-light mt-3">
                                    We are a team of professionals who are passionate about
                                    providing the best services to our customers.
                                </p>
                        </div>
                        <div className="col-5 text-center">
                            {/* <img className='hero_img' src={HeroImg} alt="" /> */}
                            <img className='hero_img' src='https://usagif.com/wp-content/uploads/gifs/pakistan-flag-2.gif' alt="" />

                        </div>
                    </div>
                </div>
            </div>
            <SliderSection />
            <CounterSection/>
        </>
    )
}
