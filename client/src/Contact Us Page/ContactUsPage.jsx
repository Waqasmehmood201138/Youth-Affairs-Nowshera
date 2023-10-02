import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import '../Contact Us Page/ContactUsPage.css'
import FooterPage from '../Footer Page/FooterPage'
import { toast } from 'react-toastify'
export default function ContactUsPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:5000/api/user/post-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    message: message
                })
            })
            const data = await response.json();

            toast.success("Message sent successfully")

        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <>
            <Navbar />
            <div className="container mt-5 custom_contact">
                <div className="row">
                    <div className="col-lg-6 mt-5 col-sm-12">
                        <h1 className='fw-bold contact_head'>Main Office:</h1>
                        <p className='mt-5 contact_address'><strong>Address:</strong> Sawal Colony, Tehsil Road, Nowshera, Pakistan</p>
                        <p className='contact_address'><strong>Phone:</strong> 0923 644443</p>
                        <p className='contact_address'><strong>Email:</strong> <Link target='_blank' to="mailto:waqmeh456@gmail.com">dyonsrkpk@gmail.com</Link></p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <form action="" className='d-flex flex-column ' onSubmit={handleSubmit}>
                            <input type="text" placeholder='Name' name='name' className='custom-contact-input mt-5' onChange={e => { setName(e.target.value) }} />
                            <input type="email" placeholder='Email' name='email' className='custom-contact-input mt-4' onChange={e => { setEmail(e.target.value) }} />
                            <input type="text" placeholder='Phone' name='phone' className='custom-contact-input mt-4' onChange={e => { setPhone(e.target.value) }} />
                            <textarea type="text" placeholder='Message' name='message' className='custom-contact-input mt-4' onChange={e => { setMessage(e.target.value) }} />
                            <button className='button p-1 bg-custom text-white mt-3 rounded-3 mb-4' type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <FooterPage />
        </>
    )
}
