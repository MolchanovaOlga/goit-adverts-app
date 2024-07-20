import Modal from 'react-modal';
import css from './ModalWrapper.module.css';

Modal.setAppElement('#root');

const ModalWrapper = ({ children, modalIsOpen, onCloseModal }) => {
  const customStyles = {
    content: {
      top: '5%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, 0)',
      padding: '0',
      borderRadius: '15px',
    },
    overlay: {
      backgroundColor: 'rgba(47, 47, 47, 0.6)',
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Modal Details"
    >
      <div className={css.modalContent}>{children}</div>
    </Modal>
  );
};

export default ModalWrapper;
