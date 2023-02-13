import styled from 'styled-components';

export const OrdersBox = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 409px;
  margin-left: 46px;
  padding: 24px 0;
  background-color: #1f1d2b;
  border-radius: 8px;
`;

export const OredersHeader = styled.div``;

export const OredersTitle = styled.h2`
  margin: 0;
  padding: 0 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`;

export const OrdersHeaderBtnsBox = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 0 24px;
`;

export const OrderHeaderBtnsBoxInner = styled.span``;

export const OrderActiveBtnInput = styled.input`
  display: none;

  &:checked ~ label {
    color: #ffffff;
    background-color: #ea7c69;
  }
`;

export const OrdersBtns = styled.label`
  margin-right: 8px;
  padding: 7px 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #ea7c69;
  background-color: transparent;
  border: 1px solid #393c49;
  border-radius: 8px;
  cursor: pointer;
`;

export const OrdersBodyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 24px;
  border-bottom: 1px solid #393c49;
`;

export const OrdersBodyHeaderDesc = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;

  & + & {
    margin-left: 43px;
  }
`;

export const OrdersBodyHeaderInner = styled.div`
  display: flex;
  align-items: center;
`;

export const OrdersBodyList = styled.ul``;

export const OrdersFoot = styled.div`
  padding: 24px 24px 0;
  border-top: 1px solid #393c49;
`;

export const OrdersFootInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 19px;
  }
`;

export const OrdersFootTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #abbbc2;
`;

export const OrdersFootPrice = styled.ins`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  text-align: right;
  color: #ffffff;
`;

export const OrdersFootBtn = styled.button`
  width: 361px;
  margin-top: 42px;
  padding: 14px 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #fafafa;
  background-color: #ea7c69;
  box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.3);
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all .3s cubic-bezier(0.23, 1, 0.320, 1);

  &:hover {
    background-color: transparent;
    border: 1px solid #ea7c69;
  }
`;
