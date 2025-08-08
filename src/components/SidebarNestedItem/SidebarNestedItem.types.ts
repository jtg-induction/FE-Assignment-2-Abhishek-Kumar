import { ElementType } from 'react';

import { SidebarSubItem } from '@components/Sidebar/Sidebar.types';

export interface SidebarNestedItemProps {
    label: string;
    Icon: ElementType;
    divider?: boolean;
    subItems: SidebarSubItem[] | undefined;
}
