export type AutoSearchProps<T> = {
    options: T[];
    onChangeHandler?: (value: T | string) => void;
    getOptionLabel: (option: T | string) => string;
    renderOption?: (
        props: React.HTMLAttributes<HTMLLIElement>,
        option: T,
    ) => React.ReactNode;
};
