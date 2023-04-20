import axios from 'axios';
import { useContext, useEffect } from 'react';
import { FoodCardDataContext } from '../../context/FoodCardDataContext';
import { FoodCard } from '../FoodCard/FoodCard';
import { FoodCardList } from '../HotDishes/hotdishes.styles';
import { Loading } from '../Loading/Loading'; 
import { GrillBox } from './grill.styles';

export const Grill = () => {
  const { foodCardData, setFoodCardData } = useContext(FoodCardDataContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/food/4`)
      .then((data) => setFoodCardData(data.data))
      .catch((err) => console.log(err));

    console.log(foodCardData);
  }, []);

  return (
    <>
      <GrillBox>
        {foodCardData.length ? (
          <FoodCardList>
            {foodCardData.map((item) => (
              <FoodCard obj={item} />
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
      </GrillBox>
    </>
  );
};
