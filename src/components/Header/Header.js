import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Logo from '../../assets/images/logo.png';
import Hamburger from './images/hamburger.svg';
import Cart from './images/shopping-bag.svg';
import Close from './images/close.png';
import User from './images/user.svg';
import {Link, NavLink} from 'react-router-dom';

import './Header.scss';

const navArr = [
    { id: 0, name: "Dashboard", link: "/capstone" },
    { id: 1, name: "All", link: "/product/category/all" },
    { id: 2, name: "Women", link: "/product/category/women" },
    { id: 3, name: "Men", link: "/product/category/men" },
    { id: 4, name: "Jewelery", link: "/product/category/jewelery" },
    { id: 5, name: "Electronics", link: "/product/category/electronics" }
];

function Header() {
    let [toggle, setToggle] = useState(false);
    let cart = useSelector((state) => state.cart.cart);
    let cartCount = 0;
    let cartLength = Number(
        cart
        .map((r) => r.quantity)
        .reduce((_p, c) => {
            cartCount = cartCount + c;
            return cartCount;
        }, 0)
    );

    return (
        <div className="header-wrapper">
            <div className="container">
                <header>
                    <img className="__hamburger" id="hamburger" onClick={() => setToggle(!toggle)} aria-hidden="true"
                        data-state="show" src={Hamburger} ></img>

                    <NavLink to="/capstone" aria-label="go to venia home page" alt="logo"><img src={Logo} className="header__logo" alt="venia logo" /></NavLink>

                    <ul className="nav__inks">
                        {navArr?.map((nav) => {
                            return (
                                <li key={nav.id}>
                                    <NavLink to={nav.link} alt={nav.name}
                                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{nav.name}</NavLink>
                                </li>
                            );
                        })}
                    </ul>

                    {toggle ?  <div className="nav__inks__xs">
                        <section className="__header">
                            <p>Shop Categories</p>
                            <button><img src={Close} alt='close' onClick={() => setToggle(!toggle)}/></button>
                        </section>
                        <section>
                            <ul>
                                {navArr?.map((nav) => {
                                    return (
                                        <li key={nav.id}>
                                            <Link to={nav.link} alt="" >{nav.name}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                        <section className="__footer">
                            <p>
                                <img src={User} alt="create account" /> Account
                            </p>
                            <p>Sign In</p>
                        </section>                     
                    </div> : ""}
                   
                    <Link to="/cart" alt="go to cart" className='cart__icon'>
                        <img className="header__cart" src={Cart} alt="click here to go to cart" />
                        {cartLength > 0 && <span className="cart--count">{cartLength}</span>}                       

                    </Link>
                </header>
            </div>
        </div>

    );
}
export default Header;