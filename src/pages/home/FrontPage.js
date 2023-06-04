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
import { Container, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';


const drawerWidth = 240;
const navItems = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'projects', name: 'Projects' },
  { id: 'experience', name: 'Experience' },
  { id: 'contact', name: 'Contact' },
];

console.log(navItems)

const handleOnClick = () => {
  const url = "https://drive.google.com/file/d/1nBzPvfHMxI7EKtJ7LjocdgoyXoaI_RSM/view?usp=drive_link";
  window.open(url, "_blank")
};

const listItems = document.getElementsByClassName("link-no-decoration");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.textDecoration = "none";
}

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Porfolio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} className="link-no-decoration">
            <ListItemButton sx={{ textAlign: 'center', textDecoration: 'none' }}>
              <Link to={`/${item.id}`} >
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

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
            Porfolio
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.id} className="link-no-decoration">
                <Link to={`/${item.name}`} style={{ textDecoration: "none", textTransform: "initial", color: "white" }}>
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
      <Box component="main" >
        <Toolbar />
        <Container
        // sx={{
        //   background: '100%',
        //   color: 'black',
        //   backgroundImage: `url('https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')`,
        //   maxHeight: 'max-content',
        // }}
        >

          <Grid>

            <Card sx={{ minWidth: 275, mt: 13 }}>
              <CardContent>
                <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                  👋 Hello, I am
                </Typography>
                <Typography variant="h4" component="div" sx={{ ml: 10 }}>
                  Vijay
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
            <Card sx={{ minWidth: 275, mt: 5 }} >
              <CardContent>
                <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                  👨‍💻 Full Stack Developer
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </Grid>
          {/* <Link href='https://drive.google.com/file/d/1nBzPvfHMxI7EKtJ7LjocdgoyXoaI_RSM/view?usp=drive_link' target='_blank'></Link> */}
          <Button variant="contained" sx={{ mt: 2, ml: 15, backgroundColor: 'black', textTransform: 'capitalize' }} target="_blank" onClick={handleOnClick}>
            Resume
          </Button>
          {/* <Button variant="contained" sx={{mt: 5, ml: 20, backgroundColor: 'black', textTransform: 'capitalize'}}  */}
          {/* >Download Resume</Button> */}
        </Container>
        <Stack sx={{ width: 250, position: 'relative', left: 600, bottom: 350, }}>
          <img src='https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1510&q=80' alt='Error 404'></img>
        </Stack>
        <Stack sx={{ width: 215, position: 'relative', left: 950, bottom: 670 }}>
          <img src='https://images.unsplash.com/photo-1642697283420-194938fcc339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' alt='Error 404'></img>
        </Stack>
      </Box>
    </Box>

  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
