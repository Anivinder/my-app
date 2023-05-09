import React from "react";
import './header.css';
import CTA from './cta';
import ME from '../../assets/me-waving.png';
import HeaderSocials from "./headerSocial";

const Header = ()=>{
    return(
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Anivinder Reddy</h1>
                <h5 className="text-light">
                   Developer
                </h5>

                <CTA />

                <HeaderSocials/>

                <div className="me">
                    <div>
                        <img src={ME} alt="me" />
                    </div>
                </div>

                <a href="#contact" className="scroll_down">Scroll Down</a>

            </div>
        </header>
    );
}

export default Header;