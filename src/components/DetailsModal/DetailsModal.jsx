import DetailsModalContent from '../DatailsModalContent/DetailsModalContent';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import css from './DetailsModal.module.css';
import sprite from '../../assets/sprite.svg';

const DetailsModal = ({ isOpen, onCloseModal, camperDetails }) => {
  return (
    <>
      <ModalWrapper modalIsOpen={isOpen} onCloseModal={onCloseModal}>
        <div className={css.scrollContainer}>
          <button className={css.closeBtn} type="button" onClick={onCloseModal}>
            <svg className={css.closeModalIcon} width="32" height="32">
              <use href={`${sprite}#icon-Close`}></use>
            </svg>
          </button>
          <DetailsModalContent camperDetails={camperDetails} />
        </div>
      </ModalWrapper>
    </>
  );
};

export default DetailsModal;
