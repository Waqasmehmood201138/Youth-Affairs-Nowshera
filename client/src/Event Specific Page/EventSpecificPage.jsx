import React,{useState,useEffect} from 'react'
import img1 from '../Assets/c_7.jpg'
import Navbar from '../Navbar/Navbar'
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function EventSpecificPage() {
    const { id } = useParams();
    const [event, setEvent] = useState([])
    const getAllEvents = async () => {
        try {
            console.log(id)
            const Event = await axios.get(`http://localhost:5000/events/single-event/${id}`);
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
        <div className="container-fluid bg-light vh-100">
            <div className="container  pt-4">
                <div className="row">
                    <div className="col-6">
                        <img src={`http://localhost:5000/images/${event.image}`} width="550" alt="" />
                    </div>
                    <div className="col-6">
                        <h2 className='border-start border-success border-4 p-2'>{event.title}</h2>
                        <p className='muted-text'>{event.description}</p>
                        <p></p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
