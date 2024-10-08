import React from 'react'
import SlideUp from '../animations/slideUp'
import { TypeAnimation } from 'react-type-animation'

const Banner = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-sm-12">
                            {/*  START HERO DESIGN AREA  */}
                            <SlideUp>
                                <div className="hero-content rmb-25 text-center">
                                    <h1>I'm <span>SAHAN</span> BANDARA</h1>
                                    <div className="job" >
                                        {/* <span>UI/UX Designer</span><span>Frontend Developer</span> */}

                                        <div>
                            <TypeAnimation
                                sequence={[
                               
                                'UI/UX DESIGNER',
                                1000, 
                                'BUSINESS ANALYST',
                                 1000,
                               
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block', fontFamily:'sans-serif' }}
                            repeat={Infinity}
                            />
                            </div>
                                    </div>
                                           



                                </div>
                            </SlideUp>
                            
                            {/*  / END HERO DESIGN AREA  */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner