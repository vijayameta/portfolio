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
import { Card, Container, Stack } from '@mui/material';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { StyledCard } from './MainProjectStyle';
import { Style } from '@mui/icons-material';

const drawerWidth = 240;
const navItems = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'projects', name: 'Projects' },
  { id: 'experience', name: 'Experience' },
  { id: 'contact', name: 'Contact' },
];

console.log(navItems)


const listItems = document.getElementsByClassName("link-no-decoration");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.textDecoration = "none";
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // const handleOnClick = (() => {
  //  const link = window.open("https://vijayameta.github.io/MyOnliineMeal.github.io/", "_blank");
  //  console.log(link)
  // });



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

  return (
    <Box sx={{ display: 'block' }}>
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
      <Box component="main" >
        <Toolbar />
      </Box>
      <Box>
        <Typography textAlign="center" variant='h3' marginTop={5} mb="100px">Pet Projects</Typography>
        <Grid variant='h3' fontFamily={"cursive"}>
          <Box className='project-containts' sx={{ display: 'flex', flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
            <StyledCard className='cards'>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lJ32Bl-lHWmNMUSiSq17gQ.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
                  HTML/Css
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Button>
                    <Link to="https://vijayameta.github.io/MyOnliineMeal.github.io/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white", width: 100, borderRadius: 10 }} target='_blank'>
                      View
                    </Link>
                  </Button>
                  MyOnlineMeal.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Button>
                    <Link to="https://vijayameta.github.io/MyBloggalib.github.io/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white", width: 100, borderRadius: 10 }} target='_blank'>
                      View
                    </Link>
                  </Button>
                  MyBloggalib
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Button>
                    <Link to="https://vijayameta.github.io/vijayfitness.github.io/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white", width: 100, borderRadius: 10 }} target='_blank'>
                      View
                    </Link>
                  </Button>
                  Gym Website
                </Typography>
              </CardContent>
            </StyledCard>
            <StyledCard className='cards'>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="https://tsh.io/wp-content/uploads/2020/09/typescript-vs-javascript-comparison_.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
                  JavaScript/typeScript
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Button>
                    <Link to="https://vijayameta.github.io/spotify.github.io/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white", width: 100, borderRadius: 10 }} target='_blank'>
                      View
                    </Link>
                  </Button>
                  Spotify Clone
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Button>
                    <Link to="https://vijayameta.github.io/vijayfitness.github.io/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white", width: 100, borderRadius: 10 }} target='_blank'>
                      View
                    </Link>
                  </Button>
                  Gym Website
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Button>
                    <Link to="https://github.com/vijayameta/mcq-box" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white", width: 100, borderRadius: 10 }} target='_blank'>
                      View
                    </Link>
                  </Button>
                  Live MCQ App
                </Typography>
              </CardContent>
            </StyledCard>
            <StyledCard className='cards'>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2021/03/nodejs-reference-architecture_1x.png?itok=MqGeWTLm"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
                  NodeJs
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Button>
                    <Link to="https://github.com/vijayameta/Restapi" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white", width: 100, borderRadius: 10 }} target='_blank'>
                      View
                    </Link>
                  </Button>
                  Students Data Api's
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Button>
                    <Link to="#" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white", width: 100, borderRadius: 10 }} target='_blank'>
                      View
                    </Link>
                  </Button>
                  Tours Api's
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Button>
                    <Link to="#" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white", width: 100, borderRadius: 10 }} target='_blank'>
                      View
                    </Link>
                  </Button>
                  Portfolio Api's
                </Typography>
              </CardContent>
            </StyledCard>
            <StyledCard className='cards'>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                  React.js
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Button>
                    <Link to="https://samparkdev.e-connectsolutions.com/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white", width: 100, borderRadius: 10 }} target='_blank'>
                      View
                    </Link>
                  </Button>
                  Raj Sampark (Raj. Govt.)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Button>
                    <Link to="https://portfolio-seven-pi-10.vercel.app/Projects" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white", width: 100, borderRadius: 10 }} target='_blank'>
                      View
                    </Link>
                  </Button>
                  Portfolio App
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Button>
                    <Link to="https://github.com/vijayameta/mcq-box" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white", width: 100, borderRadius: 10 }} target='_blank'>
                      View
                    </Link>
                  </Button>
                  Mcq App
                </Typography>
              </CardContent>
            </StyledCard>
          </Box>
        </Grid>
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
