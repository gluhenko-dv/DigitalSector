import { useState } from 'react';
import { SeacrhLine } from '..';
import { ListHeader, ListWrapper } from './List.styled';
import { RootState } from '../../../Store/rootReducer';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = ({ linkList }: RootState) => ({ linkList });

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface ListProps extends PropsFromRedux {
    selectedCategory: string;
    setModalOpen: (status: boolean) => void;
}

const List: React.FC<ListProps> = ({ selectedCategory, setModalOpen, linkList }) => {
    const [searchValue, setSearchValue] = useState<string>('');

    const clickHandler = () => {
        setModalOpen(true);
    };

    return (
        <ListWrapper>
            <ListHeader>
                <SeacrhLine searchValue={searchValue} setSearchValue={setSearchValue} />
                <button onClick={clickHandler}>Добавить ссылку</button>
            </ListHeader>

            {linkList.data.length === 0 ? (
                <span>пока пусто</span>
            ) : (
                <ul>
                    {linkList?.data.map(({ id, link, groupId, name }, i) => {
                        if (groupId === selectedCategory || selectedCategory === 'all') {
                            if (name.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1)
                                return (
                                    <li key={id}>
                                        <span>
                                            {++i} {name}
                                        </span>
                                        <a href={link}>{link}</a>
                                    </li>
                                );
                        }
                    })}
                </ul>
            )}
        </ListWrapper>
    );
};

export default connector(List);
