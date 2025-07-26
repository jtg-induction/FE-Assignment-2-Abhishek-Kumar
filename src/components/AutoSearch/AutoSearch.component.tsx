import { Search } from '@mui/icons-material';
import { AutocompleteRenderInputParams } from '@mui/material';
import { Autocomplete } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { AutoSearchProps } from '@components/AutoSearch/AutoSearch.types';

const AutoSearch = <T,>(props: AutoSearchProps<T>) => {
    return (
        <Autocomplete
            freeSolo
            disableClearable
            sx={(theme) => ({
                borderRadius: 4,
                backgroundColor: theme.palette.background.default,
                width: '100%',
                ' & .MuiInputBase-root': {
                    borderRadius: 4,
                    py: 1,
                },
            })}
            onChange={(_, value) => {
                void props.onChangeHandler?.(value);
            }}
            options={props.options}
            renderOption={props?.renderOption}
            getOptionLabel={props?.getOptionLabel}
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

export default AutoSearch;
