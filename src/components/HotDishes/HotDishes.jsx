import React, { useContext, useEffect, useState } from 'react';
import { HotDishesBox, FoodCardList } from './hotdishes.styles';
import { FoodCard } from '../FoodCard/FoodCard';
import { FoodCardDataContext } from '../../context/FoodCardDataContext';
import axios from 'axios';
import { ToOrder } from '../../context/ToOrderContext';
import { HowManyContext } from '../../context/HowManyContext';
import { Loading } from '../Loading/Loading';

export const HotDishes = () => {
  const { foodCardData, setFoodCardData } = useContext(FoodCardDataContext);
  const { foodOrder, setFoodOrder } = useContext(ToOrder);
  let { howMany, setHowMany } = useContext(HowManyContext);

  const toOrder = async (id) => {
    const data = await axios
      .get(`http://localhost:5000/food/1`)
      .catch((err) => console.log(err));

    if (data.status === 200) {
      setFoodOrder([...foodOrder, data.data.find((item) => item.id == id)]);
    }

    foodOrder.filter((item) => {
      if (item == item) {
        setHowMany(howMany + 1);
      }
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/food/1`)
      .then((data) => setFoodCardData(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <HotDishesBox>
      {foodCardData.length ? (
        <FoodCardList>
          {foodCardData.map((item) => (
            <FoodCard onClick={toOrder} obj={item} />
          ))}
        </FoodCardList>
      ) : (
        <Loading
          widthPx="300px"
          heightPx="300px"
          rightPx="calc(50% - 1px)"
          topPx="calc(50% - 150px)"
        ></Loading>
      )}
    </HotDishesBox>
  );
};
