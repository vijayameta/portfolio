import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ImageList, ImageListItem, Paper, Stack, Tooltip, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import './common.css';

const drawerWidth = 240;
const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'experience', name: 'Experience' },
    { id: 'contact', name: 'Contact' },
];

const handleOnClick = () => {
    const url = "https://drive.google.com/file/d/1N1VUp2djb1AdBzDa2NTEj86WtnzDWDuQ/view?usp=drive_link";
    window.open(url, "_blank");
};

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Portfolio
                </Link>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id}>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link to={`/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <ListItemText primary={item.name} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const mainPhotos = [
        {
            src: require("./developer_for_portfolio.jpeg"),
            alt: 'Error 404',
        },
        {
            src: require("./developer_doodles.jpeg"),
            alt: 'Error 404',
        },
    ];

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ bgcolor: 'black' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { xs: 'flex', sm: 'none' }, marginLeft: 1, color: 'white' }}
                        >
                            Portfolio
                        </Typography>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' }, color: 'white' }}
                        >
                            Portfolio
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item.id} className="link-no-decoration">
                                <Link to={`/${item.name}`} style={{ textDecoration: 'none', textTransform: 'initial', color: 'white' }}>
                                    {item.name}
                                </Link>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Grid className='container' container spacing={2}>
                    <Grid item xs={12} md={4} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                        <Card sx={{ width: '60%', mt: { xs: 4, md: 0 } }}>
                            <CardContent>
                                <Typography sx={{ fontSize: { xs: 24, md: 30 } }} style={{ textAlign: "center" }} color="text.secondary" gutterBottom>
                                    👋 Hello, I am
                                </Typography>
                                <Typography variant="h4" component="div" style={{ textAlign: "center" }}>
                                    Vijay
                                </Typography>
                            </CardContent>
                            <CardActions />
                        </Card>
                        <Card className="namecard" sx={{ width: '60%', mt: 2 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: { xs: 20, md: 25 } }} style={{ textAlign: "center" }} color="text.secondary" gutterBottom>
                                    👨‍💻 Full Stack Developer
                                </Typography>
                            </CardContent>
                            <CardActions />
                        </Card>
                        <Button
                            variant="contained"
                            sx={{
                                mt: 1.5,
                                backgroundColor: 'black',
                                textTransform: 'capitalize',
                                width: '30%',
                                fontSize: { xs: '1rem', md: '1.25rem' },
                            }}
                            target="_blank"
                            onClick={handleOnClick}
                        >
                            Resume
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Stack sx={{ mt: { xs: 2, md: 4 } }}>
                            <ImageList cols={2} gap={10} sx={{ mt: 4 }}>
                                {mainPhotos.map((item) => (
                                    <ImageListItem key={item.src} sx={{ padding: 2 }}>
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            loading="lazy"
                                            style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: "40rem" }}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Stack>
                        <Typography
                            className="quote"
                            sx={{
                                mt: 2,
                                fontSize: { xs: '1rem', md: '1.5rem' },
                                textAlign: 'center',
                            }}
                        >
                            <Tooltip
                                title="Code is like humor. When you have to explain it, it’s bad. – Cory House"
                                PopperProps={{
                                    modifiers: [
                                        {
                                            name: 'offset',
                                            options: {
                                                offset: [0, 10],
                                            },
                                        },
                                    ],
                                }}
                                componentsProps={{
                                    tooltip: {
                                        sx: {
                                            fontSize: '1rem',
                                            fontFamily: 'Arial, sans-serif',
                                            color: 'white',
                                            transition: 'color 0.3s ease',
                                        },
                                    },
                                }}
                            >
                                <Typography style={{ fontFamily: "cursive", fontSize: "1.5rem", textAlign: "center" }}>👺 Code is like humor. When you have to explain it, it’s bad. – Cory House</Typography>
                            </Tooltip>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
