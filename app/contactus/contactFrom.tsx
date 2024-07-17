import React from 'react'
import  "./contactUs.css" 

const contactFrom = () => {
    return (
        <div className="contact-form spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="contact__form__title">
                            <h2>Leave Message</h2>
                        </div>
                    </div>
                </div>
                <form action="#">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <input type="text" placeholder="Your name" />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <input type="text" placeholder="Your Email" />
                        </div>
                        <div className="col-lg-12 text-center">
                            <textarea placeholder="Your message" defaultValue={""} />
                            <button type="submit" className="site-btn">
                                SEND MESSAGE
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default contactFrom