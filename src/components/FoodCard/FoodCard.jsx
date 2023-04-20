import {
  HotDishesCardHowMany,
  HotDishesCardPrice,
  HotDishesCardTitle,
  HotDishesItem,
  HotDishesItemImg,
  HotDishesItemInner,
} from './foodcard.styles';
import { Loading } from '../Loading/Loading';
import { useState } from 'react';

export const FoodCard = ({ obj, onClick }) => {
  const { image, bowls, price, name, id } = obj;
  const [loading, setLoading] = useState(true);

  return (
    <HotDishesItem id={id} onClick={(evt) => onClick(evt.currentTarget.id)}>
      <HotDishesItemInner>
        {loading ? (
          <Loading
            widthPx="150px"
            heightPx="150px"
            topPx="-50px"
            rightPx="7%"
          />
        ) : null}
        <HotDishesItemImg
          className="food-img"
          src={`http://localhost:5000/${image}`}
          alt="."
          onLoad={() => setLoading(false)}
        />
        <HotDishesCardTitle>{name}</HotDishesCardTitle>
        <HotDishesCardPrice>
          <i
            style={{ fontSize: '12px', marginRight: '3px' }}
            className="fa-regular fa-dollar-sign"
          ></i>
          {price}
        </HotDishesCardPrice>
        <HotDishesCardHowMany>{bowls} Bowls available</HotDishesCardHowMany>
      </HotDishesItemInner>
    </HotDishesItem>
  );
};
