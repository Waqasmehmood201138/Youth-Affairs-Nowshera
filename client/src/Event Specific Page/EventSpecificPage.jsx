import React,{useState,useEffect} from 'react'
import {FaCalendarAlt} from 'react-icons/fa'
import Navbar from '../Navbar/Navbar'
import '../Event Specific Page/EventSpecifcPage.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FooterPage from '../Footer Page/FooterPage';
import Loader from '../Loader/Loader';
export default function EventSpecificPage() {
    const { id } = useParams();
    const [event, setEvent] = useState([])
    const getAllEvents = async () => {
        try {
            console.log(id)
            const Event = await axios.get(`https://youth-affairs-nowshera-backend-production.up.railway.app/events/single-event/${id}`);
             console.log(event)
            setEvent(Event.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllEvents();
    }, []);
    return (
        <>
        <Navbar/>
        {(event.length === 0) ? (<Loader/>):(
        <div className="container-fluid bg-light vh-100">
            <div className="container pt-4">
                <div className="row mt-4">
                    <div className="col-lg-6 col-12 custom_sep_img_div">
                        <img className='border border-success border-3 rounded custom_sep_img' src={`https://youth-affairs-nowshera-backend-production.up.railway.app/images/${event.image}`} width="550" alt="" />
                    </div>
                    <div className="col-lg-6 col-12 custom_sep_details">
                        <p className=''><FaCalendarAlt/><span className='ms-2'>{event.time}</span> <span className='badge text-bg-success mt-2 ms-3'>{event.categories}</span></p>
                        
                        <h2 className='border-start border-success border-4 p-2 custom_sep_head'>{event.title}</h2>
                        <p className='custom_sep_desc'>{event.description}</p>
                    </div>
                </div>
            </div>
            </div>)}
            {event.length === 0 ? " " : (<FooterPage />)}
            
        </>
    )
}
