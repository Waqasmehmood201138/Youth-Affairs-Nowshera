import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './style.css'
import Navbar from '../Navbar/Navbar.jsx'
import { toast  } from 'react-toastify';
const LoginForm = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { 
        email: email,
        password: password
      };

      const response = await axios.post("http://localhost:5000/api/user/login", data);
    
      if (response.status ===200) {
        console.log(response.data);
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
        
     <Navbar />
        
<div className="container-fluid bg-light">
        <div className="row custom-hight  d-flex justify-content-center align-content-center">
            <div className="col-lg-3 col-11 mb-lg-0 mb-5 bg-white text-center p-5 shadow">
                  <h4 className='fw-bold'>Sign-In</h4> 
                
                  
                <form action="" className='d-flex flex-column '  onSubmit={handleSubmit}>
                <input type="text" placeholder='Email' name='name' className='custom-input mt-5' onChange={((e)=>setEmail(e.target.value))}/>
                    <input type="text" placeholder='Password' name='name' className='custom-input mt-5'  onChange={((e)=>setPassword(e.target.value))}/>
                      <button className=' button p-1 bg-custom text-white mt-5 rounded-5 ' type='submit'>Login</button>
                      <span className='fs-6 text-muted pt-3'>Don't have an account. <Link className='theme-color fw-semibold text-decoration-none' to='/signup'>Signup</Link></span>
                </form>
            </div>
        </div>
    </div>
</>
  
  )
}
export default LoginForm;