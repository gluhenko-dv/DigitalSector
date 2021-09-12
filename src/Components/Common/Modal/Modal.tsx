import { ModalCloseBtn, ModalWrapper } from './Modal.styled';

interface ModalProps {
    isOpen: boolean;
    setModalOpen: (status: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen = false, setModalOpen, children }) => {
    const clickHandler = () => {
        setModalOpen(false);
    };

    return (
        <ModalWrapper isOpen={isOpen}>
            <ModalCloseBtn onClick={clickHandler} />
            {children}
        </ModalWrapper>
    );
};

export default Modal;
