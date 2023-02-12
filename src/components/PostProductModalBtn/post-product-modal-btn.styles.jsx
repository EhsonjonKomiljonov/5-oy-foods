import styled from 'styled-components';
import PlusIcon from '../../assets/images/plus-icon.svg';

export const PostProductModalBtnStyle = styled.button`
  width: 221px;
  padding: 167px 0 110px;
  background-color: #1f1d2b;
  background-image: url(${PlusIcon});
  background-repeat: no-repeat;
  background-position: top 127px center;
  border: 1px dashed #ea7c69;
  border-radius: 8px;
  cursor: pointer;

  &::before {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    color: #ea7c69;
    content: 'Add new dish';
  }
`;
