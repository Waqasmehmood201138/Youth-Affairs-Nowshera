import React from 'react'
import HeroImg from '../Assets/hero_img.png'
import Navbar from '../Navbar/Navbar'
import '../Hero Section/HeroSection.css'

export default function HeroSection() {
    return (
        <>
        <Navbar/>
            <div className="container-fluid hero_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <img className='hero_img' src={HeroImg} width="650" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
