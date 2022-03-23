import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Assine a nossa newsletter</h1>
      <p className="p__opensans">E nunca perca as últimas atualizações!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Insira o seu endereço de email" />
      <button type="button" className="custom__button">Se inscrever</button>
    </div>
  </div>
);

export default Newsletter;