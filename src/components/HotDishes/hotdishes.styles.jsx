import styled from 'styled-components';
import ArrowDown from '../../assets/images/arrow-down.svg';

export const HotDishesBox = styled.div`
  margin-top: 24px;
  margin-left: 5px;
`;

export const HotDishesBoxInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HotDishesTitle = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`;

export const HotDishesArrowSpan = styled.span`
  position: absolute;
  right: calc(50% - 285px);
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url(${ArrowDown});
`;

export const HotDishesSelect = styled.select`
  padding: 15px 15px 15px 44px;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #ffffff;
  background-color: #1f1d2b;
  border: 1px solid #393c49;
  border-radius: 8px;
  outline: none;
  appearance: none;
  cursor: pointer;
`;

export const HotDishesOptions = styled.option``;

export const HotDishesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 68px;
`;

export const HotDishesLoadingStyle = styled.h2`
  font-size: 40px;
  text-align: center;
  color: #ea7c69;
`;
