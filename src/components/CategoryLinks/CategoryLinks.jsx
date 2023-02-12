import {
  CategoryLinksNavbar,
  CategoryLinksNavbarBox,
  CategoryLinksNavbarItem,
  CategoryLinksNavbarLink,
  CategoryLinksNavbarList,
} from './category-links.styles';

export const CategoryLinks = () => {
  return (
    <CategoryLinksNavbarBox>
      <CategoryLinksNavbar>
        <CategoryLinksNavbarList>
          <CategoryLinksNavbarItem>
            <CategoryLinksNavbarLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="hot-dishes"
            >
              Hot Dishes
            </CategoryLinksNavbarLink>
          </CategoryLinksNavbarItem>
          <CategoryLinksNavbarItem>
            <CategoryLinksNavbarLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="cold-dishes"
            >
              Cold Dishes
            </CategoryLinksNavbarLink>
          </CategoryLinksNavbarItem>
          <CategoryLinksNavbarItem>
            <CategoryLinksNavbarLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="soup"
            >
              Soup
            </CategoryLinksNavbarLink>
          </CategoryLinksNavbarItem>
          <CategoryLinksNavbarItem>
            <CategoryLinksNavbarLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="grill"
            >
              Grill
            </CategoryLinksNavbarLink>
          </CategoryLinksNavbarItem>
          <CategoryLinksNavbarItem>
            <CategoryLinksNavbarLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="appetizer"
            >
              Appetizer
            </CategoryLinksNavbarLink>
          </CategoryLinksNavbarItem>
          <CategoryLinksNavbarItem>
            <CategoryLinksNavbarLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="dessert"
            >
              Dessert
            </CategoryLinksNavbarLink>
          </CategoryLinksNavbarItem>
        </CategoryLinksNavbarList>
      </CategoryLinksNavbar>
    </CategoryLinksNavbarBox>
  );
};
