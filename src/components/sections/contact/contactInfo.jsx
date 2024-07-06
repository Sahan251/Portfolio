import React from 'react'
import { RiMapPinLine, RiPhoneLine, RiMailLine } from '@remixicon/react'


const ContactInfo = () => {
    return (
        <div className="col-lg-4">
            <div className="contact-content-part  wow fadeInUp delay-0-2s">

                <div className="single-contact wow fadeInUp" data-wow-delay=".2s">
                    <div className="contact-icon">
                        <i><RiMapPinLine size={20} /></i>
                    </div>
                    <h2>My Location</h2>
                    <p>Homagama , Sri Lanka</p>
                </div>


                <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                    <div className="contact-icon">
                        <i><RiPhoneLine size={20} /></i>
                    </div>
                    <h2>Contact number:</h2>
                    <p>+94 767985470</p>
                </div>


                <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                    <div className="contact-icon">
                        <i><RiMailLine size={20} /></i>
                    </div>
                    <h2>Email us:</h2>
                    <p>sahanudayanga64@gmail.com</p>
                </div>

            </div>
        </div>
    )
}

export default ContactInfo