import React from 'react'
import {AiFillEdit} from 'react-icons/ai'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

export default function AdminEventTablePage() {
    return (
        <>
            <Navbar />
            <div className="container mt-4 " style={{fontFamily: 'Poppins'}}>
                <div className="row">
                    <div className="col-12">
                        <h2 className='text-success'>Admin Panel | Events </h2>
                        <hr />
                    </div>
                    <div className="col-12">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    
                                    <th>Title</th>
                                    <th>Categories</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, expedita?</td>
                                    <td><span class="badge text-bg-success mt-2">coming soon</span></td>
                                    <td>
                                        <Link to="/" className='btn  fs-6'><AiFillEdit/></Link>
                                        <Link to="/" className='btn  ms-1'><RiDeleteBin6Fill/></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, expedita?</td>
                                    <td><span class="badge text-bg-info mt-2">open</span></td>
                                    <td>
                                        <Link to="/" className='btn  fs-6'><AiFillEdit/></Link>
                                        <Link to="/" className='btn  ms-1'><RiDeleteBin6Fill/></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, expedita?</td>
                                    <td><span class="badge text-bg-success mt-2">coming soon</span></td>
                                    <td>
                                        <Link to="/" className='btn  fs-6'><AiFillEdit/></Link>
                                        <Link to="/" className='btn  ms-1'><RiDeleteBin6Fill/></Link>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
