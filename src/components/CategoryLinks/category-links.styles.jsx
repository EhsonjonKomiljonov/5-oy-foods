import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryLinksNavbarBox = styled.div``;

export const CategoryLinksNavbar = styled.nav``;

export const CategoryLinksNavbarList = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 24px;
  padding-bottom: 13px;
  border-bottom: 1px solid #393c49;
`;

export const CategoryLinksNavbarItem = styled.li`
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

export const CategoryLinksNavbarLink = styled(NavLink)`
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
