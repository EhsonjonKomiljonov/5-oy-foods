import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SiteHeader = styled.header`
  position: fixed;
  left: 0;
  display: inline-block;
  padding: 24px 0 24px 12px;
  background-color: #1f1d2b;
  border-radius: 16px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const LogoLink = styled(Link)`
  display: inline-block;
  background-color: rgba(235, 150, 106, 0.26);
  border-radius: 12px;
  margin-right: 24px;
  margin-left: 12px;
  padding: 8px;
`;

export const SiteHeaderInner = styled.div``;

export const SiteHeaderLogo = styled.img``;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  margin-top: 26px;
`;
