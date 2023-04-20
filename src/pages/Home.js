import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, filter } from '../redux/ItemSlice';
import Cards from '../components/Cards';
import MainHeader from '../components/MainHeader';

const Home = () => {
  const { filtered, field, items } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const handleChange = (event) => {
    dispatch(filter(event.target.value));
  };

  if (field) {
    return (
      <div className="main-container">
        <MainHeader />
        <div className="filter-section">
          <form className="research-form">
            <input type="text" onChange={(event) => handleChange(event)} />
          </form>
        </div>
        <ul className="cards-list">
          {filtered.map((item) => (
            <Cards key={item.id} code={item.code} description={item.description} />
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="main-container">
      <MainHeader />
      <div className="filter-section">
        <form className="research-form">
          <input type="text" onChange={(event) => handleChange(event)} />
        </form>
      </div>
      <ul className="cards-list">
        {items.map((item) => (
          <Cards key={item.id} code={item.code} description={item.description} />
        ))}
      </ul>
    </div>
  );
};
export default Home;
