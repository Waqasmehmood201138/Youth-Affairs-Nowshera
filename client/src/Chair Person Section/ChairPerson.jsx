import React from 'react'
import '../Chair Person Section/ChairPerson.css'
import chairImg1 from '../Assets/ch-5.jpeg'
import chairImg2 from '../Assets/ch-3.jpeg'
import chairImg3 from '../Assets/cp-2.jpeg'

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
                        <img className='chair_img' src={chairImg1} alt="" />
                        <h3 className='chair_name p-3'>Proffessor</h3>
                        <p className='text-center chair_aim'>The youth office empowers and supports local youth through diverse programs.</p>
                    </div>
                    <div className="col-lg-4 col-sm-12  d-flex justify-content-center align-items-center flex-column border-start border-end border-success border-3 chair_col">
                        <img className='chair_img ' src={chairImg2} alt="" />
                        <h3 className='chair_name p-3'>Elon Musk</h3>
                        <p className='text-center chair_aim'>We're dedicated to nurturing leadership skills and personal growth</p>
                    </div>
                    <div className="col-lg-4 col-sm-12 d-flex justify-content-center align-items-center flex-column">
                        <img className='chair_img' src={chairImg3} alt="" />
                        <h3 className='chair_name p-3'>Parkar</h3>
                        <p className='text-center chair_aim'>A hub of inspiration, connecting youth with opportunities to make a difference.</p>
                    </div>

                </div>
            </div>
        </>
    )
}
