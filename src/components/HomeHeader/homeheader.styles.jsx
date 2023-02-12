import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../../assets/images/search-icon.svg';

export const HomeHeaderBox = styled.div`
  padding-top: 13px;
`;

export const HomeHeaderBoxInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HomeHeaderBoxContent = styled.div`
  margin-left: 4px;
`;

export const HomeHeaderTitle = styled.h1`
  margin: 0 0 4px;
  font-weight: 600;
  font-size: 28px;
  line-height: 140%;
  color: #ffffff;
`;

export const HomeHeaderDesc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #e0e6e9;
`;

export const HomeHeaderForm = styled.form`
  position: relative;
`;

export const HomeHeaderLabel = styled.label`
  &::before {
    position: absolute;
    top: 14px;
    left: 14px;
    width: 20px;
    height: 20px;
    background-image: url(${Search});
    background-position: center;
    content: '';
  }
`;

export const HomeHeaderInput = styled.input`
  padding: 14px 14px 14px 42px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #abbbc2;
  background-color: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;

  &:focus {
    outline: 2px solid #abbbc233;
  }
`;

export const HomeHeaderNavbarBox = styled.div``;

export const HomeHeaderNavbar = styled.nav``;

export const HomeHeaderNavbarList = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 24px;
  padding-bottom: 13px;
  border-bottom: 1px solid #393c49;
`;

export const HomeHeaderNavbarItem = styled.li`
  & + & {
    margin-left: 32px;
  }

  &:nth-child(1) > a.active::before {
    position: absolute;
    bottom: -16px;
    width: 40px;
    height: 3px;
    background-color: #ea7c69;
    border-radius: 2px;
    content: '';
  }

  &:nth-child(2) > a.active::before {
    position: absolute;
    bottom: -16px;
    width: 40px;
    height: 3px;
    background-color: #ea7c69;
    border-radius: 2px;
    content: '';
  }

  &:nth-child(3) > a.active::before {
    position: absolute;
    bottom: -16px;
    width: 20px;
    height: 3px;
    background-color: #ea7c69;
    border-radius: 2px;
    content: '';
  }

  &:nth-child(4) > a.active::before {
    position: absolute;
    bottom: -16px;
    width: 15px;
    height: 3px;
    background-color: #ea7c69;
    border-radius: 2px;
    content: '';
  }

  &:nth-child(5) > a.active::before {
    position: absolute;
    bottom: -16px;
    width: 40px;
    height: 3px;
    background-color: #ea7c69;
    border-radius: 2px;
    content: '';
  }

  &:nth-child(6) > a.active::before {
    position: absolute;
    bottom: -16px;
    width: 35px;
    height: 3px;
    background-color: #ea7c69;
    border-radius: 2px;
    content: '';
  }
`;

export const HomeHeaderNavbarLink = styled(NavLink)`
  position: relative;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #ffffff;
  transition: all 0.3s ease;

  &.active {
    color: #ea7c69;
  }
`;
