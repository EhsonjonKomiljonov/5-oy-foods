import {
  HotDishesCardHowMany,
  HotDishesCardPrice,
  HotDishesCardTitle,
  HotDishesItem,
  HotDishesItemImg,
  HotDishesItemInner,
} from './foodcard.styles';

export const FoodCard = ({ obj }) => {
  return (
    <HotDishesItem>
      <HotDishesItemInner>
        {/* <img src={obj?.img} alt={obj?.title} /> */}
        <HotDishesItemImg src="https://picsum.photos/id/1/132/132" alt="" />
        <HotDishesCardTitle>
          {/* {obj?.title} */}
          Spicy seasoned seafood noodles
        </HotDishesCardTitle>
        <HotDishesCardPrice>
          <i
            style={{ fontSize: '12px', marginRight: '3px' }}
            className="fa-regular fa-dollar-sign"
          ></i>
          {/* {obj?.price} */}
          2.29
        </HotDishesCardPrice>
        <HotDishesCardHowMany>
          {/* {obj?.how_many} */}
          20 Bowls available
        </HotDishesCardHowMany>
      </HotDishesItemInner>
    </HotDishesItem>
  );
};
