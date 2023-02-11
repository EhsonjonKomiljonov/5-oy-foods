import {
  HomeHeaderBox,
  HomeHeaderBoxContent,
  HomeHeaderBoxInner,
  HomeHeaderDesc,
  HomeHeaderForm,
  HomeHeaderInput,
  HomeHeaderLabel,
  HomeHeaderNavbar,
  HomeHeaderNavbarBox,
  HomeHeaderNavbarItem,
  HomeHeaderNavbarLink,
  HomeHeaderNavbarList,
  HomeHeaderTitle,
} from './homeheader.styles';

export const HomeHeader = () => {
  return (
    <HomeHeaderBox>
      <HomeHeaderBoxInner>
        <HomeHeaderBoxContent>
          <HomeHeaderTitle>Jaegar Resto</HomeHeaderTitle>
          <HomeHeaderDesc>Tuesday, 2 Feb 2021</HomeHeaderDesc>
        </HomeHeaderBoxContent>
        <HomeHeaderForm>
          <HomeHeaderLabel>
            <HomeHeaderInput
              type="text"
              placeholder="Search for food, coffe, etc.."
            />
          </HomeHeaderLabel>
        </HomeHeaderForm>
      </HomeHeaderBoxInner>
      <HomeHeaderNavbarBox>
        <HomeHeaderNavbar>
          <HomeHeaderNavbarList>
            <HomeHeaderNavbarItem>
              <HomeHeaderNavbarLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to="hot-dishes"
              >
                Hot Dishes
              </HomeHeaderNavbarLink>
            </HomeHeaderNavbarItem>
            <HomeHeaderNavbarItem>
              <HomeHeaderNavbarLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to="cold-dishes"
              >
                Cold Dishes
              </HomeHeaderNavbarLink>
            </HomeHeaderNavbarItem>
            <HomeHeaderNavbarItem>
              <HomeHeaderNavbarLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to="soup"
              >
                Soup
              </HomeHeaderNavbarLink>
            </HomeHeaderNavbarItem>
            <HomeHeaderNavbarItem>
              <HomeHeaderNavbarLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to="grill"
              >
                Grill
              </HomeHeaderNavbarLink>
            </HomeHeaderNavbarItem>
            <HomeHeaderNavbarItem>
              <HomeHeaderNavbarLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to="appetizer"
              >
                Appetizer
              </HomeHeaderNavbarLink>
            </HomeHeaderNavbarItem>
            <HomeHeaderNavbarItem>
              <HomeHeaderNavbarLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to="dessert"
              >
                Dessert
              </HomeHeaderNavbarLink>
            </HomeHeaderNavbarItem>
          </HomeHeaderNavbarList>
        </HomeHeaderNavbar>
      </HomeHeaderNavbarBox>
    </HomeHeaderBox>
  );
};
