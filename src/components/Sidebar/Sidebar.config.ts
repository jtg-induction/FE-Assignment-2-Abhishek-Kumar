import AssignmentIcon from '@mui/icons-material/Assignment';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LockIcon from '@mui/icons-material/Lock';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import SupportIcon from '@mui/icons-material/Support';

import { SidebarItem } from './Sidebar.types';

export const sidebarData: SidebarItem[] = [
    {
        label: 'Overview',
        icon: DataUsageIcon,
        path: '/',
    },
    {
        label: 'Pages',
        icon: DescriptionIcon,
        children: [
            { label: 'Dashboard', path: '/pages/dashboard' },
            { label: 'Profile', path: '/pages/profile' },
            { label: 'Settings', path: '/pages/settings' },
        ],
    },
    {
        label: 'Sales',
        icon: LocalMallIcon,
        children: [
            { label: 'Product List', path: '/sales/products' },
            { label: 'Billing', path: '/sales/billing' },
            { label: 'Invoice', path: '/sales/invoice' },
        ],
    },
    {
        label: 'Messages',
        icon: MoveToInboxIcon,
        path: '/messages',
        badge: 1,
    },
    {
        label: 'Authentication',
        icon: LockIcon,
        children: [
            { label: 'Login', path: '/auth/login' },
            { label: 'Register', path: '/auth/register' },
            { label: 'Forgot Password', path: '/auth/forgot-password' },
        ],
        divider: true,
    },
    {
        label: 'Docs',
        icon: AssignmentIcon,
        path: '/docs',
    },
    {
        label: 'Components',
        icon: LayersIcon,
        path: '/components',
    },
    {
        label: 'Help',
        icon: SupportIcon,
        path: '/help',
    },
];
