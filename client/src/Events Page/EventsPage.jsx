import React from 'react'
import { Link } from 'react-router-dom'
import '../Events Page/EventPage.css'

import event1 from '../Assets/event_1.jpg'
import Navbar from '../Navbar/Navbar'

export default function EventsPage() {
    return (
        <>

            <Navbar />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12 text-center text-success ">
                        <h1 className='event_heading'>Our Events</h1>
                        <hr className='custom_event_hr' />
                    </div>
                </div>

                {/* Cards ... */}

                <div className="row d-flex justify-content-center align-items center">
                    <div className="col-lg-4 col-12 mb-2">
                        {/* <div class="grid"> */}
                        <div class="grid__item">
                            <div class="card"><img class="card__img" src={event1} alt="Snowy Mountains" />
                                <div class="card__content">
                                    <h1 class="card__header">A starry night</h1>
                                    <p class="card__text">Look up at the night sky, and find yourself <strong>immersed</strong> in the amazing mountain range of Aspen. </p>
                                    <button class="card__btn">Explore <span>&rarr;</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 mb-2">
                        <div class="grid__item">
                            <div class="card"><img class="card__img" src={event1} alt="Snowy Mountains" />
                                <div class="card__content">
                                    <h1 class="card__header">A starry night</h1>
                                    <p class="card__text">Look up at the night sky, and find yourself <strong>immersed</strong> in the amazing mountain range of Aspen. </p>
                                    <button class="card__btn">Explore <span>&rarr;</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 mb-2">
                        <div class="grid__item">
                            <div class="card"><img class="card__img" src={event1} alt="Snowy Mountains" />
                                <div class="card__content">
                                    <h1 class="card__header">A starry night</h1>
                                    <p class="card__text">Look up at the night sky, and find yourself <strong>immersed</strong> in the amazing mountain range of Aspen. </p>
                                    <button class="card__btn">Explore <span>&rarr;</span></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
