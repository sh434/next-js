
"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from "../../public/img/logo.png"
// import logo from '../../../public/img/logo.png';
import Link from 'next/link';

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
                  <li>Free Shipping for all orders over $99</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
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
                  <img src="/img/language.png" alt="Language" />
                  <div>English</div>
                  <i className="bi bi-arrow-down-short"></i>
                  <ul>
                    <li>
                      <a href="#">Spanish</a>
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
              <Link href="/">
                <Image src={logo} alt="Logo" width={100} />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="header__menu">
              <ul>
                <li className="active">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">Shop</Link>
                </li>
                <li>
                  <Link href="#">
                    Pages
                    <ul className="header__menu__dropdown">
                      <li>
                        <Link href="/shop">Shop Details</Link>
                      </li>
                      <li>
                        <Link href="/shopingCard">Shopping Cart</Link>
                      </li>
                      <li>
                        <Link href="/checkout">Check Out</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">Blog Details</Link>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contactus">Contact</Link>
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
