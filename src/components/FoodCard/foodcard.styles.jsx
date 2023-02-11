import styled from 'styled-components';

export const HotDishesItem = styled.li`
  position: relative;
  display: inline-block;
  padding: 114px 24px 24px;
  background-color: #1f1d2b;
  border-radius: 16px;

  &::before {
    position: absolute;
    top: -36px;
    right: 30px;
    width: 132px;
    height: 132px;
    background-image: url(https://picsum.photos/id/1/132/132);
    border-radius: 50%;
    content: '';
  }
`;

export const HotDishesItemInner = styled.div`
  width: 100%;
  max-width: 144px;
`;

export const HotDishesCardTitle = styled.h3`
  margin: 0 0 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  text-align: center;
  color: #ffffff;
`;

export const HotDishesCardPrice = styled.ins`
  display: block;
  margin-bottom: 4px;
  text-decoration: none;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #ffffff;
`;

export const HotDishesCardHowMany = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #abbbc2;
`;
