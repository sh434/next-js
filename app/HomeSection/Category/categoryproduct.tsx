"use client";
import React, { useEffect } from 'react';
import BakgroundImage from '@/app/Utils/BakgroundImage';
import "../Category/Category.css"

const CarouselSlider = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            require('bootstrap/dist/js/bootstrap.bundle.min.js');
        }
    }, []);

    useEffect(() => {
        BakgroundImage('set-bg')

    }, [])

    return (

        <></>

        //     <section className="categories">
        //     <div className="container">
        //       <div className="row">
        //         <div className="categories__slider owl-carousel">
        //           <div className="col-lg-3">
        //             <div
        //               className="categories__item set-bg"
        //               data-setbg="/img/categories/cat-1.jpg"
        //             >
        //               <h5>
        //                 <a href="#">Fresh Fruit</a>
        //               </h5>
        //             </div>
        //           </div>
        //           <div className="col-lg-3">
        //             <div
        //               className="categories__item set-bg"
        //               data-setbg="/img/categories/cat-2.jpg"
        //             >
        //               <h5>
        //                 <a href="#">Dried Fruit</a>
        //               </h5>
        //             </div>
        //           </div>
        //           <div className="col-lg-3">
        //             <div
        //               className="categories__item set-bg"
        //               data-setbg="img/categories/cat-3.jpg"
        //             >
        //               <h5>
        //                 <a href="#">Vegetables</a>
        //               </h5>
        //             </div>
        //           </div>
        //           <div className="col-lg-3">
        //             <div
        //               className="categories__item set-bg"
        //               data-setbg="/img/categories/cat-4.jpg"
        //             >
        //               <h5>
        //                 <a href="#">drink fruits</a>
        //               </h5>
        //             </div>
        //           </div>
        //           <div className="col-lg-3">
        //             <div
        //               className="categories__item set-bg"
        //               data-setbg="/img/categories/cat-5.jpg"
        //             >
        //               <h5>
        //                 <a href="#">drink fruits</a>
        //               </h5>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </section>

    );
};

export default CarouselSlider;
