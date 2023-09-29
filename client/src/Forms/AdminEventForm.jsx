import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './style.css'
import Navbar from '../Navbar/Navbar.jsx'
import { toast  } from 'react-toastify';
const AdminEventForm = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')


  const [formData, setFormData] = useState(new FormData());
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
     
      const response = await axios.post("http://localhost:5000/events/add-event", formData,
     );
    
      if (response.status ===200) {
        console.log(response); 
        toast.success('Login Successfully');
        navigate('/')
      } 
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  return (
<>
        
     {/* <Navbar /> */}
        
<div className="container-fluid bg-light">
        <div className="row custom-hight  d-flex justify-content-center align-content-center">
            <div className="col-lg-8 col-11 mb-lg-0 mb-5 bg-white text-center p-5 shadow">
                  <h4 className='fw-bold'>Enter Event Title</h4> 
                
                <form action="" className='d-flex flex-column '  onSubmit={handleSubmit} encType='multipart/form-data'>
                    <input type="text" placeholder='Enter Event Title' name='name' className='custom-input mt-5' onChange={((e)=>setTitle(e.target.value))}/>
                    <input type="text" placeholder='Enter Description' name='name' className='custom-input mt-5'  onChange={((e)=>setDescription(e.target.value))}/>
                    {/* <input type="text" placeholder='Enter Description' name='name' className='custom-input mt-5'  onChange={((e)=>setCategory(e.target.value))}/> */}
                    <select className='custom-input mt-5' onChange={((e)=>setCategory(e.target.value))}>
                        <option >Select Category</option>
                        <option value='open'>Opened</option>
                        <option value='comming-soon'>Comming Soon</option>
                
                    </select>
                    <input type="file" placeholder='Enter Description' name='image' accept=".png, .jpg, .jpeg" className='custom-input mt-5'  onChange={handleFileUpload}/>
                       <div className='d-inline-block'>
                       <button className=' button p-1 bg-custom text-white mt-5 rounded-5  px-5 p-2' type='submit'>Add Event</button>

                       </div>
                </form>
            </div>
        </div>
    </div>
</>
  
  )
}
export default AdminEventForm;