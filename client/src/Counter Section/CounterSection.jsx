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
                    <div className="col-12">
                        <h1 className=' fw-bold text-success custom_counter_head'>Our Achievements</h1>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-2">
                <div className="row">
                    <div className="col-lg-3 col-12 p-5 bg-success border border-right-warning">

                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <>
                                <h1 className='text-center text-warning fw-bold'>
                                    {counterOn && <CountUp start={30} end={512} duration={4} delay={0} />}
                                    + </h1>
                            </>
                        </ScrollTrigger>

                        <h2 className='text-center text-white fw-bold'>Students</h2>
                    </div>

                    <div className="col-lg-3 col-12 p-5 bg-success border border-right-warning">

                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <>
                                <h1 className='text-center text-warning fw-bold'>
                                    {counterOn && <CountUp start={12} end={112} duration={4} delay={0} />}
                                    + </h1>
                            </>
                        </ScrollTrigger>

                        <h2 className='text-center text-white fw-bold'>Students</h2>
                    </div>
                    <div className="col-lg-3 col-12 p-5 bg-success border border-right-warning">

                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <>
                                <h1 className='text-center text-warning fw-bold'>
                                    {counterOn && <CountUp start={5} end={124} duration={4} delay={0} />}
                                    + </h1>
                            </>
                        </ScrollTrigger>

                        <h2 className='text-center text-white fw-bold'>Talent Fest</h2>
                    </div>
                    <div className="col-lg-3 col-12 p-5 bg-success border border-right-warning">

                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <>
                                <h1 className='text-center text-warning fw-bold'>
                                    {counterOn && <CountUp start={13} end={96} duration={4} delay={0} />}
                                    + </h1>
                            </>
                        </ScrollTrigger>

                        <h2 className='text-center text-white fw-bold'>Event Organized</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
