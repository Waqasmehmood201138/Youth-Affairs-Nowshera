import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import '../Contact Us Page/ContactUsPage.css'
import FooterPage from '../Footer Page/FooterPage'

export default function ContactUsPage() {
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
                        <form action="" className='d-flex flex-column '  >
                            <input type="text" placeholder='Name' name='name' className='custom-contact-input mt-5' />
                            <input type="email" placeholder='Email' name='email' className='custom-contact-input mt-4' />
                            <input type="text" placeholder='Phone' name='phone' className='custom-contact-input mt-4' />
                            <textarea type="text" placeholder='Message' name='message' className='custom-contact-input mt-4' />
                            <button className='button p-1 bg-custom text-white mt-3 rounded-3'  type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
           <FooterPage/>
        </>
    )
}
