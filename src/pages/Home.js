import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, filter } from '../redux/ItemSlice';
import Cards from '../components/Cards';

const Home = () => {
  const { filtered, field, items } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  const handleChange = (event) => {
    dispatch(filter(event.target.value));
  };

  if (field) {
    return (
      <div>
        <form>
          <input type="text" onChange={(event) => handleChange(event)} />
        </form>
        <div>
          {filtered.map((item) => (
            <Cards key={item.id} code={item.code} description={item.description} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <form>
        <input type="text" onChange={(event) => handleChange(event)} />
      </form>
      <div>
        {items.map((item) => (
          <Cards key={item.id} code={item.code} description={item.description} />
        ))}
      </div>
    </div>
  );
};
export default Home;
