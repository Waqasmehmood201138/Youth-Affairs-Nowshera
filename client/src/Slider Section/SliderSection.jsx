import React from 'react'
import '../Slider Section/SliderSection.css'
import Img1 from '../Assets/c_5.jpg'
import Img2 from '../Assets/c_2.jpg'
import Img3 from '../Assets/c_3.jpg'

export default function SliderSection() {
    return (
        <>
            <div className="container-fluid mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <p>The Skills Development Programme serves as a fundamental initiative under the Prime Minister's Youth Programme (PMYP), dedicated to nurturing a skilled workforce that propels economic growth. Its primary objective is to empower the youth of Pakistan with cutting-edge, demand-driven, and employable skills. With a diverse array of over 100 highly sought-after skills on offer, including artificial intelligence, mechatronics, programming, graphic designing, data analytics, e-commerce, cyber security, culinary arts, PLC, CNC Machining, welding, and electric technology.</p>
                            <p>The implementation of this extensive initiative is overseen by the esteemed National Vocational & Technical Training Commission (NAVTTC), in collaboration with 600 distinguished training providers, including prestigious universities, TVET institutes, and reputable companies. The programme functions with clear and defined focus areas, with a primary emphasis on providing technical skills that align with the dynamic needs of the market. Furthermore, a key aspect of the Skills Development Programme lies in promoting inclusivity, diligently striving for gender equality, inclusiveness of differently abled young individuals, marginalized youth, and empowering youth workers engaged in the informal sector. The programme places a strong emphasis on fostering competence among its trainees, ensuring that they are equipped to excel in their chosen fields.</p>
                        </div>
                        <div className="col-5 ms-5">
                            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner rounded">
                                    <div className="carousel-item active" data-bs-interval="3000">
                                        <img src={Img1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="3000">
                                        <img src={Img2} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="3000">
                                        <img src={Img3} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
