import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { selectCurrency } from '../redux/ItemSlice';

const Cards = ({ code, description }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => {
        navigate('page');
        dispatch(selectCurrency(code));
      }}
    >
      <div>{code}</div>
      <div>{description}</div>
    </button>
  );
};

Cards.propTypes = {
  code: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Cards;
