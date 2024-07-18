import DetailsModalContent from "../DatailsModalContent/DetailsModalContent";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const DetailsModal = ({ isOpen, onCloseModal }) => {
  return (
    <>
      <ModalWrapper modalIsOpen={isOpen} onCloseModal={onCloseModal}>
        <DetailsModalContent />
      </ModalWrapper>
    </>
  );
};

export default DetailsModal;
