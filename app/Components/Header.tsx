"use client";
import React from 'react';
import Image from 'next/image';
import logo from "../../public/img/logo.png";
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
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
                  <span>Pages</span>
                  <ul className="header__menu__dropdown">
                    <li>
                      <Link href="/shopDetail">Shop Details</Link>
                    </li>
                    <li>
                      <Link href="/shopingCartSection">Shopping Cart</Link>
                    </li>
                    <li>
                      <Link href="/checkOut">Check Out</Link>
                    </li>
                    <li>
                      <Link href="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
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
