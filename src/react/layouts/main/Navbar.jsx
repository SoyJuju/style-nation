import '../../../styles/main.css';

import { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

import menu from '../../../assets/menu-icon.svg';

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const isMobile = useMediaQuery('(max-width: 40.5em)');

  useEffect(() => {
    if (!isMobile) {
      setMobileMenu(false);
    }
  }, [isMobile]);

  return (
    <header className="navbar">
      <section className="navbar--container | container">
        <div className="navbar--left">
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
              <a href="/">Cars</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
