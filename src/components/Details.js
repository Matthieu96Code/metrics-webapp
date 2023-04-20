import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Details = ({ date, currency }) => {
  const { selected } = useSelector((state) => state.items);

  return (
    <tr>
      <th>{date}</th>
      <th>{currency[selected]}</th>
    </tr>
  );
};

Details.propTypes = {
  date: PropTypes.string.isRequired,
  currency: PropTypes.shape({
  }).isRequired,
};

export default Details;
