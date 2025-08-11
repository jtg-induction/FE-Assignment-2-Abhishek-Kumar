import { StatusMappingType } from './TransactionTable.types';

export const tableHeaderConfig = [
    {
        id: 'transaction',
        label: 'Transaction',
    },
    {
        id: 'date',
        label: 'Date & Time',
    },
    {
        id: 'amount',
        label: 'Amount',
    },
    {
        id: 'status',
        label: 'Status',
    },
];

export const statusMapping: StatusMappingType = {
    1: {
        label: 'Completed',
        variant: 'success',
    },
    2: {
        label: 'In progress',
        variant: 'info',
    },
    3: {
        label: 'Cancelled',
        variant: 'error',
    },
};
