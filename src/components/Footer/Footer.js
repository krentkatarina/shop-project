import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import styles from '../../styles/Footer.module.css';
import LOGO from '../../styles/images/logo.svg';

const Footer = () => {
    return (
       <section className={styles.footer}>
            <div className="logo">
                <Link to={ROUTES.Home}>
                    <img src={LOGO} alt="logo" />
                </Link>
            </div>
            <div className={styles.rights}>
                Developed by <a href="https://github.com/krentkatarina" 
                                rel="noreferrer" 
                                target="_blank"
                                >Krent Katarina</a>
            </div>
            <div className={styles.socials}>
                <a  href="https://www.instagram.com" 
                    rel="noreferrer" 
                    target="_blank" 
                    className="icon">
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
                    </svg>
                </a>
                <a  href="https://www.facebook.com" 
                    rel="noreferrer" 
                    target="_blank" 
                    className="icon">
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
                    </svg>
                </a>
                <a  href="https://www.youtube.com" 
                    rel="noreferrer" 
                    target="_blank" 
                    className="icon">
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
                    </svg>
                </a>
            </div>
       </section>
    ) 
}

export default Footer;