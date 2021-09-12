import styled from 'styled-components';
import colors from '../../../Assets/styles/colors';

export const HeaderWrap = styled.header`
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background-color: ${colors.color2};
`;

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 30px;
        height: 30px;
    }
    span {
        font-size: 16px;
        text-transform: uppercase;
        margin-left: 15px;
    }
`;
export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    a {
        text-decoration: none;
        color: ${colors.color1};
        text-transform: uppercase;
        font-size: 14px;
        margin-left: 15px;
        transition: 0.4s;

        &:hover {
            opacity: 0.7;
        }
    }
`;
