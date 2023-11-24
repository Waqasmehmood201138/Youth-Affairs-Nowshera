import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../Home Event Section/HomeEventSectionPage.css'

export default function HomeEventSectionPage() {
    const [events, setEvents] = useState([])
    const getAllEvents = async () => {
        try {
            const allEvents = await axios.get('https://youth-affairs-nowshera-backend-production.up.railway.app/events/all-events');
              const totalevents = allEvents.data.length;
            setEvents(allEvents.data.slice(totalevents-3,totalevents));
            console.log(events);
        
        } catch (error) {
            console.error(error);
        }
        
    };
    useEffect(() => {
        getAllEvents();
    }, []);
    return (
        <>
            <div className="container mt-5 custom_counter_container">
                <div className="row">
                    <div className="col-12">
                        <h1 className=' fw-bold text-success text-center mt-5'>Latest Events</h1>
                    </div>
                </div>
            </div>

            <div className="container mt-4 d-flex justify-content-center align-items center">
                <div className="row">
                {events.map((event)=>{
                    return(
                        <div className="col-lg-4 col-12 mb-2">
                        <div class="grid__item__home">
                            <div class="card__home"><img class="card__img__home" src={`https://youth-affairs-nowshera-backend-production.up.railway.app/images/${event.image}`}
                                alt="img here..." />
                                <div className="overlay">

                                    <div className="overlay-text"><Link to={`/sep/${event._id}`} className='btn btn-success p-2'>See Details</Link></div>

                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}

                </div>
            </div>

            <div className="container mt-4">
                <div className="row d-flex justify-content-center " >
                    <div className="col-lg-3 col-10 text-center">
                        <button class="card__btn bg-success text-white  p-2 "><Link to="/events" style={{ textDecoration: 'none' }} className='text-white'>Explore All Events</Link> <span>&rarr;</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}
