import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import { getDetails } from '../redux/ItemSlice';
import Details from '../components/Details';
import Navbar from '../components/Navbar';

const Page = () => {
  const { details } = useSelector((state) => state.items);
  const { selected } = useSelector((state) => state.items);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails());
  }, [dispatch]);

  return (
    <div className="informations">
      <Navbar
        action={(
          <button className="back-btn" type="button" onClick={() => navigate(-1)}>
            <AiOutlineLeft color="white" />
          </button>
)}
        title="time series data"
      />
      <div className="detailed">
        <h1>{selected}</h1>
      </div>
      <div className="description">
        <p>
          Time series of
          {' '}
          {selected}
          {' '}
          currency in Euro from Monday 16th April 2023 to Thursday 20th April 2023
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>date</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <Details key={detail.key} date={detail.key} currency={detail} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
