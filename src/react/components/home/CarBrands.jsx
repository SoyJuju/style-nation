import '../../../styles/main.css';

import toyota from '../../../assets/toyota-icon.svg';
import ford from '../../../assets/ford-icon.svg';
import baic from '../../../assets/baic-icon.svg';
import lexus from '../../../assets/lexus-icon.svg';
import kia from '../../../assets/kia-icon.svg';
import hyundai from '../../../assets/hyundai-icon.svg';

export default function CarBrands() {
  return (
    <section className="car-brands" id="brands">
      <h1 className="main-subheading padding-block-500">Available Brands</h1>
      <div className="car-brands--container | large-container">
        <img style={{ width: '5rem' }} src={toyota.src} alt="" />
        <img style={{ width: '7rem' }} src={ford.src} alt="" />
        <img style={{ width: '5.65rem' }} src={baic.src} alt="" />
        <img style={{ width: '6.2rem' }} src={kia.src} alt="" />
        <img
          style={{ width: '8rem', marginInline: '2rem' }}
          src={lexus.src}
          alt=""
        />
        <img style={{ width: '6rem' }} src={hyundai.src} alt="" />
      </div>
    </section>
  );
}
