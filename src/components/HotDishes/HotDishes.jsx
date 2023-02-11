import React, { useContext } from 'react';
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

export const HotDishes = () => {
  const { foodCardData, setFoodCardData } = useContext(FoodCardDataContext);

  return (
    <HotDishesBox>
      <HotDishesBoxInner>
        <HotDishesTitle>Choose Dishes</HotDishesTitle>
        <HotDishesArrowSpan></HotDishesArrowSpan>
        <HotDishesSelect>
          <HotDishesOptions>Dine In</HotDishesOptions>
        </HotDishesSelect>
      </HotDishesBoxInner>
      {foodCardData.length ? (
        <HotDishesList> 
          {foodCardData.map((item) => (
            <FoodCard obj={item} />
          ))}{' '}
        </HotDishesList>
      ) : (
        <HotDishesLoadingStyle>Loading...</HotDishesLoadingStyle>
      )}
    </HotDishesBox>
  );
};
