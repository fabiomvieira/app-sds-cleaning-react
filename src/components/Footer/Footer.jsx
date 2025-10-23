import logoWhite from '../../static/logo-sds-white.png';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className='footer__content__logo'>
            <img src={logoWhite} alt="Logo SDS Detailing Cleaning LLC" />
          </div>

          <div className="footer__content__items">
            <p>&copy; 2025 SDS Detailing Cleaning LLC. All rights reserved.</p>
            <p>(551) 554-8788</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;