import { Field } from 'formik';
import styled from 'styled-components';
import ArrowDown from '../../assets/images/arrow-down.svg';
import FileUpload from '../../assets/images/file-upload.svg';

export const InputPostProductBox = styled.div`
  position: relative;
  & + & {
    margin-top: 20px;
  }
`;

export const InputPostProduct = styled(Field)`
  display: block;
  width: 100%;
  padding: 14px 14px 11px;
  background-color: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  outline: none;
  color: #e0e6e9;

  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    color: #e0e6e9;
  }

  &:focus {
    outline: 2px solid #393c49;
  }
`;

export const InputErrorMessage = styled.span`
  display: block;
  font-size: 14px;
  margin-top: 2px;
  color: #ea7c69;
`;

export const SelectArrowDownImg = styled.span`
  position: absolute;
  top: 14px;
  left: 14px;
  width: 20px;
  height: 20px;
  background-image: url(${ArrowDown});
  background-repeat: no-repeat;
  outline: none;
`;

export const SelectPostProduct = styled.select`
  width: 100%;
  padding: 14px;
  padding-left: 44px;
  background-color: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #e0e6e9;
  appearance: none;

  outline: none;

  &:focus {
    outline: 2px solid #393c49;
  }
`;

export const OptionPostProduct = styled.option``;

export const FileUploadLabel = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  padding: 101px 0 17px;
  background-image: url(${FileUpload});
  background-repeat: no-repeat;
  background-position: top 60px center;
  background-color: #2d303e;
  border: 1px dashed #ea7c69;
  border-radius: 8px;
  cursor: pointer;
`;

export const FileUploadInput = styled.input`
  display: none;
`;

export const FileUploadLabelDesc = styled.p`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #ea7c69;
`;

export const FileUploadLabelText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #abbbc2;
`;

export const FileUploadName = styled.span`
  display: block;
  margin-top: 5px;
  text-align: center;
  color: #fff;
`;

export const PostProductBtnsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
`;

export const PostProductCancelBtn = styled.button`
  width: 217px;
  padding: 14px 87px;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #fafafa;
  background-color: transparent;
  border: 1px solid #ea7c69;
  box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.4);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  
  &:hover {
    background-color: #ea7c69;
    border: 1px solid transparent;
  }
`;

export const PostProductAddBtn = styled.button`
  width: 217px;
  padding: 14px 96px;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #fafafa;
  background-color: #ea7c69;
  box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.4);
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    background-color: transparent;
    border: 1px solid #ea7c69;
  }
`;
