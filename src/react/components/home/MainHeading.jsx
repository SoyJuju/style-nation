import '../../../styles/main.css';

import main_heading_image from '../../../assets/main-heading-background.jpg';

export default function MainHeading() {
  return (
    <section className="main-heading" id="home">
      <div className="main-heading--background-image">
        <img src={main_heading_image.src} alt="" />
        <div className="main-heading--content">
          <h2 className="fw-medium">2023</h2>
          <h3 className="fw-bold">Lexus LX 570</h3>
          <a
            href="https://www.facebook.com/profile.php?id=100010511760254&mibextid=b06tZ0"
            target="_blank"
          >
            <button className="main-heading--button | round-button">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
