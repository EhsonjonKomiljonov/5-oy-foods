import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import { DataNavLink } from '../../db/DataNavLinks';
import { NavLinks } from '../NavLinks/NavLinks';
import {
  LogoLink,
  Nav,
  NavList,
  SiteHeader,
  SiteHeaderInner,
  SiteHeaderLogo,
} from './header.styles';

export const Header = () => {
  return (
    <SiteHeader>
      <SiteHeaderInner>
        <LogoLink to="/">
          <SiteHeaderLogo src={Logo} alt="logo" />
        </LogoLink>
        <Nav>
          <NavList>
            {DataNavLink.map((item) => (
              <NavLinks to={item?.to} icon={item.icon} />
            ))}
          </NavList>
        </Nav>
      </SiteHeaderInner>
    </SiteHeader>
  );
};
