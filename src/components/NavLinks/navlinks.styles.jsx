import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// ICONS

import Home from '../../assets/images/home-icon.svg';
import Icon2 from '../../assets/images/nav-icon2.svg';
import Icon3 from '../../assets/images/nav-icon3.svg';
import Icon4 from '../../assets/images/nav-icon4.svg';
import Icon5 from '../../assets/images/nav-icon5.svg';
import settingIcon from '../../assets/images/settings-icon.svg';
import exitIcon from '../../assets/images/exit-icon.svg';

// ACTIVE ICONS

import HomeActive from '../../assets/images/home-iconactive.svg';
import Icon2Active from '../../assets/images/nav-icon2active.svg';
import Icon3Active from '../../assets/images/nav-icon3active.svg';
import Icon4Active from '../../assets/images/nav-icon4active.svg';
import Icon5Active from '../../assets/images/nav-icon5active.svg';
import settingIconActive from '../../assets/images/settings-iconactive.svg';
import exitIconActive from '../../assets/images/exit-iconactive.svg';

export const NavLinkItem = styled.li`
  position: relative;
  margin-bottom: 10px;

  /* &:nth-child(1) > a > span:nth-child(1)::before {
    border-top-right-radius: 0;
  }

  &:nth-child(7) > a > span:nth-child(3)::before {
    border-bottom-right-radius: 12px;
  }

  &:nth-child(7) {
    margin: 0;
  } */

  /* ACTIVE STYLES */

  & > a.active > span:nth-child(1) {
    position: absolute;
    top: -10px;
    left: 0;
    display: block;
    width: 100%;
    height: 10px;
    background-color: #252836;
    box-shadow: 0 0 0 transparent;
  }

  & > a.active > span:nth-child(1)::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #1f1d2b;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 0;
    content: '';
  }

  & > a.active > span:nth-child(3) {
    position: absolute;
    bottom: -20px;
    left: 0;
    display: block;
    width: 100%;
    height: 20px;
    background-color: #252836;
    box-shadow: 0 0 0 transparent;
  }

  & > a.active > span:nth-child(3)::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #1f1d2b;
    border-top-right-radius: 12px;
    content: '';
  }

  /* ACTIVE STYLES */

  /* ICONS */

  &:nth-child(1) > a > span:nth-child(2) {
    background-image: url(${Home});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:nth-child(2) > a > span:nth-child(2) {
    background-image: url(${Icon2});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:nth-child(3) > a > span:nth-child(2) {
    background-image: url(${Icon3});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:nth-child(4) > a > span:nth-child(2) {
    background-image: url(${Icon4});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:nth-child(5) > a > span:nth-child(2) {
    background-image: url(${Icon5});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:nth-child(6) > a > span:nth-child(2) {
    background-image: url(${settingIcon});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:nth-child(7) > a > span:nth-child(2) {
    background-image: url(${exitIcon});
    background-repeat: no-repeat;
    background-position: center;
  }

  /* ICONS */

  /* ACTIVE ICONS */

  &:nth-child(1) > a.active > span:nth-child(2) {
    background-image: url(${HomeActive});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:nth-child(2) > a.active > span:nth-child(2) {
    background-image: url(${Icon2Active});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:nth-child(3) > a.active > span:nth-child(2) {
    background-image: url(${Icon3Active});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:nth-child(4) > a.active > span:nth-child(2) {
    background-image: url(${Icon4Active});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:nth-child(5) > a.active > span:nth-child(2) {
    background-image: url(${Icon5Active});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:nth-child(6) > a.active > span:nth-child(2) {
    background-image: url(${settingIconActive});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:nth-child(7) > .active > span:nth-child(2) {
    background-image: url(${exitIconActive});
    background-repeat: no-repeat;
    background-position: center;
  }

  /* ACTIVE ICONS */
`;

export const NavLinkStyle = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-right: 24px;
  padding-left: 12px;
  background-color: #1f1d2b;
  border-radius: 12px 0px 0px 12px;

  &.active {
    background-color: #252836;
  }

  &.active > span {
    background-color: #ea7c69;
    box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);
  }
`;

export const NavLinkImg = styled.span`
  display: inline-block;
  padding: 28px;
  background-color: transparent;
  box-shadow: 0 0 0 transparent;
  border-radius: 8px;
`;

export const NavLinkActiveStyle = styled.span`
  display: none;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100%;
    background-color: #1f1d2b;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 0;
    content: '';
  }
`;

export const NavLinkActiveStyle2 = styled.span`
  display: none;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: none;
    width: 100%;
    height: 100%;
    background-color: #1f1d2b;
    border-top-right-radius: 0;
    border-bottom-right-radius: 12px;
    content: '';
  }
`;
