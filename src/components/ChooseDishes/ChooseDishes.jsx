import React from 'react';
import {
  ChooseDishesArrowSpan,
  ChooseDishesBoxInner,
  ChooseDishesOptions,
  ChooseDishesSelect,
  ChooseDishesTitle,
} from './choose-dishes.styles';

export const ChooseDishes = () => {
  return (
    <ChooseDishesBoxInner>
      <ChooseDishesTitle>Choose Dishes</ChooseDishesTitle>
      <ChooseDishesArrowSpan></ChooseDishesArrowSpan>
      <ChooseDishesSelect>
        <ChooseDishesOptions>Dine In</ChooseDishesOptions>
      </ChooseDishesSelect>
    </ChooseDishesBoxInner>
  );
};
