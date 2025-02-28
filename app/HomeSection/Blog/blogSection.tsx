import React from 'react'
import "../Blog/blog.css"

const blogSection = () => {
    return (
        <section className="from-blog spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title from-blog__title">
                            <h2 className="text-center">New Blog Posts</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="blog__item">
                            <div className="blog__item__pic">
                                <img src="/img/blog/blog-1.jpg" alt="" />
                            </div>
                            <div className="blog__item__text">
                                <ul>
                                    <li>
                                        <i className="bi bi-calendar" /> May 4,2019
                                    </li>
                                    <li>
                                        <i className="bi bi-chat" /> 5
                                    </li>
                                </ul>
                                <h5>
                                    <a href="#">Cooking tips make cooking simple</a>
                                </h5>
                                <p>
                                    Sed quia non numquam modi tempora indunt ut labore et dolore
                                    magnam aliquam quaerat{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="blog__item">
                            <div className="blog__item__pic">
                                <img src="/img/blog/blog-2.jpg" alt="" />
                            </div>
                            <div className="blog__item__text">
                                <ul>
                                    <li>
                                        <i className="fa fa-calendar-o" /> May 4,2019
                                    </li>
                                    <li>
                                        <i className="fa fa-comment-o" /> 5
                                    </li>
                                </ul>
                                <h5>
                                    <a href="#">6 ways to prepare breakfast for 30</a>
                                </h5>
                                <p>
                                    Sed quia non numquam modi tempora indunt ut labore et dolore
                                    magnam aliquam quaerat{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="blog__item">
                            <div className="blog__item__pic">
                                <img src="/img/blog/blog-3.jpg" alt="" />
                            </div>
                            <div className="blog__item__text">
                                <ul>
                                    <li>
                                        <i className="fa fa-calendar-o" /> May 4,2019
                                    </li>
                                    <li>
                                        <i className="fa fa-comment-o" /> 5
                                    </li>
                                </ul>
                                <h5>
                                    <a href="#">Visit the clean farm in the US</a>
                                </h5>
                                <p>
                                    Sed quia non numquam modi tempora indunt ut labore et dolore
                                    magnam aliquam quaerat{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default blogSection