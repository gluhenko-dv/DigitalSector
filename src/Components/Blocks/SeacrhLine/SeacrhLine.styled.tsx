import styled from 'styled-components';
import colors from '../../../Assets/styles/colors';

export const SeacrhLineWrapper = styled.div`
    width: 90%;
    input {
        border: none;
        outline: none;
        background-color: transparent;
        border-bottom: 1px solid ${colors.color1};
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px 11px;
    }
`;
