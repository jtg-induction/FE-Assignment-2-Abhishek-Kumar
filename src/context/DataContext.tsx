import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from 'react';

import { ProductInterface } from '@models/product';
import { AuthUser } from '@models/user';

type DataContextType = {
    user: AuthUser;
    setUser: Dispatch<SetStateAction<AuthUser>>;

    products: ProductInterface[];
    setProducts: Dispatch<SetStateAction<ProductInterface[]>>;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const [products, setProducts] = useState<ProductInterface[]>([]);

    return (
        <DataContext.Provider value={{ user, setUser, products, setProducts }}>
            {children}
        </DataContext.Provider>
    );
};
