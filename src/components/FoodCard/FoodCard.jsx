import {
  HotDishesCardHowMany,
  HotDishesCardPrice,
  HotDishesCardTitle,
  HotDishesItem,
  HotDishesItemImg,
  HotDishesItemInner,
} from './foodcard.styles';

export const FoodCard = ({ obj }) => {

  const { image, bowls, price, name } = obj;

  return (
    <HotDishesItem>
      <HotDishesItemInner>
        <HotDishesItemImg src={`http://localhost:5000/${image}`} alt="" />
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
