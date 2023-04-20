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
      title="devise"
    />
    <div className="main-picture">
      <h1>Wordwide symbols</h1>
      {/* <img src={img1} alt="devise and symbol logo" /> */}
    </div>
  </header>
);

export default MainHeader;
