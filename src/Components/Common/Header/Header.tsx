import { HeaderWrap, HeaderLogo, HeaderNav } from './Header.styled';

const Header: React.FC = () => {
    return (
        <HeaderWrap>
            <HeaderLogo>
                <img src="./Assets/images/list.svg" alt="" />
                <span>favorites Links</span>
            </HeaderLogo>
            <HeaderNav>
                <a href="https://docs.google.com/document/d/1VG49uhRvXsvKnTztDl42DJR4rrfE4ZDYk3Ae-PmPk_E/edit" target="_blank">
                    тех.задание
                </a>
                <a href="https://github.com/gluhenko-dv/DigitalSector" target="_blank">
                    github
                </a>
            </HeaderNav>
        </HeaderWrap>
    );
};

export default Header;
