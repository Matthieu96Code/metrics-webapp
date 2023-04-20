import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
// import img1 from '../img/img1.jpg';
import Navbar from './Navbar';

const MainHeader = () => (
  <header className="header">
    <Navbar
      action={(
        <div className="back-from-home">
          <AiOutlineLeft />
          {' '}
          <p>2023</p>
        </div>
 )}
      title="currency code / name"
    />
    <div className="main-picture">
      <h1>Wordwide currencies</h1>
    </div>
  </header>
);

export default MainHeader;
