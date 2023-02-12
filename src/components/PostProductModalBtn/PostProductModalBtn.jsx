import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { PostProductModalBtnStyle } from './post-product-modal-btn.styles';
import { Modal } from '../../components/Modal/Modal';
import { ProductPostForm } from '../ProductPostForm/ProductPostForm';

export const PostProductModalBtn = () => {
  const { modal, setModal } = useContext(ModalContext);

  return (
    <>
      <PostProductModalBtnStyle
        onClick={() => setModal(!modal)}
      ></PostProductModalBtnStyle>
      {modal ? (
        <Modal
          title="Add new product item to list"
          modal={modal}
          setModal={setModal}
        >
          <ProductPostForm />
        </Modal>
      ) : (
        ''
      )}
    </>
  );
};
