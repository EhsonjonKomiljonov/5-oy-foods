import styled from 'styled-components';
import ModalClose from '../../assets/images/modal-close.svg';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);

  &.open {
    display: flex;
  }
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 514px;
  height: auto;
  padding: 32px 30px;
  background-color: #1f1d2b;
  border-radius: 8px;
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 23px;
  border: 0;
  background-color: transparent;
  background-image: url(${ModalClose});
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  border: 1.8px solid #393c49;
  border-radius: 8px;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  margin: 0 0 32px;
  font-weight: 600;
  font-size: 28px;
  line-height: 140%;
  color: #ffffff;
`;

export const ModalContent = styled.div``
