import React from 'react';
import { Link } from 'react-router-dom'
import Image from 'next/image';
import logo from '../../../public/img/logo.png';
const Header = () => {
  return (
<header className="header">
  <div className="header__top">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="header__top__left">
            <ul>
              <li>
                <i className="bi bi-envelope" /> hello@colorlib.com
              </li>
              <li>Free Shipping for all Order of $99</li>
            </ul>
          </div>
        </div>
        <div className=" col-md-6">
          <div className="header__top__right">
            <div className="header__top__right__social">
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
              <a href="#">
                <i className="bi bi-pinterest" />
              </a>
            </div>
            <div className="header__top__right__language">
              <img src="img/language.png" alt="" />
              <div>English</div>
              <i className="bi bi-arrow-down-short"></i>
              <ul>
                <li>
                  <a href="#">Spanis</a>
                </li>
                <li>
                  <a href="#">English</a>
                </li>
              </ul>
            </div>
            <div className="header__top__right__auth">
              <a href="#">
                <i className="bi bi-person" /> Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="header__logo">
          <a href="/">
          <Image src={logo} alt="Logo" width={100} />
          </a>
        </div>
      </div>
      <div className="col-lg-6">
        <nav className="header__menu">
          <ul>
            <li className="active">
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">Shop</a>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul className="header__menu__dropdown">
                <li>
                  <a href="./shop-details.html">Shop Details</a>
                </li>
                <li>
                  <a href="./shoping-cart.html">Shoping Cart</a>
                </li>
                <li>
                  <a href="./checkout.html">Check Out</a>
                </li>
                <li>
                  <a href="./blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="./blog.html">Blog</a>
            </li>
            <li>
              <a href="./contact.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-lg-3">
        <div className="header__cart">
          <ul>
            <li>
              <a href="#">
                <i className="bi bi-heart" /> <span>1</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-bag" /> <span>3</span>
              </a>
            </li>
          </ul>
          <div className="header__cart__price">
            item: <span>$150.00</span>
          </div>
        </div>
      </div>
    </div>
    <div className="humberger__open">
      <i className="fa fa-bars" />
    </div>
  </div>
</header>


  );
};

export default Header;
