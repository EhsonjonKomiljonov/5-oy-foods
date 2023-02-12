import React, { useContext, useEffect } from 'react';
import {
  DataLoadingStyle,
  HotDishesBox,
  FoodCardList, 
} from './hotdishes.styles';
import { FoodCard } from '../FoodCard/FoodCard';
import { FoodCardDataContext } from '../../context/FoodCardDataContext';
import axios from 'axios';

export const HotDishes = () => {
  const { foodCardData, setFoodCardData } = useContext(FoodCardDataContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/food/1`)
      .then((data) => setFoodCardData(data.data))
      .catch((err) => console.log(err));
    console.log(foodCardData);
  }, []);

  return (
    <HotDishesBox>
      {foodCardData.length ? (
        <FoodCardList>
          {foodCardData.map((item) => (
            <FoodCard obj={item} />
          ))}
        </FoodCardList>
      ) : (
        <DataLoadingStyle></DataLoadingStyle>
      )}
    </HotDishesBox>
  );
};
