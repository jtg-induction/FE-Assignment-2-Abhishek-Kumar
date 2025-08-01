import { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';

import Logo from '@assets/images/Logo.svg';
import { AutoSearch } from '@components/AutoSearch';
import { Notification } from '@components/Notification';
import { UserAvatar } from '@components/UserAvatar';
import { ProductsApiPath } from '@constant';
import { DataContext } from '@context/DataContext';
import { useFetch } from '@hooks/useFetch';
import { ProductInterface } from '@models/product';

import { useStyles } from './Navbar.styles';

export const Navbar = () => {
    const navigate = useNavigate();

    const { classes } = useStyles();

    const { setProducts } = useContext(DataContext);

    // Fetch Product data using custom hooks
    const { data: productData, fetchData } = useFetch<ProductInterface[]>();

    useEffect(() => {
        fetchData({
            url: String(ProductsApiPath),
            method: 'GET',
        });
    }, []);

    // Store product data in context so that can user in other components
    useEffect(() => {
        if (productData) setProducts(productData);
    }, [productData]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" className={classes.header}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        className={classes['menu-button']}
                    >
                        <FormatAlignLeftIcon />
                    </IconButton>

                    <Stack
                        direction="row"
                        gap={8}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box
                            component="a"
                            href="/"
                            className={classes['logo-container']}
                        >
                            <img src={Logo} alt="logo" />
                        </Box>

                        {/* AutoComplete */}
                        <Paper
                            elevation={2}
                            className={classes['auto-search-container']}
                        >
                            <AutoSearch<ProductInterface>
                                options={productData || []}
                                getOptionLabel={(
                                    option: string | ProductInterface,
                                ) => {
                                    if (typeof option === 'string')
                                        return option;
                                    return option?.name;
                                }}
                                onChangeHandler={(
                                    selectedProduct: ProductInterface | string,
                                ) => {
                                    if (typeof selectedProduct === 'string') {
                                        navigate(`/product/${selectedProduct}`);
                                    } else {
                                        navigate(
                                            `/product/${selectedProduct?.name}`,
                                        );
                                    }
                                }}
                            />
                        </Paper>
                    </Stack>

                    <Box sx={{ flexGrow: 1 }} />

                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Notification />
                        <UserAvatar />
                    </Stack>
                </Toolbar>
            </AppBar>
            <Divider />
        </Box>
    );
};
