import styled from 'styled-components';
import colors from '../../../Assets/styles/colors';

export const СategoriesWrapper = styled.nav`
    width: 15%;
    height: 100%;
    border-bottom: 1px solid ${colors.color1};
    li {
        cursor: pointer;
        list-style: none;
        border-top: 1px solid ${colors.color1};
        padding: 10px 0;
        box-sizing: border-box;
        transition: 0.4s;
        &:hover {
            background-color: ${colors.color2};
        }
    }
`;
