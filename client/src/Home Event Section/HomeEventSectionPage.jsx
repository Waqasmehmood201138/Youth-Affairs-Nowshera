import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../Assets/c_9.jpg'
import img2 from '../Assets/c_7.jpg'
import img3 from '../Assets/c_2.jpg'
import img4 from '../Assets/event_1.jpg'
import '../Home Event Section/HomeEventSectionPage.css'

export default function HomeEventSectionPage() {
    return (
        <>
            <div className="container mt-4 custom_counter_container">
                <div className="row">
                    <div className="col-12">
                        <h1 className=' fw-bold text-success text-center'>Latest Events</h1>
                    </div>
                </div>
            </div>

            <div className="container mt-3 d-flex justify-content-center align-items center">
                <div className="row">
                    <div className="col-lg-4 col-12 mb-2">
                        <div class="grid__item__home">
                            <div class="card__home"><img class="card__img__home" src={img1}
                                alt="img here..." />
                                <div className="overlay">
                                    <div className="overlay-text"><Link to="/" className='btn btn-success p-2'>See Details</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 mb-2">
                        <div class="grid__item__home">
                            <div class="card__home"><img class="card__img__home" src={img3}
                                alt="img here..." />
                                <div className="overlay">
                                    <div className="overlay-text"><Link to="/" className='btn btn-success p-2'>See Details</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 mb-2">
                        <div class="grid__item__home">
                            <div class="card__home"><img class="card__img__home" src={img4}
                                alt="img here..." />
                                <div className="overlay">
                                    <div className="overlay-text"><Link to="/" className='btn btn-success p-2'>See Details</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container mt-2">
                <div className="row d-flex justify-content-center " >
                    <div className="col-lg-3 col-sm-12 text-center">
                        <button class="card__btn bg-success text-white"><Link to="/events" style={{ textDecoration: 'none' }} className='text-white'>Explore All Events</Link> <span>&rarr;</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}
