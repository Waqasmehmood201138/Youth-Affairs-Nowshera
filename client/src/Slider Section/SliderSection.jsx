import React from 'react'
import '../Slider Section/SliderSection.css'
import Img1 from '../Assets/c_5.jpg'
import Img2 from '../Assets/c_2.jpg'
import Img3 from '../Assets/c_3.jpg'
import Img4 from '../Assets/c_6.jpg'
import Img5 from '../Assets/c_7.jpg'
import Img6 from '../Assets/c_8.jpg'
import Img7 from '../Assets/c_9.jpg'

export default function SliderSection() {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="container pt-lg-5   ">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-7 col-11 order-lg-1 order-2">
                            <h1 className='text-center text-success fw-bold mt-lg-0 mt-3'>Our Missions!</h1>
                            <p style={{ textAlign: 'justify' }}>
                                Youth Office Nowshera is a beacon of hope and empowerment for the young minds of our community. Our mission is to guide and nurture the aspirations of the youth, equipping them with the skills and knowledge needed to succeed in the journey of life. We believe in unlocking their full potential, fostering resilience, and igniting their passion for a brighter future. Together, we aim to inspire, educate, and empower the youth, ensuring they emerge as confident leaders of tomorrow. At Youth Office Nowshera, we are dedicated to shaping dreams into reality.</p>
                        </div>
                        <div className="col-lg-5 col-11 ms-12 order-lg-2 ">
                            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner rounded border border-warning border-5">
                                    <div className="carousel-item active" data-bs-interval="1000">
                                        <img src={Img1} className="d-block w-100 custom_slider_img" alt="..." />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={Img2} className="d-block w-100 custom_slider_img" alt="..." />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="3000">
                                        <img src={Img3} className="d-block w-100 custom_slider_img" alt="..." />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={Img7} className="d-block w-100 custom_slider_img" alt="..." />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="3000">
                                        <img src={Img6} className="d-block w-100 custom_slider_img" alt="..." />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={Img5} className="d-block w-100 custom_slider_img" alt="..." />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="3000">
                                        <img src={Img4} className="d-block w-100 custom_slider_img" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
