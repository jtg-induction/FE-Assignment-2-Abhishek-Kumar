import React, { createContext, ReactNode, useContext, useState } from 'react';

import { ProductInterface } from '@type/product';

type AuthUser = {
    name: string;
    email: string;
};

type DataContextType = {
    user: AuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;

    products: ProductInterface[] | null;
    setProducts: React.Dispatch<
        React.SetStateAction<ProductInterface[] | null>
    >;
};

const mockUser: AuthUser = {
    name: 'Abhishek',
    email: 'abc@jtg',
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<AuthUser | null>(mockUser);
    const [products, setProducts] = useState<ProductInterface[] | null>(null);

    return (
        <DataContext.Provider value={{ user, setUser, products, setProducts }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = (): DataContextType => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};
