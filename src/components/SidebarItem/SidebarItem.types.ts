import { ElementType } from 'react';

export interface SidebarItemProps {
    label: string;
    Icon: ElementType;
    path: string;
    badge?: number;
    divider?: boolean;
}
