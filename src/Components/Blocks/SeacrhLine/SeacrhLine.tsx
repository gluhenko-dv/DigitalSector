import { SeacrhLineWrapper } from './SeacrhLine.styled';

interface SeacrhLineProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

const SeacrhLine: React.FC<SeacrhLineProps> = ({ searchValue, setSearchValue }) => {
    const onInputHandler = (e: React.SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        setSearchValue(target.value);
    };

    return (
        <SeacrhLineWrapper>
            <input type="text" onInput={onInputHandler} value={searchValue} placeholder="Поиск по названию..." />
        </SeacrhLineWrapper>
    );
};

export default SeacrhLine;
