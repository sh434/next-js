
"use client"
import React,{useEffect} from 'react';
import SetBakgroundImage from '@/app/Utils/BakgroundImage';
import "../FeatureProduct/Feature.css";

const Feature = () => {
    useEffect(() => {
        SetBakgroundImage('.set-bg');
    }, []);
    return (
     
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2 className='text-center'>Featured Product</h2>
                        </div>
                        <div className="featured__controls">
                            <ul>
                                <li className="active" data-filter="*">
                                    All
                                </li>
                                <li data-filter=".oranges">Oranges</li>
                                <li data-filter=".fresh-meat">Fresh Meat</li>
                                <li data-filter=".vegetables">Vegetables</li>
                                <li data-filter=".fastfood">Fastfood</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row featured__filter">
                    <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                        <div className="featured__item">
                            <div
                                className="featured__item__pic set-bg"
                                data-setbg="/img/featured/feature-1.jpg"
                            >
                                <ul className="featured__item__pic__hover">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-heart" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-retweet" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-shopping-cart" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6>
                                    <a href="#">Crab Pool Security</a>
                                </h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                        <div className="featured__item">
                            <div
                                className="featured__item__pic set-bg"
                                data-setbg="/img/featured/feature-2.jpg"
                            >
                                <ul className="featured__item__pic__hover">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-heart" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-retweet" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-shopping-cart" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6>
                                    <a href="#">Crab Pool Security</a>
                                </h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                        <div className="featured__item">
                            <div
                                className="featured__item__pic set-bg"
                                data-setbg="/img/featured/feature-3.jpg"
                            >
                                <ul className="featured__item__pic__hover">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-heart" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-retweet" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-shopping-cart" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6>
                                    <a href="#">Crab Pool Security</a>
                                </h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                        <div className="featured__item">
                            <div
                                className="featured__item__pic set-bg"
                                data-setbg="/img/featured/feature-4.jpg"
                            >
                                <ul className="featured__item__pic__hover">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-heart" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-retweet" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-shopping-cart" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6>
                                    <a href="#">Crab Pool Security</a>
                                </h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                        <div className="featured__item">
                            <div
                                className="featured__item__pic set-bg"
                                data-setbg="/img/featured/feature-5.jpg"
                            >
                                <ul className="featured__item__pic__hover">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-heart" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-retweet" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-shopping-cart" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6>
                                    <a href="#">Crab Pool Security</a>
                                </h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                        <div className="featured__item">
                            <div
                                className="featured__item__pic set-bg"
                                data-setbg="/img/featured/feature-6.jpg"
                            >
                                <ul className="featured__item__pic__hover">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-heart" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-retweet" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-shopping-cart" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6>
                                    <a href="#">Crab Pool Security</a>
                                </h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                        <div className="featured__item">
                            <div
                                className="featured__item__pic set-bg"
                                data-setbg="/img/featured/feature-7.jpg"
                            >
                                <ul className="featured__item__pic__hover">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-heart" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-retweet" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-shopping-cart" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6>
                                    <a href="#">Crab Pool Security</a>
                                </h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                        <div className="featured__item">
                            <div
                                className="featured__item__pic set-bg"
                                data-setbg="/img/featured/feature-8.jpg"
                            >
                                <ul className="featured__item__pic__hover">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-heart" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-retweet" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-shopping-cart" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6>
                                    <a href="#">Crab Pool Security</a>
                                </h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
