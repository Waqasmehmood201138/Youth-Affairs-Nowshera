import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import './style.css'
import Navbar from '../Navbar/Navbar.jsx'
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom'


const AdminEventForm = () => {



  const navigate = useNavigate()
  const location = useLocation()
  const [id, setId] = useState(location.state._id)
  const [title, setTitle] = useState(location.state.title)
  const [description, setDescription] = useState(location.state.description)
  const [category, setCategory] = useState(location.state.categories)
  const [date, setDate] = useState(location.state.time)
  const [image, setImage] = useState(location.state.image)
  console.log(location.state.image)

  function handleFileUpload(event) {
    const file = event.target.files[0];

    setImage(file)
  }


  const handleSubmit = async (e) => {
    console.log(image)
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('categories', category);
      formData.append('image', image);
      formData.append('time', date);

      const response = await axios.post(`http://localhost:5000/events/update-event/${id}`, formData,
      );

      if (response.status === 200) {
        console.log(response);
        toast.success('Event Added-successfully');
        navigate('/admin-dashboard')
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <>

      <div className="container-fluid bg-light">
        <div className="row custom-hight  d-flex justify-content-center align-content-center">
          <div className="col-lg-8 col-11 mb-lg-0 mb-5 bg-white text-center p-5 shadow">
            <h4 className='fw-bold'>Update Event Details</h4>

            <form action="" className='d-flex flex-column ' onSubmit={handleSubmit} encType='multipart/form-data'>
              <input type="text" value={title} className='custom-input mt-5' name='id' onChange={e => setTitle(e.target.value)} />
              <input type="text" value={description} className='custom-input mt-5' onChange={((e) => setDescription(e.target.value))} />
              <input type="text" value={date} className='custom-input mt-5' onChange={((e) => setDate(e.target.value))} />
              <select className='custom-input mt-5' value={category} onChange={((e) => setCategory(e.target.value))}>
                <option >Select Category</option>
                <option value='open'>Opened</option>
                <option value='comming-soon'>Coming Soon</option>

              </select>
              {/* <input type="file"  name='image' accept=".png, .jpg, .jpeg" className='custom-input mt-5'   onChange={handleFileUpload}/> */}
              <div className='d-inline-block'>
                <button className=' button p-1 bg-custom text-white mt-5 rounded-5  px-3 p-2' type='submit'>Update Event</button>
                <Link to="/admin-dashboard" className="btn btn-danger ms-1 rounded-5">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}
export default AdminEventForm;