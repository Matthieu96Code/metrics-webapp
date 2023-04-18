import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../redux/ItemSlice';
import Cards from '../components/Cards';

const Home = () => {
  const { items } = useSelector((state) => state.items);
  const [itemsValue, setItems] = useState(items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const handleChange = (event) => {
    console.log(event.target.value);
    const filtered = items.filter((item) => item.code !== event.target.value);
    setItems(filtered);
  };

  return (
    <div>
      <form>
        <input type="text" onChange={(event) => handleChange(event)} />
      </form>
      <div>
        {itemsValue.map((item) => (
          <Cards key={item.id} code={item.code} description={item.description} />
        ))}
      </div>
    </div>
  );
};
export default Home;
