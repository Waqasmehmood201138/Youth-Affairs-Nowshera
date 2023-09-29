import React from 'react'
import img1 from '../Assets/c_7.jpg'
import Navbar from '../Navbar/Navbar'

export default function EventSpecificPage() {
    return (
        <>
        <Navbar/>
        <div className="container-fluid bg-light vh-100">
            <div className="container  pt-4">
                <div className="row">
                    <div className="col-6">
                        <img src={img1} width="550" alt="" />
                    </div>
                    <div className="col-6">
                        <h2 className='border-start border-success border-4 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde cupiditate esse!</h2>
                        <p className='muted-text'>Lorem, ipsum dolor.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quidem aperiam qui voluptatem? Nulla consectetur nihil velit magnam repudiandae blanditiis ab earum recusandae deleniti!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quidem aperiam qui voluptatem? Nulla consectetur nihil velit magnam repudiandae blanditiis ab earum recusandae deleniti!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quidem aperiam qui voluptatem? Nulla consectetur nihil velit magnam repudiandae blanditiis ab earum recusandae deleniti!
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
