import styled from 'styled-components';
import DeleteIcon from '../../assets/images/delete-icon.svg';

export const OrderCardItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;

export const OrderCardTopBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const OrderCardImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

export const OrderCardTopBoxInner = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 100px;
  margin-right: auto;
  margin-left: 6px;
`;

export const OrderCardFoodName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #ffffff;
`;

export const OrderCardFoodPrice = styled.ins`
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  text-decoration: none;
  color: #abbbc2;
`;

export const OrderCardCount = styled.span`
  width: 40px;
  margin-right: 15px;
  padding: 8px 0;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
`;

export const OrderCardMainPrice = styled.ins`
  width: 50px;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  text-decoration: none;
  text-align: right;
  color: #ffffff;
`;

export const OrderCardBottomBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderCardInput = styled.input`
  width: 100%;
  padding: 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #e0e6e9;
  background-color: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  &::placeholder {
    color: #889898;
  }
`;

export const OrderCardDeleteBtn = styled.button`
  width: 59px !important;
  height: 48px;
  margin-left: 15px;
  padding: 0;
  border: 1px solid #ff7ca3;
  border-radius: 8px;
  background-color: transparent;
  background-image: url(${DeleteIcon});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
