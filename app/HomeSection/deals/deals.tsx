import React from 'react'
import "./deals.css"

const deals = () => {
    return (
        <section
            className="ftco-section img"
            style={{ backgroundImage: "url(/img/bg_3.jpg)" }}
        >
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-md-6 heading-section ftco-animate deal-of-the-day ftco-animate">
                        <span className="subheading">Best Price For You</span>
                        <h2 className="mb-4">Deal of the day</h2>
                        <p>
                            Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia
                        </p>
                        <h3>
                            <a href="#">Spinach</a>
                        </h3>
                        <span className="price">
                            $10 <a href="#">now $5 only</a>
                        </span>
                        <div id="timer" className="d-flex mt-5">
                            <div className="time" id="days" />
                            <div className="time pl-3" id="hours" />
                            <div className="time pl-3" id="minutes" />
                            <div className="time pl-3" id="seconds" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default deals