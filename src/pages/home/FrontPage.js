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
import { Container, ImageList, ImageListItem, Paper, Stack, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder'; // Corrected import
import { Height } from '@mui/icons-material';

import './common.css'

const drawerWidth = 240;
const navItems = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'projects', name: 'Projects' },
  { id: 'experience', name: 'Experience' },
  { id: 'contact', name: 'Contact' },
];

const handleOnClick = () => {
  const url = "https://drive.google.com/file/d/1nBzPvfHMxI7EKtJ7LjocdgoyXoaI_RSM/view?usp=drive_link";
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
        Portfolio 🧾
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} className="link-no-decoration">
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={`/${item.id}`} style={{ textDecoration: 'none' }}>
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
      src: require("./developer_for_portfolio.jpeg"),  // Corrected to use require
      alt: 'Error 404',
      height: "50vh"
    },
    {
      src: require("./developer_doodles.jpeg"),
      alt: 'Error 404',
      height: "50vh"
    }
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Portfolio
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.id} className="link-no-decoration">
                <Link to={`/${item.id}`} style={{ textDecoration: "none", textTransform: "initial", color: "white" }}>
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
      <Box component="main" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
        <Toolbar />
        <Grid style={{ marginTop: 100 }}>
          <Card sx={{ width: "18vw", mt: 20 }}>
            <CardContent>
              <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                👋 Hello, I am
              </Typography>
              <Typography variant="h4" component="div" sx={{ ml: 10 }}>
                Vijay
              </Typography>
            </CardContent>
            <CardActions />
          </Card>
          <Card sx={{ width: "fit-content", mt: 10 }} >
            <CardContent>
              <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                👨‍💻 Full Stack Developer
              </Typography>
            </CardContent>
            <CardActions />
          </Card>

          <Button
            variant="contained"
            sx={{ mt: 2, ml: 15, backgroundColor: 'black', textTransform: 'capitalize' }}
            target="_blank"
            onClick={handleOnClick}
          >
            Resume
          </Button>
        </Grid>
        <Grid xs={4}>
          <Stack direction="row" style={{ position: "relative", left: "50%", top: "27%" }}>
            <ImageList cols={2} gap={10}>
              {mainPhotos.map(item =>
                <ImageListItem key={item.src} style={{ padding: 10 }}> {/* Using item.src for key */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    height={item.height}
                    style={{ width: "100%", height: `${item.height}`, objectFit: "cover/center" }}
                  />
                </ImageListItem>
              )}
            </ImageList>
          </Stack>
          <Typography
            className="quote"
            style={{
              position: 'absolute',
              bottom: 70,
              fontSize: '1.5rem',
              left: 800,
              wordBreak: 'break-all',
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
                  style: {
                    fontSize: '1.5rem', // Font size
                    fontFamily: 'Arial, sans-serif', // Font family
                    color: '#3498db', // Default text color
                    transition: 'color 0.3s ease', // Smooth color transition
                  },
                },
              }}
            >
              <span style={{ fontFamily: "cursive", fontSize: "1.5rem" }}>Code is like humor. When you have to explain it, it’s bad. – Cory House</span>
            </Tooltip>
          </Typography>

        </Grid>
      </Box>
    </Box>
  );

}
DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
