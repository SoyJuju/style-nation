import '../../../styles/main.css';

import useMobileMenu from '../../hooks/useMobileMenu';

import logo from '../../../assets/logo.png';
import menu from '../../../assets/menu-icon.svg';

export default function Navbar() {
  const { mobileMenu, setMobileMenu } = useMobileMenu();

  const handleMobileNav = () => {
    setMobileMenu(!mobileMenu);
  };

  const hideMobileNav = () => {
    setMobileMenu(false);
  };

  return (
    <header className="navbar">
      <section className="navbar--container | small-container">
        <a href="/">
          <div className="navbar--left">
            <div className="navbar--logo-container">
              <img className="navbar--logo" src={logo.src} alt="" />
            </div>
            <h1 className="navbar--title | fs-small-700 fw-bold text-primary-400">
              Style Nation
            </h1>
          </div>
        </a>
        <button className="navbar--mobile" onClick={handleMobileNav}>
          <img src={menu.src} alt="" />
        </button>
        <nav className={'navbar--nav' + (mobileMenu ? '-mobile' : '-pc')}>
          <ul role="list">
            <li className="navbar--links">
              <button className="no-style-button" onClick={hideMobileNav}>
                <a href="/#home">Home</a>
              </button>
            </li>
            <li>
              <button className="no-style-button" onClick={hideMobileNav}>
                <a href="/#brands">Brands</a>
              </button>
            </li>
            <li>
              <button className="no-style-button" onClick={hideMobileNav}>
                <a href="/#cars">Cars</a>
              </button>
            </li>
            <li>
              <button className="no-style-button" onClick={hideMobileNav}>
                <a href="/#footer">Contact</a>
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
