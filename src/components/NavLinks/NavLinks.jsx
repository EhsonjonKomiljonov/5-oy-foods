import { useState } from 'react';
import {
  NavLinkActiveStyle,
  NavLinkActiveStyle2,
  NavLinkImg,
  NavLinkItem,
  NavLinkStyle,
} from './navlinks.styles';

export const NavLinks = ({ to }) => {
  return (
    <NavLinkItem>
      <NavLinkStyle
        to={to}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <NavLinkActiveStyle></NavLinkActiveStyle>
        <NavLinkImg></NavLinkImg>
        <NavLinkActiveStyle2></NavLinkActiveStyle2>
      </NavLinkStyle>
    </NavLinkItem>
  );
};
