import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai2.png';
import './Header.css';

const Header = () => (
  <div className="aibase__header section__padding" id="home">
    <div className="aibase__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with <br/> AI BASE</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="aibase__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="aibase__header-content__people">
        <img src={people} alt='people-icons'/>
        <p>12,891 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="aibase__header-image">
      <img src={ai} alt='ai'/>
    </div>
  </div>
);

export default Header;
