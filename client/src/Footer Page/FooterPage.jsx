import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { RiTwitterXFill } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../Footer Page/FooterPage.css'

export default function FooterPage() {
    return (
        <>
            <div className="container-fluid bg-dark p-2 custom_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
                            <h5 className='text-white'>&copy; Youth Office Nowshera</h5>
                        </div>
                        <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
                            <h5 className='text-white ms-3'>
                                <span className='me-4'><Link to='https://www.facebook.com/YouthNowshera' target='_blank' className='text-white icon_footer'><BsFacebook className='icon_footer'/></Link></span>
                                <span className='me-4 icon_footer'><RiTwitterXFill /></span>
                                <span className='me-4 icon_footer'><BsInstagram /></span>
                                <span className='icon_footer'><BsYoutube /></span>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
