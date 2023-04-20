import React, { useContext, useState } from 'react';
import { HowManyContext } from '../../context/HowManyContext';
import { Loading } from '../Loading/Loading';
import {
  OrderCardBottomBox,
  OrderCardCount,
  OrderCardDeleteBtn,
  OrderCardFoodName,
  OrderCardFoodPrice,
  OrderCardImg,
  OrderCardInput,
  OrderCardItem,
  OrderCardMainPrice,
  OrderCardTopBox,
  OrderCardTopBoxInner,
} from './orders-card.styles';

export const OrdersCard = ({ obj }) => {
  const { image, name, price } = obj;
  const { howMany } = useContext(HowManyContext);
  const [loading, setLoading] = useState(true);

  return (
    <OrderCardItem>
      <OrderCardTopBox>
        {loading ? (
          <Loading widthPx="55px" heightPx="55px" topPx="-13px" rightPx="87%" />
        ) : null}
        <OrderCardImg
          style={loading ? { display: 'none' } : {}}
          src={'http://localhost:5000/' + image}
          alt="."
          onLoad={() => setLoading(false)}
        />
        <OrderCardTopBoxInner style={loading ? { marginLeft: '50px' } : {}}>
          <OrderCardFoodName>{name}</OrderCardFoodName>
          <OrderCardFoodPrice>{price}</OrderCardFoodPrice>
        </OrderCardTopBoxInner>
        <OrderCardCount>{howMany}</OrderCardCount>
        <OrderCardMainPrice>{price}</OrderCardMainPrice>
      </OrderCardTopBox>
      <OrderCardBottomBox>
        <OrderCardInput type="text" placeholder="Order Note..." />
        <OrderCardDeleteBtn></OrderCardDeleteBtn>
      </OrderCardBottomBox>
    </OrderCardItem>
  );
};
