import React from 'react'
import '../Loader/Loader.css'

export default function Loader() {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center" style={{height: '60vh'}}>
                <div className="row ">
                    <div className="col-12 text-center">
                        <div class="ping"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
