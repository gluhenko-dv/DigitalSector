import styled from 'styled-components';

export const СategoriesWrapper = styled.nav`
    width: 15%;
    border-bottom: 1px solid black;
    li {
        cursor: pointer;
        list-style: none;
        border-top: 1px solid black;
        padding: 10px 0;
        box-sizing: border-box;
        transition: 0.4s;
        &:hover {
            background-color: #eeeeee;
        }
    }
`;
