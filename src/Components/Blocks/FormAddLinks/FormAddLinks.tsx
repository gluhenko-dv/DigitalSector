import { useForm } from 'react-hook-form';
import { FormAddLinksWrapper } from './FormAddLinks.styled';
import { updateLinks } from '../../../Store/LinkListStore/LinkListSlice';
import { RootState } from '../../../Store/rootReducer';
import { connect, ConnectedProps } from 'react-redux';
import colors from '../../../Assets/styles/colors';

const mapStateToProps = ({ categories }: RootState) => ({ categories });

const mapDispatchToProps = {
    updateLinks
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface FormAddLink extends PropsFromRedux {
    setModalOpen: (status: boolean) => void;
}

const FormAddLinks: React.FC<FormAddLink> = ({ categories, updateLinks, setModalOpen }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data: any) => {
        data.id = Date.now();
        updateLinks(data);
        setModalOpen(false);
        reset();
    };

    return (
        <FormAddLinksWrapper onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                {...register('name', {
                    required: true
                })}
                placeholder="Введите название"
                style={{ borderBottom: `1px solid ${errors.name ? colors.color3 : colors.color1}` }}
            />
            <input
                type="text"
                {...register('link', {
                    required: true
                })}
                placeholder="Введите ссылку"
                style={{ borderBottom: `1px solid ${errors.link ? colors.color3 : colors.color1}` }}
            />
            <select {...register('groupId')} style={{ borderBottom: `1px solid ${errors.groupId ? colors.color3 : colors.color1}` }}>
                {categories.data.map(({ id, name }) => {
                    if (id === 'all') return;
                    return (
                        <option key={id} value={id}>
                            {name}
                        </option>
                    );
                })}
            </select>
            <button type="submit">Добавить</button>
        </FormAddLinksWrapper>
    );
};

export default connector(FormAddLinks);
