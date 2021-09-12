import styled from 'styled-components';
import colors from '../../../Assets/styles/colors';

export const FormAddLinksWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 30%;
    input {
        outline: none;
        margin-bottom: 15px;
        border: none;
        border-bottom: 1px solid ${colors.color1};
        background-color: transparent;
        padding: 10px 0;
    }

    select {
        background-color: transparent;
        border: none;
        margin-bottom: 25px;
        padding: 10px 0;
        cursor: pointer;
        outline: none;
    }

    & > button {
        padding: 10px;
        cursor: pointer;
    }
`;
