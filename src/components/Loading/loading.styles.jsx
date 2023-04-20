import styled from 'styled-components';
import LoadingFood from '../../assets/images/loading-food.svg';

export const DataLoadingStyle = styled.span`
  position: absolute;
  top: ${(props) => props.topPx};
  right: ${(props) => props.rightPx};
  width: ${(props) => props.widthPx} !important;
  height: ${(props) => props.heightPx} !important;
  background-image: url(${LoadingFood});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
`;
