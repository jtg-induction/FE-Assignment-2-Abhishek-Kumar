import { Search } from '@mui/icons-material';
import { AutocompleteRenderInputParams } from '@mui/material';
import { Autocomplete } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { AutoSearchProps } from '@components/AutoSearch/AutoSearch.types';

import { useStyles } from './AutoSearch.styles';

export const AutoSearch = <T,>({
    options,
    renderOption,
    getOptionLabel,
    onChangeHandler,
}: AutoSearchProps<T>) => {
    const { classes } = useStyles();

    return (
        <Autocomplete
            freeSolo
            disableClearable
            className={classes['auto-search']}
            onChange={(_, value) => {
                onChangeHandler?.(value);
            }}
            options={options}
            renderOption={renderOption}
            getOptionLabel={getOptionLabel}
            renderInput={(params: AutocompleteRenderInputParams) => (
                <TextField
                    {...params}
                    placeholder="Search"
                    slotProps={{
                        input: {
                            ...params.InputProps,
                            type: 'search',
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            )}
        />
    );
};
