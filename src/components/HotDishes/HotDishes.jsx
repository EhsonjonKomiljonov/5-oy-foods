import React, { useContext, useEffect } from 'react';
import {
  HotDishesArrowSpan,
  HotDishesBox,
  HotDishesBoxInner,
  HotDishesList,
  HotDishesOptions,
  HotDishesSelect,
  HotDishesTitle,
  HotDishesLoadingStyle,
} from './hotdishes.styles';
import { FoodCard } from '../FoodCard/FoodCard';
import { FoodCardDataContext } from '../../context/FoodCardDataContext';
import axios from 'axios';

export const HotDishes = () => {
  const { foodCardData, setFoodCardData } = useContext(FoodCardDataContext);

  useEffect(() => {
    axios
      .get('http://localhost:5000/category')
      .then((data) => setFoodCardData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <HotDishesBox>
      <HotDishesBoxInner>
        <HotDishesTitle>Choose Dishes</HotDishesTitle>
        <HotDishesArrowSpan></HotDishesArrowSpan>
        <HotDishesSelect>
          <HotDishesOptions>Dine In</HotDishesOptions>
        </HotDishesSelect>
      </HotDishesBoxInner>
      {/* {foodCardData.length ? (
        <HotDishesList>
          {foodCardData.map((item) => (
            <FoodCard obj={item} />
          ))}{' '}
        </HotDishesList>
      ) : (
        <HotDishesLoadingStyle></HotDishesLoadingStyle>
      )} */}
      <HotDishesList>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </HotDishesList>
    </HotDishesBox>
  );
};
