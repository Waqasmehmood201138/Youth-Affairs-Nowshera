import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './style.css'
import Navbar from '../Navbar/Navbar.jsx'
import { toast } from 'react-toastify';



const AdminEventForm = () => {



  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [image, setImage] = useState('')

  function handleFileUpload(event) {
    const file = event.target.files[0];


    setImage(file)
  }
  const handleSubmit = async (e) => {
    // console.log(image)
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('categories', category);
      formData.append('image', image);
      formData.append('time', date);

      const response = await axios.post("http://localhost:5000/events/add-event", formData,
      );

      if (response.status === 200) {
        // console.log(response);
        toast.success('Event Added-successfully');
        navigate('/')
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message);
    }
  }
  return (
    <>

      <Navbar />

      <div className="container-fluid bg-light">
        <div className="row custom-hight  d-flex justify-content-center align-content-center">
          <div className="col-lg-7 col-11 mb-lg-0 mb-5 bg-white text-center p-1 rounded shadow">
            <h4 className='fw-bold mt-2'>Enter New Event Details</h4>

            <form action="" className='d-flex flex-column p-5' onSubmit={handleSubmit} encType='multipart/form-data'>
              <input type="text" placeholder='Enter Event Title' className='custom-input mt-4' onChange={((e) => setTitle(e.target.value))} />
              <input type="text" placeholder='Enter Description' className='custom-input mt-4' onChange={((e) => setDescription(e.target.value))} />
              <input type="text" placeholder='Enter Event Date and Time' className='custom-input mt-4' onChange={((e) => setDate(e.target.value))} />
              <select className='custom-input mt-4' onChange={((e) => setCategory(e.target.value))}>
                <option >Select Category</option>
                <option value='open'>Opened</option>
                <option value='comming-soon'>Coming Soon</option>

              </select>
              <input type="file" placeholder='Enter Description' name='image' accept=".png, .jpg, .jpeg" className='custom-input mt-3 p-1' onChange={handleFileUpload} />
              <div className='d-inline-block'>
                <button className=' button p-1 bg-custom text-white mt-5 rounded-5  px-5 p-2 mb-2' type='submit'>Add Event</button>
                <Link to="/admin-dashboard" className=' button btn btn-danger ms-1  text-white rounded-5  px-5 p-2' style={{ textDecoration: 'none' }}>Back</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}
export default AdminEventForm;