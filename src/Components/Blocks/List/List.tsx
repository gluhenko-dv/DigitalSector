import { useState } from 'react';
import { SeacrhLine } from '..';
import { ListHeader, ListWrapper } from './List.styled';

interface ListProps {
    selectedCategory: number;
    setModalOpen: (status: boolean) => void;
}

const List: React.FC<ListProps> = ({ selectedCategory, setModalOpen }) => {
    const [searchValue, setSearchValue] = useState<string>('');

    const list: { id: number; link: string; groupId: number }[] = [
        {
            id: 0,
            link: 'test',
            groupId: 1
        },
        {
            id: 1,
            link: 'mtest',
            groupId: 1
        },
        {
            id: 2,
            link: 'vest',
            groupId: 2
        },
        {
            id: 3,
            link: 'vvvest',
            groupId: 3
        },
        {
            id: 4,
            link: 'fdsftest',
            groupId: 3
        },
        {
            id: 5,
            link: 'tefst',
            groupId: 2
        },
        {
            id: 6,
            link: 'tesfft',
            groupId: 2
        }
    ];

    const clickHandler = () => {
        setModalOpen(true);
    };

    return (
        <ListWrapper>
            <ListHeader>
                <SeacrhLine searchValue={searchValue} setSearchValue={setSearchValue} />
                <button onClick={clickHandler}>Добавить ссылку</button>
            </ListHeader>

            {list.length === 0 ? (
                <span>пока пусто :(</span>
            ) : (
                <ul>
                    {list.map(({ id, link, groupId }) => {
                        if (groupId === selectedCategory || selectedCategory === 0) {
                            if (link.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1) return <li key={id}>{link}</li>;
                        }
                    })}
                </ul>
            )}
        </ListWrapper>
    );
};

export default List;
