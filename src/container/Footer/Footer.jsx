import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Entre em contato conosco</h1>
        <p className="p__opensans">rua teódulo de albuquerque - cabula vi, salvador - ba</p>
        <p className="p__opensans">(71) 98456-1192</p>
        <p className="p__opensans">(71)3462-1245</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;A melhor maneira de se encontrar é se perder a serviço dos outros.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Jornada de trabalho</h1>
        <p className="p__opensans">segunda-feira - Sexta-feira:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Sabado - Domingo:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">&copy;2021 todos os direitos reservado Wilson evangelista.</p>
    </div>

  </div>
);

export default Footer;