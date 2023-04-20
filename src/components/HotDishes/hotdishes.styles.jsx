import styled from 'styled-components';

export const HotDishesBox = styled.div`
  margin-top: 24px;
  margin-left: 5px;
  padding-right: 30px;
`;

export const FoodCardList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 522px;
  overflow: auto;
  padding-top: 68px;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #0000004c;
    background-color: #1f1d2b;
  }

  &::-webkit-scrollbar {
    width: 3px;
    background-color: #1f1d2b;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ea7c69;
    border-radius: 5px;
  }
`;


