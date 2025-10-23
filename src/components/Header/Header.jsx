import { useState } from 'react';
import logoWhite from '../../static/logo-sds-white.png';
import hambuger from '../../static/icon-hambuger.svg';
import './Header.scss';

function Header() {
  const [open, setOpen] = useState(false)
  const [background, setBackground] = useState(false)

  function openMenu() {
    setOpen(!open)
  }

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 30) {
      setBackground(true)
    } else {
      setBackground(false)
    }
  })

  return (
    <header className={background ? 'header scrolled' : 'header'}>
      <div className="container">
        <nav className="header__content">
          <a href={"/"} aria-label="Home"><img src={logoWhite} alt="Logo SDS Detailing Cleaning LLC" className="header__content__logo"/></a>

          <button aria-label='Open menu' className='header__content__button' onClick={() => openMenu()}>
            <img src={hambuger} alt="Open menu icon" />
          </button>

          <ul className={open ? 'header__content__menu opened' : 'header__content__menu'}>
            <li className="header__content__menu__item">
              <a href={"/"}>Home</a>
            </li>
            <li className="header__content__menu__item">
              <a href={"/see-our-work"}>See our work</a>
            </li>
            <li className="header__content__menu__item">
              <a href={"/our-services"}>Our services</a>
            </li>
            <li className="header__content__menu__item">
              <a href={"/contact-us"}>Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;