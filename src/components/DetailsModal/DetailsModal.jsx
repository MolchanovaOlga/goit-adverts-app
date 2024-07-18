import DetailsModalContent from "../DatailsModalContent/DetailsModalContent";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import css from "./DetailsModal.module.css";

const DetailsModal = ({ isOpen, onCloseModal }) => {
  return (
    <>
      <ModalWrapper modalIsOpen={isOpen} onCloseModal={onCloseModal}>
        <div className={css.scrollContainer}>
          <DetailsModalContent />
        </div>
      </ModalWrapper>
    </>
  );
};

export default DetailsModal;
