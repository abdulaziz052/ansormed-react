import React, { useState } from 'react'
import headerLogo from '../img/logo-icon.svg'
function Header() {
    
  return (
    <>
    {/* header start */}
    <header className="header">
        <div className="container header__container">
            <a href="./index.html" className="header__logo">
                <img src={headerLogo} width="50" height="50" alt="header logo"/>
                <strong>Ansormed</strong>
            </a>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#xizmatlar" className="nav__link active">
                          Xizmatlar
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#dorilar" className="nav__link">
                            Dorilar
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#asal" className="nav__link">
                            Asal
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#kontakt" className="nav__link">
                            Kontaktlar
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#kontakt" className="nav__link">
                            Blog
                        </a>
                    </li>
                </ul>
            </nav>
            <button className="open">
                ^
               </button>
               <button className="close">
                ^
               </button>
               <a href="#kontakt" id="btnone" className="btn">
                Qabulga yozilish
               </a>
        </div>
    </header>
    {/* header end */}
    </>
  )
}

export default Header;