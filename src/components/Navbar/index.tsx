import { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import { Divider, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';

import Logo from '@assets/images/Logo.svg';
import AutoSearch from '@components/AutoSearch/AutoSearch.component';
import NotificationIcon from '@components/Navbar/NotificationIcon';
import UserAvatar from '@components/user/UserAvatar';
import { ProductsApiPath } from '@constant';
import { DataContext } from '@context/DataContext';
import useFetch from '@hooks/useFetch';
import { ProductInterface } from '@models/product';

const Navbar = () => {
    const navigate = useNavigate();
    const { palette, breakpoints, spacing } = useTheme();

    const { setProducts } = useContext(DataContext);

    // Fetch Product data using custom hooks
    const { data: ProductData, fetchData } = useFetch<ProductInterface[]>();

    useEffect(() => {
        const ProductApi = async () => {
            await fetchData({
                url: String(ProductsApiPath),
                method: 'GET',
            });
        };
        void ProductApi();
    }, [fetchData]);

    // Store product data in context so that can user in other components
    useEffect(() => {
        if (ProductData) setProducts(ProductData);
    }, [ProductData, setProducts]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="sticky"
                sx={{
                    bgcolor: palette.background.paper,
                    boxShadow: 0,
                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{
                            mr: 4,
                            [breakpoints.up('lg')]: {
                                display: 'none',
                            },
                        }}
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
                            sx={{
                                display: 'none',
                                [breakpoints.up('lg')]: {
                                    display: 'flex',
                                },
                            }}
                        >
                            <img src={Logo} alt="logo" />
                        </Box>

                        {/* AutoComplete */}
                        <Paper
                            elevation={2}
                            sx={{
                                borderRadius: 4,
                                minWidth: spacing(100),
                                display: 'none',

                                [breakpoints.up('md')]: {
                                    display: 'block',
                                },
                            }}
                        >
                            <AutoSearch<ProductInterface>
                                options={ProductData || []}
                                getOptionLabel={(
                                    option: string | ProductInterface,
                                ) => {
                                    if (typeof option === 'string')
                                        return option;
                                    return option?.name;
                                }}
                                onChangeHandler={async (
                                    selectedProduct: ProductInterface | string,
                                ) => {
                                    if (typeof selectedProduct === 'string') {
                                        await navigate(
                                            `/product/${selectedProduct}`,
                                        );
                                    } else {
                                        await navigate(
                                            `/product/${selectedProduct?.name}`,
                                        );
                                    }
                                }}
                            />
                        </Paper>
                    </Stack>

                    <Box sx={{ flexGrow: 1 }} />

                    <Stack direction="row" alignItems="center" spacing={1}>
                        <NotificationIcon />
                        <UserAvatar />
                    </Stack>
                </Toolbar>
            </AppBar>
            <Divider />
        </Box>
    );
};

export default Navbar;
