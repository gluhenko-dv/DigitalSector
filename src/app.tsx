import { Provider } from 'react-redux';
import { useStore } from './Store/store';
import Index from './Pages/index';

const App: React.FC = () => {
    const store = useStore({
        linkList: { status: 'idle', error: null, data: localStorage.linkData ? JSON.parse(localStorage.linkData) : [] },
        categories: {
            status: 'idle',
            error: null,
            data: [
                {
                    id: 'all',
                    name: 'Все'
                },
                {
                    id: 'dev',
                    name: 'Разработка'
                },
                {
                    id: 'books',
                    name: 'Полезные книги'
                },
                {
                    id: 'repository',
                    name: 'Интересные репозитории'
                },
                {
                    id: 'other',
                    name: 'Прочее'
                }
            ]
        }
    });
    return (
        <Provider store={store}>
            <Index />
        </Provider>
    );
};

export default App;
