import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import '../Counter Section/CounterSection.css'

export default function CounterSection() {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <>

            <div className="container mt-4 custom_counter_container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className=' fw-bold'>Our Achievements</h1>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-12 p-5 bg-success border border-right-warning ">

                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <>
                                <h1 className='text-center text-warning fw-bold'>
                                    {counterOn && <CountUp start={0} end={300} duration={4} delay={0} />}
                                    + </h1>
                            </>
                        </ScrollTrigger>

                        <h2 className='text-center text-white fw-bold'>Students</h2>
                    </div>

                    <div className="col-lg-3 col-12 p-5 bg-success border border-right-warning">

                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <>
                                <h1 className='text-center text-warning fw-bold'>
                                    {counterOn && <CountUp start={0} end={212} duration={4} delay={0} />}
                                    + </h1>
                            </>
                        </ScrollTrigger>

                        <h2 className='text-center text-white fw-bold'>Students</h2>
                    </div>
                    <div className="col-lg-3 col-12 p-5 bg-success border border-right-warning">

                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <>
                                <h1 className='text-center text-warning fw-bold'>
                                    {counterOn && <CountUp start={0} end={124} duration={4} delay={0} />}
                                    + </h1>
                            </>
                        </ScrollTrigger>

                        <h2 className='text-center text-white fw-bold'>Students</h2>
                    </div>
                    <div className="col-lg-3 col-12 p-5 bg-success border border-right-warning">

                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <>
                                <h1 className='text-center text-warning fw-bold'>
                                    {counterOn && <CountUp start={0} end={525} duration={4} delay={0} />}
                                    + </h1>
                            </>
                        </ScrollTrigger>

                        <h2 className='text-center text-white fw-bold'>Students</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
