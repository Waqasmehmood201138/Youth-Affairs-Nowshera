import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './gallery.css'
const GalleryPage = () => {
  const home = ['/gallery/t2.jpg', '/gallery/d2.jpg', '/gallery/s2.jpg', '/gallery/l2.jpg', '/gallery/t3.jpg']
  const [category, setCategory] = useState(home)
  const [heading, setHeading] = useState('Ceremonies')
  const talent = ['/gallery/t1.jpg', '/gallery/t2.jpg', '/gallery/t3.jpg', '/gallery/t4.jpg', '/gallery/t5.jpg']
  const carear = ['/gallery/l1.jpg', '/gallery/l2.jpg', '/gallery/l3.jpg', '/gallery/t4.jpg']
  const drugs = ['/gallery/d1.jpg', '/gallery/d2.jpg', '/gallery/d4.jpg', '/gallery/d5.jpg']
  const seerat = ['/gallery/s1.jpg', '/gallery/s2.jpg', '/gallery/s3.jpg', '/gallery/s4.jpg'];


  return (
    <>
      <Navbar />

      <div className="container  gallery">
        <h1 className='fw-bold mt-4 text-center text-success'>Our Organization's Moments</h1> <div className='smooth-line'></div>
        <div className="row d-flex justify-content-between">

          <div className="col-lg-4 col-4 ">
            <div className="fixed ">
              <h3 className='cate'>Categories</h3><div className='smooth-innerline'></div>

              <li onClick={() => {
                setCategory(talent);
                setHeading('Talent Fest Ceremony');
              }}>Talent Fest</li>
              <li onClick={() => {
                setCategory(carear);
                setHeading('Carear Counseling  Ceremony');
              }}>Carear Counseling</li>
              <li onClick={() => {
                setCategory(seerat);
                setHeading('Seerat u Nabi SAW Ceremony');
              }}>Seerat U Nabi SAW</li>
              <li onClick={() => {
                setCategory(drugs);
                setHeading('Drugs Awareness Ceremony');
              }}>Drugs Awareness</li>

            </div>
          </div>

          <div className="col-lg-8 col-7">
            <h3 className='fw-bold'>{heading}</h3>
            <div className="image-container ">
              <h3></h3>
              {category.map((e, index) => {
                return (
                  <div key={index} className=''>
                    <img src={e} className='img-fluid image' alt="img here..." />

                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default GalleryPage