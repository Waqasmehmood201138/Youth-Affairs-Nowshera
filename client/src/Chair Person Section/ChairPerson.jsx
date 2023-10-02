import React from 'react'
import '../Chair Person Section/ChairPerson.css'
import chairImg from '../Assets/chairsample.jpeg'

export default function ChairPerson() {
    return (
        <>
            <div className="container mt-5 custom_counter_container">
                <div className="row ">
                    <div className="col-12">
                        <h1 className=' fw-bold text-success text-center mt-5 mb-5'>Our Chair Persons</h1>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row ">

                    <div className="col-lg-4 col-sm-12 d-flex justify-content-center align-items-center flex-column ">
                        <img className='chair_img' src={chairImg} alt="" />
                        <h3 className='chair_name p-3'>John Doe</h3>
                        <p className='text-center chair_aim'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt</p>
                    </div>
                    <div className="col-lg-4 col-sm-12  d-flex justify-content-center align-items-center flex-column border-start border-end border-success border-3 chair_col">
                        <img className='chair_img ' src={chairImg} alt="" />
                        <h3 className='chair_name p-3'>John Doe</h3>
                        <p className='text-center chair_aim'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt!</p>
                    </div>
                    <div className="col-lg-4 col-sm-12 d-flex justify-content-center align-items-center flex-column">
                        <img className='chair_img' src={chairImg} alt="" />
                        <h3 className='chair_name p-3'>John Doe</h3>
                        <p className='text-center chair_aim'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt!</p>
                    </div>

                </div>
            </div>
        </>
    )
}
