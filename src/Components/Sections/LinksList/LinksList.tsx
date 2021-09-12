import { useState } from 'react';
import { FormAddLinks, List, Сategories } from '../../Blocks';
import { Modal } from '../../Common';
import { LinksListWrapper } from './LinksList.styled';

const LinksList: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <LinksListWrapper>
            <Сategories setSelectedCategory={setSelectedCategory} />
            <List selectedCategory={selectedCategory} setModalOpen={setModalOpen} />
            <Modal isOpen={modalOpen} setModalOpen={setModalOpen}>
                <FormAddLinks setModalOpen={setModalOpen} />
            </Modal>
        </LinksListWrapper>
    );
};

export default LinksList;
