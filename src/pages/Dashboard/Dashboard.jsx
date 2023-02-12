import React from 'react';
import {
  DashboardBox,
  DashboardDate,
  DashboardInner,
  DashboardLeft,
  DashboardLeftTop,
  DashboardRight,
  DashboardTitle,
  DashboardTotalBox,
  FilterOrder,
  IconAvatar,
  MostOrdered,
  MostOrderedBottom,
  MostOrderedCircleInfoBox,
  MostOrderedCircleInfoImg,
  MostOrderedDishesText,
  MostOrderedDishesTitle,
  MostOrderedInfoItem,
  MostOrderedInfoList,
  MostOrderedInfoStatus,
  MostOrderedInfoText,
  MostOrderedInfoTextBottom,
  MostOrderedItem,
  MostOrderedList,
  MostOrderedOption,
  MostOrderedSelect,
  MostOrderedTitle,
  MostOrderedTitleBox,
  MostOrderedTop,
  OrderBottom,
  OrderBox,
  OrderInfo,
  OrderInfoCustomer,
  OrderInfoMenu,
  OrderInfoStatus,
  OrderInfoTotalPayment,
  OrderTitle,
  OrderTop,
  SelectBefore,
  SingleTotalBox,
  SingleTotalBoxArrowBox,
  SingleTotalBoxArrowImg,
  SingleTotalBoxBottom,
  SingleTotalBoxIcon,
  SingleTotalBoxImg,
  SingleTotalBoxPercent,
  SingleTotalBoxText,
  SingleTotalBoxTitle,
  SingleTotalBoxTop,
  UserBox,
  UserMenu,
  UserName,
  UserPayment,
  Users,
  UserStatus,
  UserStatusBox,
  ViewAllButton,
} from './dashboard.styles';

import InfoCircle from '../../assets/images/DashboardInfoCircle.svg';
import { DataDashboardTotal } from '../../db/DataDashboardTotal';
import { DataDashboardOrder } from '../../db/DataDashboardOrder';

console.log(DataDashboardOrder);

export const Dashboard = () => {
  return (
    <>
      <DashboardBox>
        <DashboardInner>
          <DashboardLeft>
            <DashboardLeftTop>
              <DashboardTitle>Dashboard</DashboardTitle>
              <DashboardDate>Tuesday 2 Feb, 2021</DashboardDate>
            </DashboardLeftTop>
            <DashboardTotalBox>
              {DataDashboardTotal.map((el) => (
                <SingleTotalBox key={el.id}>
                  <SingleTotalBoxTop>
                    <SingleTotalBoxIcon>
                      <SingleTotalBoxImg
                        src={el.icon}
                        alt='icon'
                      />
                    </SingleTotalBoxIcon>
                    <SingleTotalBoxPercent>{el.percent}</SingleTotalBoxPercent>
                    <SingleTotalBoxArrowBox>
                      <SingleTotalBoxArrowImg
                        src={el.arrow}
                        alt='...'
                      />
                    </SingleTotalBoxArrowBox>
                  </SingleTotalBoxTop>
                  <SingleTotalBoxBottom>
                    <SingleTotalBoxTitle>{el.title}</SingleTotalBoxTitle>
                    <SingleTotalBoxText>{el.text}</SingleTotalBoxText>
                  </SingleTotalBoxBottom>
                </SingleTotalBox>
              ))}
            </DashboardTotalBox>
            <OrderBox>
              <OrderTop>
                <OrderTitle>Order Report</OrderTitle>
                <FilterOrder>Filter Order</FilterOrder>
              </OrderTop>
              <OrderBottom>
                <OrderInfo>
                  <OrderInfoCustomer>Customer</OrderInfoCustomer>
                  <OrderInfoMenu>Menu</OrderInfoMenu>
                  <OrderInfoTotalPayment>Total Payment</OrderInfoTotalPayment>
                  <OrderInfoStatus>Status</OrderInfoStatus>
                </OrderInfo>
                <Users>
                  {DataDashboardOrder.map((item, index) => (
                    <UserBox key={index}>
                      <IconAvatar
                        src={item.avatar}
                        alt='avatar'
                      />
                      <UserName>{item.name}</UserName>
                      <UserMenu>{item.text}</UserMenu>
                      <UserPayment>{item.payment}</UserPayment>
                      <UserStatusBox>
                        <UserStatus className={item.status}>
                          {item.status}
                        </UserStatus>
                      </UserStatusBox>
                    </UserBox>
                  ))}
                </Users>
              </OrderBottom>
            </OrderBox>
          </DashboardLeft>
          <DashboardRight>
            <MostOrdered>
              <MostOrderedTop>
                <MostOrderedTitleBox>
                  <MostOrderedTitle>Most Ordered</MostOrderedTitle>
                  <SelectBefore></SelectBefore>
                  <MostOrderedSelect>
                    <MostOrderedOption>Today</MostOrderedOption>
                  </MostOrderedSelect>
                </MostOrderedTitleBox>
                <MostOrderedList>
                  <MostOrderedItem>
                    <MostOrderedDishesTitle>
                      Spicy seasoned seafood noodles
                    </MostOrderedDishesTitle>
                    <MostOrderedDishesText>
                      200 dishes ordered
                    </MostOrderedDishesText>
                  </MostOrderedItem>
                  <MostOrderedItem>
                    <MostOrderedDishesTitle>
                      Salted pasta with mushroom sauce
                    </MostOrderedDishesTitle>
                    <MostOrderedDishesText>
                      120 dishes ordered
                    </MostOrderedDishesText>
                  </MostOrderedItem>
                  <MostOrderedItem>
                    <MostOrderedDishesTitle>
                      Beef dumpling in hot and sour soup
                    </MostOrderedDishesTitle>
                    <MostOrderedDishesText>
                      80 dishes ordered
                    </MostOrderedDishesText>
                  </MostOrderedItem>
                </MostOrderedList>
                <ViewAllButton>View All</ViewAllButton>
              </MostOrderedTop>
              <MostOrderedBottom>
                <MostOrderedTitleBox>
                  <MostOrderedTitle>Most Type of Order</MostOrderedTitle>
                  <SelectBefore></SelectBefore>
                  <MostOrderedSelect>
                    <MostOrderedOption>Today</MostOrderedOption>
                  </MostOrderedSelect>
                </MostOrderedTitleBox>
                <MostOrderedCircleInfoBox>
                  <MostOrderedCircleInfoImg src={InfoCircle} />
                  <MostOrderedInfoList>
                    <MostOrderedInfoItem>
                      <MostOrderedInfoStatus className='pink'></MostOrderedInfoStatus>
                      <MostOrderedInfoText>Dine In</MostOrderedInfoText>
                      <MostOrderedInfoTextBottom>
                        200 customers
                      </MostOrderedInfoTextBottom>
                    </MostOrderedInfoItem>
                    <MostOrderedInfoItem>
                      <MostOrderedInfoStatus className='orange'></MostOrderedInfoStatus>
                      <MostOrderedInfoText>To Go</MostOrderedInfoText>
                      <MostOrderedInfoTextBottom>
                        122 customers
                      </MostOrderedInfoTextBottom>
                    </MostOrderedInfoItem>
                    <MostOrderedInfoItem>
                      <MostOrderedInfoStatus className='blue'></MostOrderedInfoStatus>
                      <MostOrderedInfoText>Delivery</MostOrderedInfoText>
                      <MostOrderedInfoTextBottom>
                        264 customers
                      </MostOrderedInfoTextBottom>
                    </MostOrderedInfoItem>
                  </MostOrderedInfoList>
                </MostOrderedCircleInfoBox>
              </MostOrderedBottom>
            </MostOrdered>
          </DashboardRight>
        </DashboardInner>
      </DashboardBox>
    </>
  );
};
