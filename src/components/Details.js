import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Details = ({ date, currency }) => {
  const { selected } = useSelector((state) => state.items);

  return (
    <table>
      <div>{date}</div>
      <div>{currency[selected]}</div>
    </table>
  );
};

Details.propTypes = {
  date: PropTypes.string.isRequired,
  currency: PropTypes.number.isRequired,
};

export default Details;
