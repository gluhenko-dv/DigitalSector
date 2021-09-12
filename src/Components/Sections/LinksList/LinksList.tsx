import { useState } from 'react';
import { List, Сategories } from '../../Blocks';
import { Modal } from '../../Common';
import { LinksListWrapper } from './LinksList.styled';

const LinksList: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<number>(0);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <LinksListWrapper>
            <Сategories setSelectedCategory={setSelectedCategory} />
            <List selectedCategory={selectedCategory} setModalOpen={setModalOpen} />
            <Modal isOpen={modalOpen} setModalOpen={setModalOpen}/>
        </LinksListWrapper>
    );
};

export default LinksList;
