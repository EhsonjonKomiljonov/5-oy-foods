import styled from 'styled-components';
import ArrowDown from '../../assets/images/arrow-down.svg';

export const ChooseDishesBoxInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 20px;
  padding: 0 30px 0 5px;
`;

export const ChooseDishesTitle = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`;

export const ChooseDishesArrowSpan = styled.span`
  position: absolute;
  right: calc(50% - 250px);
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url(${ArrowDown});
`;

export const ChooseDishesSelect = styled.select`
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

export const ChooseDishesOptions = styled.option``;
