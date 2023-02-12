import styled from 'styled-components';
import FilterIcon from '../../assets/images/FilterOrderIcon.svg';
import ArrowDownSelect from '../../assets/images/arrow-down.svg';
import MostOrderedFood1 from '../../assets/images/DashboardMostOrdered.png';
import MostOrderedFood2 from '../../assets/images/DashboardMostOrdered2.png';
import MostOrderedFood3 from '../../assets/images/DashboardMostOrdered3.png';
export const DashboardBox = styled.div``;

export const DashboardInner = styled.div`
  display: flex;
`;

export const DashboardLeft = styled.div`
  width: 100%;
  margin-left: 24px;
  margin-top: 24px;
`;

export const DashboardRight = styled.div`
  margin-left: 24px;
`;

export const DashboardLeftTop = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid #393c49;
  margin-bottom: 20px;
`;

export const DashboardTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 140%;
  color: #ffffff;
  margin: 0;
  margin-bottom: 4px;
`;

export const DashboardDate = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #abbbc2;
`;

export const DashboardTotalBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SingleTotalBox = styled.div`
  padding: 16px;
  background-color: #1f1d2b;
  border-radius: 8px;
  color: white;
  &:nth-child(1) {
    color: #50d1aa;
  }

  &:nth-child(2) {
    color: #ff7ca3;
  }
  &:nth-child(3) {
    color: #50d1aa;
  }
`;

export const SingleTotalBoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 163px;
`;

export const SingleTotalBoxIcon = styled.span``;

export const SingleTotalBoxImg = styled.img`
  padding: 7px;
  background-color: #252836;
  border-radius: 8px;
`;

export const SingleTotalBoxPercent = styled.span``;

export const SingleTotalBoxArrowBox = styled.span``;

export const SingleTotalBoxArrowImg = styled.img`
  padding: 2px;
  background: rgba(136, 224, 145, 0.24);
  border-radius: 20px;
`;

export const SingleTotalBoxBottom = styled.div``;

export const SingleTotalBoxTitle = styled.h2`
  color: #ffffff;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const SingleTotalBoxText = styled.p`
  color: #abbbc2;
`;

export const OrderBox = styled.div`
  color: #fff;
  background-color: #1f1d2b;
  border-radius: 8px;
  margin-top: 24px;
  height: 460px;
  padding: 24px 16px 0px 16px;
`;

export const OrderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const OrderTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
`;

export const FilterOrder = styled.button`
  border: none;
  background-color: transparent;
  color: #fff;
  border: 1px solid #393c49;
  border-radius: 8px;
  position: relative;
  padding: 13px 14px 13px 44px;

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    left: 15px;
    top: 9px;
    background-image: url(${FilterIcon});
  }
`;

export const OrderBottom = styled.div``;

export const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #393c49;
  margin-bottom: 16px;
`;

export const OrderInfoCustomer = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  flex-grow: 1;
`;

export const OrderInfoMenu = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  flex-grow: 2;
`;

export const OrderInfoTotalPayment = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  flex-grow: 3;
`;

export const OrderInfoStatus = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  flex-grow: 1;
`;

export const Users = styled.div`
  height: 300px;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #000000;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb:active {
    background: rgba(255, 255, 255, 0.9);
  }
  overflow: auto;
`;

export const UserBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e0e6e9;
  margin-top: 10px;
`;

export const IconAvatar = styled.img`
  object-fit: contain;
`;

export const UserName = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  width: 90px;
  flex-grow: 2;
  margin-left: 16px;
`;

export const UserMenu = styled.p`
  width: 137px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  margin-right: 109px;

  @media screen and (min-width: 1630px) {
    margin-right: 209px;
  }
`;

export const UserPayment = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  width: 27px;
  flex-grow: 13;
`;

export const UserStatusBox = styled.div`
  width: 185px;
`;

export const UserStatus = styled.button`
  &.Completed {
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    color: #50d1aa;
    background-color: rgba(107, 226, 190, 0.24);
    border-radius: 30px;
    border: none;
    padding: 4px 12px;
  }

  &.Preparing {
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    color: #9290fe;
    background-color: rgba(146, 144, 254, 0.2);
    border-radius: 30px;
    border: none;
    padding: 4px 12px;
  }

  &.Pending {
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    color: #ffb572;
    background: rgba(255, 181, 114, 0.2);
    border-radius: 30px;
    border: none;
    padding: 4px 12px;
  }
`;

export const MostOrdered = styled.div`
  position: fixed;
  right: 0;
  background-color: #252836;
`;

export const MostOrderedTop = styled.div`
  width: 372px;
  border-radius: 8px;
  padding: 15px;
  background-color: #1f1d2b;
  margin-top: 24px;
`;

export const MostOrderedBottom = styled.div`
  width: 372px;
  border-radius: 8px;
  padding: 15px;
  background-color: #1f1d2b;
  margin-top: 15px;
`;

export const MostOrderedTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #393c49;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const MostOrderedTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #fff;
`;

export const MostOrderedSelect = styled.select`
  border: 1px solid #393c49;
  border-radius: 8px;
  background-color: #1f1d2b;
  padding: 13px 14px 13px 44px;
  color: #fff;
  appearance: none;
  position: relative;
  &:focus {
    outline: none;
  }
`;

export const SelectBefore = styled.span`
  position: absolute;
  right: calc(50% - 285px);
  display: inline-block;
  width: 20px;
  height: 20px;
  left: 265px;
  z-index: 3;
  background-image: url(${ArrowDownSelect});
`;

export const MostOrderedOption = styled.option``;

export const MostOrderedList = styled.ul``;

export const MostOrderedItem = styled.li`
  width: 286px;
  position: relative;

  &:nth-child(1) {
    &::before {
      content: '';
      background-image: url(${MostOrderedFood1});
      position: absolute;
      width: 56px;
      height: 56px;
    }
  }

  &:nth-child(2) {
    &::before {
      content: '';
      background-image: url(${MostOrderedFood2});
      position: absolute;
      width: 56px;
      height: 56px;
    }
    margin-bottom: 28px;
    margin-top: 28px;
  }

  &:nth-child(3) {
    &::before {
      content: '';
      background-image: url(${MostOrderedFood3});
      position: absolute;
      width: 56px;
      height: 56px;
    }
  }
`;

export const MostOrderedDishesTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #e0e6e9;
  margin: 0;
  margin-left: 72px;
`;

export const MostOrderedDishesText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #abbbc2;
  margin-left: 72px;
`;

export const ViewAllButton = styled.button`
  border: 1px solid #ea7c69;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #ea7c69;
  padding: 14px 134px;
  background-color: transparent;
  margin-top: 49px;

  &:hover {
    transition: background-color 0.5s;
    background: #ea7c69;
    box-shadow: 0px 8px 24px rgba(146, 136, 224, 0.3);
    color: white;
  }
`;

export const MostOrderedCircleInfoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const MostOrderedCircleInfoImg = styled.img``;

export const MostOrderedInfoList = styled.ul``;

export const MostOrderedInfoItem = styled.li`
  display: flex;
  width: 105px;
  flex-wrap: wrap;
  color: #fff;
  margin-left: 27px;
  margin-top: 16px;

  &:nth-child(1) {
    margin-top: 0;
  }
`;

export const MostOrderedInfoStatus = styled.span`
  display: block;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  margin-right: 9px;

  &.pink {
    background-color: #ff7ca3;
  }

  &.orange {
    background-color: #ffb572;
  }
  &.blue {
    background-color: #65b0f6;
  }
`;

export const MostOrderedInfoText = styled.span``;

export const MostOrderedInfoTextBottom = styled.span`
  color: #abbbc2;
`;
