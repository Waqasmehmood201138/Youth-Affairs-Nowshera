import React, { useState, useEffect } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import Navbar from '../Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import Loader from '../Loader/Loader'
export default function AdminEventTablePage() {
    const [title, setTitle] = useState([])
    const [id, setId] = useState()
    const handleDelete = async (id) => {
        const response = await axios.delete(`http://localhost:5000/events/delete-event/${id}`)
        console.log(response)
        if (response.status === 200) {
            toast.success('Event deleted successfully')
            const indexToDelete = title.findIndex(event => event.id === id);

            // If the event is found, remove it from the title state
            if (indexToDelete !== -1) {
                const updatedTitle = [...title];
                updatedTitle.splice(indexToDelete, 1);
                setTitle(updatedTitle);
            }
        }

        else {
            toast.error('item already deleted')
        }
        getTitleData();
    }
    const navigate = useNavigate()
    console.log('hi')
    const getTitleData = async () => {

        try {
            const response = await fetch('http://localhost:5000/events/all-events/');
            const data = await response.json();

            setTitle(data);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getTitleData();
    }, [])

    const handleEdit = (element) => {

        navigate('/test', {

            state: element
        })

    }
    return (
        <>
            <Navbar />
            <div className="container mt-4 " style={{ fontFamily: 'Poppins' }}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <h2 className='text-success fw-bold'>Admin Panel | Events</h2>
                        <Link to="/add-event" className='btn btn-success mb-2'>Add New Events  </Link>
                    </div>
                    <hr />
                    <div className="col-12">
                        <table class="table table-striped">

                            <thead>

                                <tr>
                                    <th>Title</th>
                                    <th>Categories</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(title.length === 0) ?

                                    <td colSpan={5}><Loader /></td>
                                    : (
                                        title.map((element) => {
                                            return (
                                                <tr>
                                                    <td className='mt-2'>{element.title}</td>
                                                    <td><span class="badge text-bg-success mt-2">{element.categories}</span></td>
                                                    <td>
                                                        <button onClick={e => handleEdit(element)} className='btn  fs-6'><AiFillEdit /></button>
                                                        <Link className='btn  ms-1' onClick={e => handleDelete(element._id)}><RiDeleteBin6Fill /></Link>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </>
    )
}
