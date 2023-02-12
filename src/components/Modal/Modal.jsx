import {
  ModalWrapper,
  ModalOverlay,
  ModalCloseBtn,
  ModalTitle,
  ModalContent,
} from './modal.styles';
import { useRef } from 'react';

export const Modal = ({ modal, setModal, children, title }) => {
  const overlayRef = useRef();

  const handleOverlay = (evt) => {
    if (evt.target === overlayRef.current) {
      setModal(false);
    }
  };

  return (
    <ModalOverlay
      ref={overlayRef}
      onClick={(evt) => handleOverlay(evt)}
      className={modal ? 'open' : ''}
    >
      <ModalWrapper>
        <ModalCloseBtn onClick={() => setModal(false)}></ModalCloseBtn>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    </ModalOverlay>
  );
};
