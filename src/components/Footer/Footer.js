import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Instagram } from './images/instagram.svg';
import { ReactComponent as Facebook } from './images/facebook.svg';
import { ReactComponent as Twitter } from './images/twitter.svg';
import logo from './images/logo.svg';
import "./Footer.scss";

const ACCOUNT_LINKS = [
    { label: "Sign In", to: "/" },
    { label: "Register", to: "/" },
    { label: "Order Status", to: "/" },
]


const ABOUTUS_LINKS = [
    { label: "Our Story", to: "/" },
    { label: "Careers", to: "/" }
]

const HELP_LINKS = [
    { label: "Contact Us", to: "/" },
    { label: "Order Status", to: "/" },
    { label: "Returns", to: "/" }
]


const FooterBlock = ({ blockLable, links }) => (
    <section className='footer__block aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
        <div className="link__list">{blockLable}</div>
        <ul>
            {links.map((link) =>
                <li key={link.label}>
                    <Link to={link.to}>
                        {link.label}
                    </Link>
                </li>
            )}
        </ul>
    </section>
)


const Footer = () => {

    return (
        <footer className='container footer-wrapper'>
            <article>
                <div className='aem-Grid aem-Grid--12'>
                    <FooterBlock blockLable={"Account"} links={ACCOUNT_LINKS} />
                    <FooterBlock blockLable={"About Us"} links={ABOUTUS_LINKS} />
                    <FooterBlock blockLable={"Help"} links={HELP_LINKS} />

                    <section className='footer__block aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
                        <div className="link__list">Follow Us!</div>
                        <div className='followus__info'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </div>
                        <div className='social__links'>
                            <Instagram />
                            <Facebook />
                            <Twitter />
                        </div>
                    </section>
                </div>
            </article>


            <article className='bottom__block aem-Grid aem-Grid--12'>
                <div className='footer__logo aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12'>
                    <Link to="/capstone"><img src={logo} alt="venia logo" /></Link>
                </div>
                <div className='footer__copyright aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12'>
                    © Company Name Address Ave, City Name, State ZIP.
                </div>
                <div className='footer__links aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12'>
                    <Link to="/">Term of Use</Link>
                    <Link to="/">Privacy Policy</Link>
                </div>
            </article>
        </footer>
    )
}



export default Footer;