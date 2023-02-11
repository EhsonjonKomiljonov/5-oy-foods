import {
  HotDishesCardHowMany,
  HotDishesCardPrice,
  HotDishesCardTitle,
  HotDishesItem,
  HotDishesItemInner,
} from './foodcard.styles';

export const FoodCard = ({ obj }) => {
  return (
    <HotDishesItem>
      <HotDishesItemInner>
        <img src={obj?.img} alt={obj?.title} />
        <HotDishesCardTitle>{obj?.title}</HotDishesCardTitle>
        <HotDishesCardPrice>
          <i
            style={{ fontSize: '12px', marginRight: '3px' }}
            class="fa-regular fa-dollar-sign"
          ></i>
          {obj?.price}
        </HotDishesCardPrice>
        <HotDishesCardHowMany>{obj?.how_many}</HotDishesCardHowMany>
      </HotDishesItemInner>
    </HotDishesItem>
  );
};
