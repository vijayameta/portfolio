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
        Porfolio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} className="link-no-decoration">
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={`/${item.id}`} >
                <ListItemText primary={item.name} sx={{ textDecoration: 'none' }} />
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
      </Box>
      <Box>
        <Typography variant='h3' marginTop={15} marginLeft={65} fontFamily={"cursive"}>Pet Projects</Typography>
        <Grid variant='h3' fontFamily={"cursive"}>
        <Container sx={{ display: 'flex', flexDirection: "row", justifyContent: "center", alignItems: "center", margin: 2 }}>
          <Card sx={{ maxWidth: 345, ml: 5 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lJ32Bl-lHWmNMUSiSq17gQ.png"
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
                HTML/Css
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Button>
                  <Link to="https://vijayameta.github.io/MyOnliineMeal.github.io/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white" }} target='_blank'>
                    View
                  </Link>
                </Button>
                MyOnlineMeal.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Button>
                  <Link to="https://vijayameta.github.io/MyBloggalib.github.io/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white" }} target='_blank'>
                    View
                  </Link>
                </Button>
                MyBloggalib
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Button>
                  <Link to="https://vijayameta.github.io/vijayfitness.github.io/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white" }} target='_blank'>
                    View
                  </Link>
                </Button>
                  Gym Website
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, m: 3 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://tsh.io/wp-content/uploads/2020/09/typescript-vs-javascript-comparison_.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
                JavaScript/typeScript
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Button>
                  <Link to="https://vijayameta.github.io/spotify.github.io/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white" }} target='_blank'>
                    View
                  </Link>
                </Button>
                  Spotify Clone
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Button>
                  <Link to="https://vijayameta.github.io/vijayfitness.github.io/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white" }} target='_blank'>
                    View
                  </Link>
                </Button>
                  Gym Website
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Button>
                  <Link to="https://vijayameta.github.io/vijayfitness.github.io/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white" }} target='_blank'>
                    View
                  </Link>
                </Button>
                  Gym Website
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345, m: 3 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2021/03/nodejs-reference-architecture_1x.png?itok=MqGeWTLm"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
               NodeJs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Button>
                  <Link to="https://github.com/vijayameta/Restapi" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white" }} target='_blank'>
                    View
                  </Link>
                </Button>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Button>
                  <Link to="https://vijayameta.github.io/vijayfitness.github.io/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white" }} target='_blank'>
                    View
                  </Link>
                </Button>
                  Gym Website
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Button>
                  <Link to="https://vijayameta.github.io/vijayfitness.github.io/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white" }} target='_blank'>
                    View
                  </Link>
                </Button>
                  Gym Website
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
                React.js
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Button>
                  <Link to="https://vijayameta.github.io/vijayfitness.github.io/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white" }} target='_blank'>
                    View
                  </Link>
                </Button>
                  Gym Website
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Button>
                  <Link to="https://vijayameta.github.io/vijayfitness.github.io/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white" }} target='_blank'>
                    View
                  </Link>
                </Button>
                  Gym Website
              </Typography> <Typography variant="body2" color="text.secondary">
                <Button>
                  <Link to="https://vijayameta.github.io/vijayfitness.github.io/" style={{ textDecoration: "none", textTransform: "initial", background: "black", color: "white" }} target='_blank'>
                    View
                  </Link>
                </Button>
                  Gym Website
              </Typography>
            </CardContent>
          </Card>
        </Container>
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
