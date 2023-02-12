import { useEffect, useRef } from 'react';
import {
  OrderActiveBtnInput,
  OrderHeaderBtnsBoxInner,
  OrdersBodyHeader,
  OrdersBodyHeaderDesc,
  OrdersBodyHeaderInner,
  OrdersBodyList,
  OrdersBox,
  OrdersBtns,
  OrdersFoot,
  OrdersFootBtn,
  OrdersFootInner,
  OrdersFootPrice,
  OrdersFootTitle,
  OrdersHeaderBtnsBox,
  OredersHeader,
  OredersTitle,
} from './orders.styles';

export const Orders = () => {
  return (
    <OrdersBox>
      <OredersHeader>
        <OredersTitle>Orders #34562</OredersTitle>
        <OrdersHeaderBtnsBox>
          <OrderHeaderBtnsBoxInner>
            <OrderActiveBtnInput
              id="active-btn-1"
              type="radio"
              name="active_btn"
            />
            <OrdersBtns htmlFor="active-btn-1">Dine In</OrdersBtns>
          </OrderHeaderBtnsBoxInner>
          <OrderHeaderBtnsBoxInner>
            <OrderActiveBtnInput
              id="active-btn-2"
              type="radio"
              name="active_btn"
            />
            <OrdersBtns htmlFor="active-btn-2">To Go</OrdersBtns>
          </OrderHeaderBtnsBoxInner>
          <OrderHeaderBtnsBoxInner>
            <OrderActiveBtnInput
              id="active-btn-3"
              type="radio"
              name="active_btn"
            />
            <OrdersBtns htmlFor="active-btn-3">Delivery</OrdersBtns>
          </OrderHeaderBtnsBoxInner>
        </OrdersHeaderBtnsBox>
        <OrdersBodyHeader>
          <OrdersBodyHeaderDesc>Item</OrdersBodyHeaderDesc>
          <OrdersBodyHeaderInner>
            <OrdersBodyHeaderDesc>Qty</OrdersBodyHeaderDesc>
            <OrdersBodyHeaderDesc>Price</OrdersBodyHeaderDesc>
          </OrdersBodyHeaderInner>
        </OrdersBodyHeader>
      </OredersHeader>
      <OrdersBodyList></OrdersBodyList>
      <OrdersFoot>
        <OrdersFootInner>
          <OrdersFootTitle>Discount</OrdersFootTitle>
          <OrdersFootPrice>
            <i
              style={{ fontSize: '14px', marginRight: '3px', color: '#fff' }}
              className="fa-regular fa-dollar-sign"
            ></i>
            0
          </OrdersFootPrice>
        </OrdersFootInner>
        <OrdersFootInner>
          <OrdersFootTitle>Sub total</OrdersFootTitle>
          <OrdersFootPrice>
            <i
              style={{ fontSize: '12px', marginRight: '3px' }}
              className="fa-regular fa-dollar-sign"
            ></i>
            21,03
          </OrdersFootPrice>
        </OrdersFootInner>
        <OrdersFootBtn>Continue to Payment</OrdersFootBtn>
      </OrdersFoot>
    </OrdersBox>
  );
};
