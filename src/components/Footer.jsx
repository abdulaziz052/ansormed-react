import React from 'react'
import headerLogo from '../img/logo-icon.svg'


function Footer() {
  return (
    <>
         <header className="header__two">
        <div className="container header__two__container">
            <a href="#" className="header__two__logo">
                <img src={headerLogo} alt="" width="50" height="50"/>
                <strong>AnsorMed</strong>
            </a>
            <nav className="nav__two">
                <ul className="nav__two__list">
                    <li className="nav__two__item">
                        <a href="#" className="nav__two__link">
                            Xizmatlar
                        </a>
                    </li>
                    <li className="nav__two__item">
                        <a href="#" className="nav__two__link">
                            Dorilar
                        </a>
                    </li>
                    <li className="nav__two__item">
                        <a href="#" className="nav__two__link">
                            Asal
                        </a>
                    </li>
                    <li className="nav__two__item">
                        <a href="#" className="nav__two__link">
                            Xizmatlar
                        </a>
                    </li>
                    <li className="nav__two__item">
                        <a href="#" className="nav__two__link">
                            Kontaktlar
                        </a>
                    </li>
                    <li className="nav__two__item">
                        <a href="#" className="nav__two__link">
                            Blog
                        </a>
                    </li>
                </ul>
            </nav>
    
        </div>
    </header>
    </>
  )
}

export default Footer