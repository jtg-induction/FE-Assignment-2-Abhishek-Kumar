import { Dispatch, ElementType, SetStateAction } from 'react';

export interface SidebarPropsInterface {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    isDesktopHidden?: boolean;
}

export interface SidebarItem {
    label: string;
    icon: ElementType;
    path?: string;
    badge?: number;
    divider?: boolean;
    children?: SidebarSubItem[];
}

export interface SidebarSubItem {
    label: string;
    path: string;
}
