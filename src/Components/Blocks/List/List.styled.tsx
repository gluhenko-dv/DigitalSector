import styled from 'styled-components';
import colors from '../../../Assets/styles/colors';

export const ListWrapper = styled.div`
    width: 85%;
    border-left: 1px solid ${colors.color1};

    ul {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
        padding: 10px;
        border-bottom: 1px solid ${colors.color1};
        width: 100%;
        display: flex;
        justify-content: space-between;
        transition: 0.4s;

        span {
            font-weight: 600;
        }
        &:hover {
            background-color: ${colors.color2};
        }
    }
`;

export const ListHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
        cursor: pointer;
    }
`;
