import React from 'react';
import { Header } from '..';

const Layout: React.FC = (props) => {
    const { children } = props;
    return (
        <>
            <Header />

            {children}
        </>
    );
};

export default Layout;
