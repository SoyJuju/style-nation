import '../../../styles/main.css';

import useMobileMenu from '../../hooks/useMobileMenu';

import logo from '../../../assets/logo.png';
import menu from '../../../assets/menu-icon.svg';

export default function Navbar() {
  const { mobileMenu, setMobileMenu } = useMobileMenu();

  return (
    <header className="navbar">
      <section className="navbar--container | container">
        <div className="navbar--left">
          <div className="navbar--logo-container">
            <img className="navbar--logo" src={logo.src} alt="" />
          </div>
          <h1 className="navbar--title | fs-small-700 fw-bold text-primary-400">
            Style Nation
          </h1>
        </div>
        <button
          className="navbar--mobile"
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        >
          <img src={menu.src} alt="" />
        </button>
        <nav className={'navbar--nav' + (mobileMenu ? '-mobile' : '-pc')}>
          <ul role="list">
            <li className="navbar--links">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Featured</a>
            </li>
            <li>
              <a href="/">Cars</a>
            </li>
            <li>
              <a href="/#footer">Contact</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
