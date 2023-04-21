import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ date, currency }) => (
  <tr>
    <th>{date}</th>
    <th>{currency}</th>
  </tr>
);

Details.propTypes = {
  date: PropTypes.string.isRequired,
  currency: PropTypes.number.isRequired,
};

export default Details;
