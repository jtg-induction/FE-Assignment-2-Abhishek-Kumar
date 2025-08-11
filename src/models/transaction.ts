export interface TransactionInterface {
    name: string;
    message: string;
    date: string;
    amount: number;
    type: 'Credit' | 'Debit';
    status: number;
}
