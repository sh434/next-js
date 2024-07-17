import React from 'react'

const contactUs = () => {
    return (
        <section className="contact spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                        <div className="contact__widget">
                            <span className="icon_phone" />
                            <h4>Phone</h4>
                            <p>+01-3-8888-6868</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                        <div className="contact__widget">
                            <span className="icon_pin_alt" />
                            <h4>Address</h4>
                            <p>60-49 Road 11378 New York</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                        <div className="contact__widget">
                            <span className="icon_clock_alt" />
                            <h4>Open time</h4>
                            <p>10:00 am to 23:00 pm</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                        <div className="contact__widget">
                            <span className="icon_mail_alt" />
                            <h4>Email</h4>
                            <p>hello@colorlib.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default contactUs