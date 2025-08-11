import { TransactionInterface } from '@models/transaction';

export interface TransactionTablePropsInterface {
    data: TransactionInterface[];
}

export interface StatusInfo {
    label: string;
    variant: 'success' | 'error' | 'info';
}

export type StatusMappingType = Record<number, StatusInfo>;
