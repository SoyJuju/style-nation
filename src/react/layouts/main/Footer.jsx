import '../../../styles/main.css';

import facebook from '../../../assets/social-icons.svg#icon-facebook';
import viber from '../../../assets/viber-icon.svg';
import telegram from '../../../assets/social-icons.svg#icon-telegram';
import messenger from '../../../assets/messenger-icon.svg';

export default function Footer() {
  return (
    <footer className="footer | padding-block-700" id="footer">
      <div className="footer--container | container bg-primary-100">
        <div className="footer--title | padding-block-600">
          <h1 className="fs-small-800 text-primary-400 padding-block-200 fw-bold">
            Get In Touch
          </h1>
          <h2 className="fs-small-450 fw-light">
            Let's get you your dream car
          </h2>
        </div>

        <div className="footer--info | padding-block-800">
          <div className="footer--tags">
            <h2>OFFICE</h2>
            <p className="footer--detail">
              Myanmar&mdash; <br />
              ChanMyaTharZi Township, <br />
              39C Street, Between 53 & 54
            </p>
          </div>
          <div className="footer--tags">
            <h2>NEED HELP</h2>
            <p className="fs-small-600 text-primary-400">+959 785 666 777</p>
            <a href="mailto:stylezaw@gmail.com" className="footer--detail">
              stylezaw@gmail.com
            </a>
            <br />
          </div>
          <div className="footer--tags">
            <h2>OPENING HOURS</h2>
            <p className="footer--detail">Monday - Friday: 9:00 to 6:00</p>
            <p className="footer--detail">Saturday - Sunday: 8:00 to 5:00</p>
          </div>
        </div>
        <div className="footer--socials">
          <ul className="footer--links" role="list" aria-label="social-links">
            <li>
              <a
                aria-label="facebook"
                href="https://www.facebook.com/profile.php?id=100010511760254&mibextid=b06tZ0"
                target="_blank"
              >
                <svg
                  className="footer--social-icons"
                  style={{ width: '2.6em' }}
                >
                  <use xlinkHref={facebook}></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                aria-label="messenger"
                href="https://instagram.com/disis_julian?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
              >
                <img
                  src={messenger.src}
                  alt=""
                  className="footer--social-icons"
                />
              </a>
            </li>
            <li>
              <a
                aria-label="viber"
                href="https://www.twitter.com/soy_bala/"
                target="_blank"
              >
                <img
                  src={viber.src}
                  alt=""
                  style={{
                    width: '3.2rem',
                    height: '3.2rem',
                    marginInline: '0.4rem',
                  }}
                  className="footer--social-icons"
                />
              </a>
            </li>
            <li>
              <a
                aria-label="telegram"
                href="https://www.linkedin.com/in/julian-hein-0a1504289/"
                target="_blank"
              >
                <svg className="footer--social-icons">
                  <use xlinkHref={telegram}></use>
                </svg>
              </a>
            </li>
          </ul>
          <p className="footer--copyright | footer--detail">
            Style Nation &#169; 2023. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
