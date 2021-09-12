import styled from 'styled-components';

export const ModalWrapper = styled.section<{ isOpen: boolean }>`
    width: 100%;
    height: 100vh;
    z-index: 999;
    background-color: #dcdcdc;
    position: fixed;
    left: 0;
    top: 0;
    transition: 0.6s;
    transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100%')});

    button {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        position: relative;
        margin: 20px auto;
        cursor: pointer;
        border: none;
        background-color: transparent;
        position: fixed;
        right: 40px;
        top: 0;
        &:before {
            content: '+';
            color: black;
            position: absolute;
            z-index: 2;
            transform: rotate(45deg);
            font-size: 70px;
            line-height: 1;
            top: 0;
            left: 0;
            transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
        }
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 100%;
            background: black;
            z-index: 1;
            transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
            transform: scale(0.01);
        }

        &:hover:before {
            transform: scale(0.8) rotate(45deg);
            opacity: 0.7;
        }
    }
`;
