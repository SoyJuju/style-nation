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
        <img style={{ width: '6rem' }} src={hyundai.src} alt="" />
        <img
          style={{ width: '7.8rem', marginInline: '2rem' }}
          src={lexus.src}
          alt=""
        />
        <img
          style={{ width: '5.65rem', marginInline: '2.9rem' }}
          src={baic.src}
          alt=""
        />
        <img
          style={{ width: '5.7rem', marginInline: '2.8rem' }}
          src={toyota.src}
          alt=""
        />
        <img
          style={{ width: '7rem', marginInline: '2.3em' }}
          src={ford.src}
          alt=""
        />
        <img style={{ width: '6.2rem' }} src={kia.src} alt="" />
      </div>
    </section>
  );
}
