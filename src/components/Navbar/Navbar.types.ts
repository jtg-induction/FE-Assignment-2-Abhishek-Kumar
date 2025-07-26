import { Dispatch, SetStateAction } from 'react';

export interface NavbarPropsInterface {
    setIsSidebarOpen?: Dispatch<SetStateAction<boolean>>;
}
