import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Events Page/EventPage.css'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import FooterPage from '../Footer Page/FooterPage'

export default function EventsPage() {
    const [events, setEvents] = useState([])
    const getAllEvents = async () => {
        try {
            const allEvents = await axios.get('http://localhost:5000/events/all-events');

            setEvents(allEvents.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllEvents();
    }, []);

    useEffect(() => {
        console.log(events);

    }, [events]);
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

                    {events.map((event) => {
                        return (
                            <div className="col-lg-4 col-12 mb-2" key={event._id}>
                                <div class="grid__item">
                                    <div class="card"><img class="card__img"src={`http://localhost:5000/images/${event.image}`}
                                        alt="img here..." />
                                        <div class="card__content">
                                            <h1 class="card__header word-wrap">{event.title.slice(0, 30)}...</h1>
                                            <p class="card__text ">{event.description.slice(0, 80)}...</p>
                                            
                                            <button class="card__btn"><Link to={`/sep/${event._id}`} style={{textDecoration:'none'}}>Explore</Link> <span>&rarr;</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })}
            
                </div>
            </div>
            <FooterPage />

        </>
    )
}
