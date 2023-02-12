import { CategoryLinks } from '../CategoryLinks/CategoryLinks';
import {
  HomeHeaderBox,
  HomeHeaderBoxContent,
  HomeHeaderBoxInner,
  HomeHeaderDesc,
  HomeHeaderForm,
  HomeHeaderInput,
  HomeHeaderLabel,
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
      <CategoryLinks />
    </HomeHeaderBox>
  );
};
