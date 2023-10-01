// src/components/Map.js
import React from "react";

function Map() {

    return <>
        <div className="container mt-5 custom_counter_container">
            <div className="row ">
                <div className="col-12">
                    <h1 className=' fw-bold text-success text-center mt-5 mb-3'>Find Us Here</h1>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 p-0">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461240.0316292181!2d71.4612369373258!3d34.02933161118297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ded3b219877ac1%3A0x6c180b852796d6c8!2sDistrict%20Youth%20Affairs%20Office%20Nowshera!5e0!3m2!1sen!2s!4v1696187195910!5m2!1sen!2s" height="300" style={{ border: "0", width: '100%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>

    </>
}

export default Map;
