import React from 'react';
import PropTypes from 'prop-types';
import { IoIosSettings } from 'react-icons/io';
import { AiFillAudio } from 'react-icons/ai';

const Navbar = ({ action, title }) => (
  <nav className="navbar">
    <h1>{action}</h1>
    <h2>{title}</h2>
    <div className="func-icon">
      <AiFillAudio className="mic-icon nav-icons" color="white" size="20px" />
      <IoIosSettings className="setting-icon nav-icons" color="white" size="20px" />
    </div>
  </nav>
);

Navbar.propTypes = {
  action: PropTypes.shape({
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default Navbar;
