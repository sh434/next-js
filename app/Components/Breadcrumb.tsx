
import React from 'react'
import "../Styles/Breadcrumb.css"


const Breadcrumb = () => {

    return (
        <section className="breadcrumb-section set-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2>Blog</h2>
                            <div className="breadcrumb__option">
                                <a href="./index.html">Home</a>
                                <span>Blog</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Breadcrumb