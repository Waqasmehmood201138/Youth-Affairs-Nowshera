import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Events Page/EventPage.css'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import FooterPage from '../Footer Page/FooterPage'
import Loader from '../Loader/Loader'

export default function EventsPage() {
    const [events, setEvents] = useState([])
    const getAllEvents = async () => {
        try {
            const allEvents = await axios.get('https://youth-affairs-nowshera-backend-production.up.railway.app/events/all-events');

            setEvents(allEvents.data);
            console.log(allEvents.data)
            console.log(allEvents)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllEvents();
    }, []);

    useEffect(() => {

    }, [events]);
    return (
        <>

            <Navbar />
            <div className="container mt-3 ">
                <div className="row">
                    <div className="col-12 text-center text-success ">
                        <h1 className='event_heading fw-bold'>Our Events</h1>
                        {/* <hr className='custom_event_hr ' /> */}
                        <div className='smooth-line'></div>
                    </div>
                </div>

                {/* Cards ... */}

                <div className="row d-flex justify-content-center align-items center">
                    {events.length === 0 ? (<Loader />) :
                        (events.map((event) => {
                            return (
                                <div className="col-lg-4 col-12 mb-5" key={event._id}>
                                    <div class="grid__item">
                                        <div class="card "><img class="card__img" src={`https://youth-affairs-nowshera-backend-production.up.railway.app/images/${event.image}`}
                                            alt="img here..." />
                                            <div class="card__content">
                                                <h1 class="card__header word-wrap">{event.title.slice(0, 28)}...</h1>
                                                <p class="card__text ">{event.description.slice(0, 80)}...</p><span className='badge text-bg-success mb-2'>{event.categories}</span>

                                                <button class="card__btn"><Link to={`/sep/${event._id}`} style={{ textDecoration: 'none' , color: '#ff6b6b'}}>Explore</Link> <span>&rarr;</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        }))
                    }
                </div>
            </div>

            {events.length === 0 ? " " : (<FooterPage />)}
        </>
    )
}
