import axios from 'axios';
import { useContext, useEffect } from 'react';
import { FoodCardDataContext } from '../../context/FoodCardDataContext';
import { FoodCard } from '../FoodCard/FoodCard';
import { DataLoadingStyle, FoodCardList } from '../HotDishes/hotdishes.styles';
import { SoupBox } from './soup.styles';

export const Soup = () => {
  const { foodCardData, setFoodCardData } = useContext(FoodCardDataContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/food/3`)
      .then((data) => setFoodCardData(data.data))
      .catch((err) => console.log(err));

    console.log(foodCardData);
  }, []);

  return (
    <>
      <SoupBox>
        {foodCardData.length ? (
          <FoodCardList>
            {foodCardData.map((item) => (
              <FoodCard obj={item} />
            ))}
          </FoodCardList>
        ) : (
          <DataLoadingStyle></DataLoadingStyle>
        )}
      </SoupBox>
    </>
  );
};
