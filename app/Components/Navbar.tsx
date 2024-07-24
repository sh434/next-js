
"use client";
import React from 'react'
import Link from 'next/link';
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="header__top__left">
                <ul>
                  <li>
                    <i className="bi bi-envelope" /> hello@colorlib.com
                  </li>
                  <li>Free Shipping for all orders over $99</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header__top__right">
                <div className="header__top__right__social">
                  <Link href="#">
                    <i className="bi bi-facebook" />
                  </Link>
                  <Link href="#">
                    <i className="bi bi-twitter" />
                  </Link>
                  <Link href="#">
                    <i className="bi bi-linkedin" />
                  </Link>
                  <Link href="#">
                    <i className="bi bi-pinterest" />
                  </Link>
                </div>
                <div className="header__top__right__language">
                  <div>English</div>
                  <i className="bi bi-arrow-down-short"></i>
                  <ul>
                    <li>
                      <Link href="#">Spanish</Link>
                    </li>
                    <li>
                      <a href="#">English</a>
                    </li>
                  </ul>
                </div>
                <div className="header__top__right__auth">
                  <Link href="/authFrom">
                    <i className="bi bi-person" /> Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Navbar
