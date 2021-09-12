import { СategoriesWrapper } from './Сategories.styled';

interface СategoriesProps {
    setSelectedCategory: (id: number) => void;
}

const Сategories: React.FC<СategoriesProps> = ({ setSelectedCategory }) => {
    const categoristList: { id: number; name: string }[] = [
        {
            id: 0,
            name: 'Все'
        },
        {
            id: 1,
            name: 'Разработка'
        },
        {
            id: 2,
            name: 'Полезные книги'
        },
        {
            id: 3,
            name: 'Интересные репозитории'
        },
        {
            id: 4,
            name: 'Прочее'
        }
    ];

    console.log('+');

    return (
        <СategoriesWrapper>
            {categoristList.map(({ id, name }) => (
                <li key={id} onClick={() => setSelectedCategory(id)}>
                    {name}
                </li>
            ))}
        </СategoriesWrapper>
    );
};

export default Сategories;
