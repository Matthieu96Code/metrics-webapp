import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { selectCurrency } from '../redux/ItemSlice';

const Cards = ({ code, description }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <li className="element-card">
      <button
        className="card-btn"
        type="button"
        onClick={() => {
          navigate(`${code}`);
          dispatch(selectCurrency(code, description));
        }}
      >
        <BsArrowRightCircle className="arrow-next" size="20px" color="white" />
        <h3>{code}</h3>
        <p>{description}</p>
      </button>
    </li>
  );
};

Cards.propTypes = {
  code: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Cards;
