import React from 'react'
import { RiArrowRightUpLine, RiDownloadLine, RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine } from '@remixicon/react'
import profile_img from "../../assets/images/about/abt.png"
import SlideUp from '../animations/slideUp'
import cv from '../../assets/images/about/QA_sahan.pdf'
import { TypeAnimation } from 'react-type-animation'

const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    {/*  START ABOUT IMAGE DESIGN AREA  */}
                    <div className="col-lg-5">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile_img} alt="About Me" />
                                <h2>SAHAN BANDARA</h2>
                                <div className="about-btn btn-one text-center">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse"></div>
                                </div>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><a href="https://web.facebook.com/sahan.bandara.7330"><i><RiFacebookCircleFill size={20} /></i></a></li>
                                        {/* <li><a href=""><i><RiTwitterXLine size={20} /></i></a></li> */}
                                        <li><a href="https://www.linkedin.com/in/sahan-bandara-973a8a227/"><i><RiLinkedinFill size={20} /></i></a></li>
                                        <li><a href="https://github.com/Sahan251"><i><RiGithubLine size={20} /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/*  END ABOUT IMAGE DESIGN AREA  */}
                    {/*  START ABOUT TEXT DESIGN AREA  */}
                    <div className="col-lg-7">
                        <div className="about-content-part">
                            <SlideUp>
                                <h2>
                                    Hello, I’m Sahan Bandara <span className='hover-effect'>UI/UX Designer and Business Analyst in Sri Lanka </span>
                                    


                                </h2>
                                <div className="hero-btns">
                                   <a href={cv} download='cv'className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i></a>
                                </div>
                            </SlideUp>
                            <SlideUp>
                                <ul className="list-style-one two-column">
                                    {/* <li><i><RiArrowRightUpLine size={18} /></i> Logo Design</li> */}
                                    {/* <li><i><RiArrowRightUpLine size={18} /></i> Social Marketing</li> */}
                                    {/* <li><i><RiArrowRightUpLine size={18} /></i> Branding Identity</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Digital Marketing</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Web Design</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Product Design</li> */}
                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/*  END ABOUT TEXT DESIGN AREA  */}
                </div>
            </div>
        </section>
    )
}

export default About