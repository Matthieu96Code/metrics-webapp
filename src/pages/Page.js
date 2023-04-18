import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDetails } from '../redux/ItemSlice';
import Details from '../components/Details';

const Page = () => {
  const { details } = useSelector((state) => state.items);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails());
  }, [dispatch]);

  // console.log(details);

  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        Retour
      </button>
      <div>
        {details.map((detail) => (
          <Details key={detail.key} date={detail.key} currency={detail} />
        ))}
      </div>
    </div>
  );
};

export default Page;
