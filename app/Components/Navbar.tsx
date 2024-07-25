"use client";
import React from 'react';
import Link from 'next/link';
import "../Styles/Navbar.css";

const Navbar: React.FC<{ onLoginClick: () => void }> = ({ onLoginClick }) => {
  console.log('Navbar received onLoginClick:', onLoginClick);

  return (
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
                <button 
                  onClick={() => { 
                    console.log('Login button clicked');
                    onLoginClick(); 
                  }} 
                  className="login-button"
                >
                  <i className="bi bi-person" /> Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
