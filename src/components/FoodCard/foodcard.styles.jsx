import styled from 'styled-components';

export const HotDishesItem = styled.li`
  position: relative;
  display: inline-block;
  margin-bottom: 58px;
  margin-right: 48px;
  margin-left: 48px;
  padding: 114px 35px 35px;
  background-color: #1f1d2b;
  border-radius: 16px;

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    margin-top: 0;
  }
`;

export const HotDishesItemImg = styled.img`
  position: absolute;
  top: -36px;
  right: 20px;
  width: 132px;
  height: 132px;
  border-radius: 50%;
  animation: rotation 15s linear infinite;
  content: '';

  @keyframes rotation {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(360deg);
    }
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
