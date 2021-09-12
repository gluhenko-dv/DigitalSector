import { СategoriesWrapper } from './Сategories.styled';
import { RootState } from '../../../Store/rootReducer';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = ({ categories }: RootState) => ({ categories });

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface СategoriesProps extends PropsFromRedux {
    setSelectedCategory: (id: string) => void;
}

const Сategories: React.FC<СategoriesProps> = ({ categories, setSelectedCategory }) => {
    return (
        <СategoriesWrapper>
            {categories.data.map(({ id, name }) => (
                <li key={id} onClick={() => setSelectedCategory(id)}>
                    {name}
                </li>
            ))}
        </СategoriesWrapper>
    );
};

export default connector(Сategories);
